package com.fenglin.springboottest;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.fenglin.springboottest.common.BusinessException;
import com.fenglin.springboottest.common.Result;
import com.fenglin.springboottest.dto.LoginRequest;
import com.fenglin.springboottest.entity.ArtifactSet;
import com.fenglin.springboottest.entity.CharPanel;
import com.fenglin.springboottest.entity.CharSubstat;
import com.fenglin.springboottest.entity.CharWeapon;
import com.fenglin.springboottest.entity.CharacterConstellation;
import com.fenglin.springboottest.entity.CharacterTalent;
import com.fenglin.springboottest.entity.GenshinCharacter;
import com.fenglin.springboottest.entity.Team;
import com.fenglin.springboottest.entity.TeamMember;
import com.fenglin.springboottest.entity.Weapon;
import com.fenglin.springboottest.mapper.ArtifactSetMapper;
import com.fenglin.springboottest.mapper.CharPanelMapper;
import com.fenglin.springboottest.mapper.CharSubstatMapper;
import com.fenglin.springboottest.mapper.CharacterConstellationMapper;
import com.fenglin.springboottest.mapper.CharacterTalentMapper;
import com.fenglin.springboottest.mapper.CharWeaponMapper;
import com.fenglin.springboottest.mapper.CharacterMapper;
import com.fenglin.springboottest.mapper.TeamMapper;
import com.fenglin.springboottest.mapper.TeamMemberMapper;
import com.fenglin.springboottest.mapper.WeaponMapper;
import com.fenglin.springboottest.service.UserService;
import com.fenglin.springboottest.vo.AdminTeamVO;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 后台管理接口：仅管理员可登录，用于维护首页展示的角色与武器数据。
 *
 * <p>application.properties 中 server.servlet.context-path=/api，
 * 因此本类的完整路径为 /api/admin/**。</p>
 *
 * <pre>
 *   POST /api/admin/login              管理员登录（复用 UserService 的 BCrypt 校验，额外校验 role=0）
 *   POST /api/admin/logout             退出登录
 *   GET  /api/admin/session            查询当前登录态（前端刷新页面时用）
 *   GET  /api/admin/characters         角色全量列表（含隐藏数据，按 sort_order 排序）
 *   PUT  /api/admin/characters/{id}    修改一条角色数据
 *   GET  /api/admin/weapons            武器全量列表（含隐藏数据，按 sort_order 排序）
 *   PUT  /api/admin/weapons/{id}       修改一条武器数据
 * </pre>
 *
 * <p>除 login 外的接口都要求 HttpSession 中存在管理员标识，
 * 未登录返回 code=401，前端据此跳回后台登录页。</p>
 *
 * <p>说明：name 字段被 t_char_weapon / t_weapon_user / t_material_item 等表按名称关联，
 * 改名不会自动同步这些关联表，因此前端编辑弹窗会对改名给出提示。</p>
 */
@RestController
@RequestMapping("/admin")
public class AdminController {

    private static final String ADMIN_SESSION_KEY = "ADMIN_USER";

    @Autowired
    private UserService userService;

    @Autowired
    private CharacterMapper characterMapper;

    @Autowired
    private WeaponMapper weaponMapper;

    @Autowired
    private CharWeaponMapper charWeaponMapper;

    @Autowired
    private TeamMapper teamMapper;

    @Autowired
    private TeamMemberMapper teamMemberMapper;

    @Autowired
    private ArtifactSetMapper artifactSetMapper;

    @Autowired
    private CharacterTalentMapper characterTalentMapper;

    @Autowired
    private CharacterConstellationMapper characterConstellationMapper;

    @Autowired
    private CharSubstatMapper charSubstatMapper;

    @Autowired
    private CharPanelMapper charPanelMapper;

    /**
     * 管理员登录。普通用户（role=1）即使账号密码正确也会被拒绝。
     */
    @PostMapping("/login")
    public Result<Map<String, Object>> login(@RequestBody LoginRequest request,
                                             HttpServletRequest httpRequest) {
        Map<String, Object> user = userService.login(request.getUsername(), request.getPassword());
        Object role = user.get("role");
        if (role == null || !"0".equals(String.valueOf(role))) {
            throw new BusinessException("该账号没有后台管理权限");
        }
        HttpSession session = httpRequest.getSession(true);
        session.setAttribute(ADMIN_SESSION_KEY, user.get("username"));
        return Result.ok("登录成功", user);
    }

    /**
     * 退出登录，销毁会话。
     */
    @PostMapping("/logout")
    public Result<Void> logout(HttpServletRequest httpRequest) {
        HttpSession session = httpRequest.getSession(false);
        if (session != null) {
            session.invalidate();
        }
        return Result.ok();
    }

    /**
     * 当前登录态。刷新后台页面时前端先调这个接口，失效则退回登录页。
     */
    @GetMapping("/session")
    public Result<Map<String, Object>> session(HttpServletRequest httpRequest) {
        String username = currentAdmin(httpRequest);
        if (username == null) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        Map<String, Object> data = new HashMap<>();
        data.put("username", username);
        return Result.ok(data);
    }

    /**
     * 角色全量列表。与首页不同，这里包含 status=0 的隐藏记录，便于后台统一维护。
     */
    @GetMapping("/characters")
    public Result<List<GenshinCharacter>> characters(HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        List<GenshinCharacter> list = characterMapper.selectList(
                new LambdaQueryWrapper<GenshinCharacter>()
                        .orderByAsc(GenshinCharacter::getSortOrder)
                        .orderByAsc(GenshinCharacter::getId));
        return Result.ok(list);
    }

    /**
     * 修改角色数据。只更新允许编辑的字段，忽略前端可能传入的 id / 创建时间 / 更新时间。
     */
    @PutMapping("/characters/{id}")
    public Result<GenshinCharacter> updateCharacter(@PathVariable("id") Long id,
                                                    @RequestBody GenshinCharacter body,
                                                    HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        if (body == null || body.getName() == null || body.getName().isBlank()) {
            throw new BusinessException("角色名不能为空");
        }
        validateCommon(body.getRarity(), body.getStatus(), "星级");

        GenshinCharacter current = characterMapper.selectById(id);
        if (current == null) {
            throw new BusinessException("记录不存在，可能已被删除（id=" + id + "）");
        }

        GenshinCharacter patch = new GenshinCharacter();
        patch.setId(id);
        patch.setName(body.getName().trim());
        patch.setElement(body.getElement());
        patch.setRarity(body.getRarity());
        patch.setRoleName(body.getRoleName());
        patch.setTalents(body.getTalents());
        patch.setArtifacts(body.getArtifacts());
        patch.setMainStats(body.getMainStats());
        patch.setSummary(body.getSummary());
        patch.setSortOrder(body.getSortOrder());
        patch.setStatus(body.getStatus());
        characterMapper.updateById(patch);

        return Result.ok("保存成功", characterMapper.selectById(id));
    }

    /**
     * 武器全量列表。与首页不同，这里包含 status=0 的隐藏记录。
     */
    @GetMapping("/weapons")
    public Result<List<Weapon>> weapons(HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        List<Weapon> list = weaponMapper.selectList(
                new LambdaQueryWrapper<Weapon>()
                        .orderByAsc(Weapon::getSortOrder)
                        .orderByAsc(Weapon::getId));
        return Result.ok(list);
    }

    /**
     * 修改武器数据。
     */
    @PutMapping("/weapons/{id}")
    public Result<Weapon> updateWeapon(@PathVariable("id") Long id,
                                       @RequestBody Weapon body,
                                       HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        if (body == null || body.getName() == null || body.getName().isBlank()) {
            throw new BusinessException("武器名不能为空");
        }
        validateCommon(body.getRarity(), body.getStatus(), "星级");

        Weapon current = weaponMapper.selectById(id);
        if (current == null) {
            throw new BusinessException("记录不存在，可能已被删除（id=" + id + "）");
        }

        Weapon patch = new Weapon();
        patch.setId(id);
        patch.setName(body.getName().trim());
        patch.setRarity(body.getRarity());
        patch.setType(body.getType());
        patch.setStat(body.getStat());
        patch.setAtk1(body.getAtk1());
        patch.setAtk90(body.getAtk90());
        patch.setSubStat(body.getSubStat());
        patch.setSubValue(body.getSubValue());
        patch.setDescription(body.getDescription());
        patch.setSortOrder(body.getSortOrder());
        patch.setStatus(body.getStatus());
        weaponMapper.updateById(patch);

        return Result.ok("保存成功", weaponMapper.selectById(id));
    }

    // ==================================================================
    // 模块：角色武器推荐（t_char_weapon）
    // ==================================================================

    /** 武器推荐全量列表（按角色顺序 + 组内推荐顺序）。 */
    @GetMapping("/char-weapons")
    public Result<List<CharWeapon>> charWeapons(HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        List<CharWeapon> list = charWeaponMapper.selectList(
                new LambdaQueryWrapper<CharWeapon>()
                        .orderByAsc(CharWeapon::getCharacterName)
                        .orderByAsc(CharWeapon::getSortOrder)
                        .orderByAsc(CharWeapon::getId));
        return Result.ok(list);
    }

    /** 修改一条武器推荐。 */
    @PutMapping("/char-weapons/{id}")
    public Result<CharWeapon> updateCharWeapon(@PathVariable("id") Long id,
                                               @RequestBody CharWeapon body,
                                               HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        if (body == null || isBlank(body.getCharacterName()) || isBlank(body.getWeaponName())) {
            throw new BusinessException("角色名与武器名都不能为空");
        }
        validateCommon(body.getRarity(), null, "星级");
        if (charWeaponMapper.selectById(id) == null) {
            throw new BusinessException("记录不存在，可能已被删除（id=" + id + "）");
        }
        CharWeapon patch = new CharWeapon();
        patch.setId(id);
        patch.setCharacterName(body.getCharacterName().trim());
        patch.setElement(body.getElement());
        patch.setWeaponName(body.getWeaponName().trim());
        patch.setRarity(body.getRarity());
        patch.setReason(body.getReason());
        patch.setSortOrder(body.getSortOrder());
        // 唯一索引 uk_cw(character_name, weapon_name)：改名撞车时给出友好提示
        Long dup = charWeaponMapper.selectCount(new LambdaQueryWrapper<CharWeapon>()
                .eq(CharWeapon::getCharacterName, patch.getCharacterName())
                .eq(CharWeapon::getWeaponName, patch.getWeaponName())
                .ne(CharWeapon::getId, id));
        if (dup != null && dup > 0) {
            throw new BusinessException("该角色下已存在同名武器推荐，请勿重复");
        }
        charWeaponMapper.updateById(patch);
        return Result.ok("保存成功", charWeaponMapper.selectById(id));
    }

    /** 新增一条武器推荐（便于后台补充新角色）。 */
    @PostMapping("/char-weapons")
    public Result<CharWeapon> addCharWeapon(@RequestBody CharWeapon body,
                                            HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        if (body == null || isBlank(body.getCharacterName()) || isBlank(body.getWeaponName())) {
            throw new BusinessException("角色名与武器名都不能为空");
        }
        Long dup = charWeaponMapper.selectCount(new LambdaQueryWrapper<CharWeapon>()
                .eq(CharWeapon::getCharacterName, body.getCharacterName().trim())
                .eq(CharWeapon::getWeaponName, body.getWeaponName().trim()));
        if (dup != null && dup > 0) {
            throw new BusinessException("该角色下已存在同名武器推荐");
        }
        body.setId(null);
        if (body.getRarity() == null) {
            body.setRarity(5);
        }
        if (body.getSortOrder() == null) {
            body.setSortOrder(0);
        }
        charWeaponMapper.insert(body);
        return Result.ok("新增成功", body);
    }

    /** 删除一条武器推荐。 */
    @DeleteMapping("/char-weapons/{id}")
    public Result<Void> deleteCharWeapon(@PathVariable("id") Long id,
                                         HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        charWeaponMapper.deleteById(id);
        return Result.ok();
    }

    // ==================================================================
    // 模块：角色队伍推荐（t_team + t_team_member）
    // ==================================================================

    /** 队伍全量列表，成员平铺为 m1..m4 便于后台编辑。 */
    @GetMapping("/teams")
    public Result<List<AdminTeamVO>> teams(HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        List<Team> teams = teamMapper.selectList(new LambdaQueryWrapper<Team>()
                .orderByAsc(Team::getSortOrder).orderByAsc(Team::getId));
        List<Long> ids = new ArrayList<>();
        for (Team t : teams) {
            ids.add(t.getId());
        }
        Map<Long, List<TeamMember>> memberMap = new HashMap<>();
        if (!ids.isEmpty()) {
            List<TeamMember> members = teamMemberMapper.selectList(new LambdaQueryWrapper<TeamMember>()
                    .in(TeamMember::getTeamId, ids)
                    .orderByAsc(TeamMember::getSortOrder).orderByAsc(TeamMember::getId));
            for (TeamMember m : members) {
                memberMap.computeIfAbsent(m.getTeamId(), k -> new ArrayList<>()).add(m);
            }
        }
        List<AdminTeamVO> result = new ArrayList<>(teams.size());
        for (Team t : teams) {
            AdminTeamVO vo = new AdminTeamVO();
            vo.setId(t.getId());
            vo.setName(t.getName());
            vo.setCore(t.getCore());
            vo.setTip(t.getTip());
            vo.setSortOrder(t.getSortOrder());
            vo.setStatus(t.getStatus());
            List<TeamMember> ms = memberMap.getOrDefault(t.getId(), new ArrayList<>());
            String[][] slots = {{"m1Name", "m1Element"}, {"m2Name", "m2Element"},
                    {"m3Name", "m3Element"}, {"m4Name", "m4Element"}};
            for (int i = 0; i < 4; i++) {
                String n = i < ms.size() ? ms.get(i).getMemberName() : "";
                String e = i < ms.size() ? ms.get(i).getElement() : "";
                fillSlot(vo, i, n, e);
            }
            result.add(vo);
        }
        return Result.ok(result);
    }

    private void fillSlot(AdminTeamVO vo, int i, String name, String element) {
        switch (i) {
            case 0 -> { vo.setM1Name(name); vo.setM1Element(element); }
            case 1 -> { vo.setM2Name(name); vo.setM2Element(element); }
            case 2 -> { vo.setM3Name(name); vo.setM3Element(element); }
            case 3 -> { vo.setM4Name(name); vo.setM4Element(element); }
            default -> { /* 仅四个位置 */ }
        }
    }

    /** 修改队伍信息与四个成员（整组替换，事务保证一致）。 */
    @PutMapping("/teams/{id}")
    @Transactional
    public Result<AdminTeamVO> updateTeam(@PathVariable("id") Long id,
                                          @RequestBody AdminTeamVO body,
                                          HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        if (body == null || isBlank(body.getName())) {
            throw new BusinessException("队伍名不能为空");
        }
        validateCommon(null, body.getStatus(), "星级");
        Team current = teamMapper.selectById(id);
        if (current == null) {
            throw new BusinessException("队伍不存在，可能已被删除（id=" + id + "）");
        }
        Team patch = new Team();
        patch.setId(id);
        patch.setName(body.getName().trim());
        patch.setCore(body.getCore());
        patch.setTip(body.getTip());
        patch.setSortOrder(body.getSortOrder());
        patch.setStatus(body.getStatus());
        teamMapper.updateById(patch);

        // 整组替换成员：先删后插，保持四个位置顺序稳定
        teamMemberMapper.delete(new LambdaQueryWrapper<TeamMember>().eq(TeamMember::getTeamId, id));
        String[] names = {body.getM1Name(), body.getM2Name(), body.getM3Name(), body.getM4Name()};
        String[] elements = {body.getM1Element(), body.getM2Element(), body.getM3Element(), body.getM4Element()};
        for (int i = 0; i < 4; i++) {
            if (isBlank(names[i])) {
                continue;
            }
            TeamMember m = new TeamMember();
            m.setTeamId(id);
            m.setMemberName(names[i].trim());
            m.setElement(elements[i]);
            m.setSortOrder(i);
            teamMemberMapper.insert(m);
        }
        return Result.ok("保存成功", body);
    }

    /** 新增一套队伍推荐。 */
    @PostMapping("/teams")
    @Transactional
    public Result<AdminTeamVO> addTeam(@RequestBody AdminTeamVO body,
                                       HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        if (body == null || isBlank(body.getName())) {
            throw new BusinessException("队伍名不能为空");
        }
        Long dup = teamMapper.selectCount(new LambdaQueryWrapper<Team>().eq(Team::getName, body.getName().trim()));
        if (dup != null && dup > 0) {
            throw new BusinessException("已存在同名队伍");
        }
        Team t = new Team();
        t.setName(body.getName().trim());
        t.setCore(body.getCore());
        t.setTip(body.getTip());
        t.setSortOrder(body.getSortOrder() == null ? 999 : body.getSortOrder());
        t.setStatus(body.getStatus() == null ? 1 : body.getStatus());
        teamMapper.insert(t);
        body.setId(t.getId());
        insertMembers(t.getId(), body);
        return Result.ok("新增成功", body);
    }

    private void insertMembers(Long teamId, AdminTeamVO body) {
        String[] names = {body.getM1Name(), body.getM2Name(), body.getM3Name(), body.getM4Name()};
        String[] elements = {body.getM1Element(), body.getM2Element(), body.getM3Element(), body.getM4Element()};
        for (int i = 0; i < 4; i++) {
            if (isBlank(names[i])) {
                continue;
            }
            TeamMember m = new TeamMember();
            m.setTeamId(teamId);
            m.setMemberName(names[i].trim());
            m.setElement(elements[i]);
            m.setSortOrder(i);
            teamMemberMapper.insert(m);
        }
    }

    /** 删除一套队伍推荐（连带成员）。 */
    @DeleteMapping("/teams/{id}")
    @Transactional
    public Result<Void> deleteTeam(@PathVariable("id") Long id,
                                   HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        teamMemberMapper.delete(new LambdaQueryWrapper<TeamMember>().eq(TeamMember::getTeamId, id));
        teamMapper.deleteById(id);
        return Result.ok();
    }

    // ==================================================================
    // 模块：圣遗物套装一览（t_artifact_set）
    // ==================================================================

    /** 圣遗物套装全量列表（含隐藏，按排序）。 */
    @GetMapping("/artifact-sets")
    public Result<List<ArtifactSet>> artifactSets(HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        List<ArtifactSet> list = artifactSetMapper.selectList(new LambdaQueryWrapper<ArtifactSet>()
                .orderByAsc(ArtifactSet::getSortOrder).orderByAsc(ArtifactSet::getId));
        return Result.ok(list);
    }

    /** 修改一套圣遗物数据。 */
    @PutMapping("/artifact-sets/{id}")
    public Result<ArtifactSet> updateArtifactSet(@PathVariable("id") Long id,
                                                 @RequestBody ArtifactSet body,
                                                 HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        if (body == null || isBlank(body.getName())) {
            throw new BusinessException("套装名不能为空");
        }
        validateCommon(body.getRarity(), body.getStatus(), "稀有度");
        if (artifactSetMapper.selectById(id) == null) {
            throw new BusinessException("记录不存在，可能已被删除（id=" + id + "）");
        }
        ArtifactSet patch = new ArtifactSet();
        patch.setId(id);
        patch.setName(body.getName().trim());
        patch.setRarity(body.getRarity());
        patch.setElement(body.getElement());
        patch.setRegion(body.getRegion());
        patch.setTwoPiece(body.getTwoPiece());
        patch.setFourPiece(body.getFourPiece());
        patch.setFlavor(body.getFlavor());
        patch.setImage(body.getImage());
        patch.setThemeColor(body.getThemeColor());
        patch.setSortOrder(body.getSortOrder());
        patch.setStatus(body.getStatus());
        artifactSetMapper.updateById(patch);
        return Result.ok("保存成功", artifactSetMapper.selectById(id));
    }

    /** 新增一套圣遗物。 */
    @PostMapping("/artifact-sets")
    public Result<ArtifactSet> addArtifactSet(@RequestBody ArtifactSet body,
                                              HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        if (body == null || isBlank(body.getName())) {
            throw new BusinessException("套装名不能为空");
        }
        Long dup = artifactSetMapper.selectCount(new LambdaQueryWrapper<ArtifactSet>()
                .eq(ArtifactSet::getName, body.getName().trim()));
        if (dup != null && dup > 0) {
            throw new BusinessException("已存在同名圣遗物套装");
        }
        body.setId(null);
        if (body.getRarity() == null) {
            body.setRarity(5);
        }
        if (body.getStatus() == null) {
            body.setStatus(1);
        }
        Long max = artifactSetMapper.selectCount(null);
        if (body.getSortOrder() == null) {
            body.setSortOrder((max == null ? 0 : max.intValue()) + 1);
        }
        if (isBlank(body.getThemeColor())) {
            body.setThemeColor("#6f8fe0");
        }
        if (isBlank(body.getImage())) {
            body.setImage("/artifacts/default.png");
        }
        artifactSetMapper.insert(body);
        return Result.ok("新增成功", body);
    }

    /** 删除一套圣遗物。 */
    @DeleteMapping("/artifact-sets/{id}")
    public Result<Void> deleteArtifactSet(@PathVariable("id") Long id,
                                          HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        artifactSetMapper.deleteById(id);
        return Result.ok();
    }

    // ==================================================================
    // 模块：角色天赋详情（t_character_talent）
    // 对应首页「模块六 · 角色天赋与命之座」，后台维护后首页实时读取 status=1 的记录
    // ==================================================================

    /** 天赋全量列表（含隐藏记录，按角色名 + 展示顺序）。 */
    @GetMapping("/char-talents")
    public Result<List<CharacterTalent>> charTalents(HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        List<CharacterTalent> list = characterTalentMapper.selectList(
                new LambdaQueryWrapper<CharacterTalent>()
                        .orderByAsc(CharacterTalent::getCharacterName)
                        .orderByAsc(CharacterTalent::getSortOrder)
                        .orderByAsc(CharacterTalent::getId));
        return Result.ok(list);
    }

    /** 修改一条天赋详情。 */
    @PutMapping("/char-talents/{id}")
    public Result<CharacterTalent> updateCharTalent(@PathVariable("id") Long id,
                                                     @RequestBody CharacterTalent body,
                                                     HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        if (body == null || isBlank(body.getCharacterName()) || isBlank(body.getTalentName())) {
            throw new BusinessException("角色名与天赋名称都不能为空");
        }
        validateCommon(null, body.getStatus(), "星级");
        validateTalentNumbers(body.getPriority(), body.getRecommendedLevel());
        if (characterTalentMapper.selectById(id) == null) {
            throw new BusinessException("记录不存在，可能已被删除（id=" + id + "）");
        }
        if (talentDuplicate(body.getCharacterName(), body.getTalentType(), body.getTalentName(), id)) {
            throw new BusinessException("该角色下已存在同名同类型的天赋，请勿重复");
        }
        CharacterTalent patch = new CharacterTalent();
        patch.setId(id);
        patch.setCharacterName(body.getCharacterName().trim());
        patch.setTalentType(body.getTalentType());
        patch.setTalentName(body.getTalentName().trim());
        patch.setDescription(body.getDescription());
        patch.setPriority(body.getPriority());
        patch.setRecommendedLevel(body.getRecommendedLevel());
        patch.setSortOrder(body.getSortOrder());
        patch.setStatus(body.getStatus());
        characterTalentMapper.updateById(patch);
        return Result.ok("保存成功", characterTalentMapper.selectById(id));
    }

    /** 新增一条天赋（可为角色补充固有天赋等额外条目）。 */
    @PostMapping("/char-talents")
    public Result<CharacterTalent> addCharTalent(@RequestBody CharacterTalent body,
                                                  HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        if (body == null || isBlank(body.getCharacterName()) || isBlank(body.getTalentName())) {
            throw new BusinessException("角色名与天赋名称都不能为空");
        }
        validateCommon(null, body.getStatus(), "星级");
        validateTalentNumbers(body.getPriority(), body.getRecommendedLevel());
        if (talentDuplicate(body.getCharacterName(), body.getTalentType(), body.getTalentName(), null)) {
            throw new BusinessException("该角色下已存在同名同类型的天赋");
        }
        body.setId(null);
        body.setCharacterName(body.getCharacterName().trim());
        body.setTalentName(body.getTalentName().trim());
        if (isBlank(body.getTalentType())) {
            body.setTalentType("固有天赋");
        }
        if (body.getPriority() == null) {
            body.setPriority(3);
        }
        if (body.getRecommendedLevel() == null) {
            body.setRecommendedLevel(8);
        }
        if (body.getSortOrder() == null) {
            body.setSortOrder(0);
        }
        if (body.getStatus() == null) {
            body.setStatus(1);
        }
        characterTalentMapper.insert(body);
        return Result.ok("新增成功", body);
    }

    /** 删除一条天赋。 */
    @DeleteMapping("/char-talents/{id}")
    public Result<Void> deleteCharTalent(@PathVariable("id") Long id,
                                          HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        characterTalentMapper.deleteById(id);
        return Result.ok();
    }

    // ==================================================================
    // 模块：角色命之座详情（t_character_constellation）
    // ==================================================================

    /** 命座全量列表（含隐藏记录，按角色名 + 命数）。 */
    @GetMapping("/char-constellations")
    public Result<List<CharacterConstellation>> charConstellations(HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        List<CharacterConstellation> list = characterConstellationMapper.selectList(
                new LambdaQueryWrapper<CharacterConstellation>()
                        .orderByAsc(CharacterConstellation::getCharacterName)
                        .orderByAsc(CharacterConstellation::getSortOrder)
                        .orderByAsc(CharacterConstellation::getConstLevel)
                        .orderByAsc(CharacterConstellation::getId));
        return Result.ok(list);
    }

    /** 修改一条命座详情。 */
    @PutMapping("/char-constellations/{id}")
    public Result<CharacterConstellation> updateCharConstellation(@PathVariable("id") Long id,
                                                                   @RequestBody CharacterConstellation body,
                                                                   HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        if (body == null || isBlank(body.getCharacterName()) || isBlank(body.getName())) {
            throw new BusinessException("角色名与命座名称都不能为空");
        }
        validateCommon(null, body.getStatus(), "星级");
        validateConstLevel(body.getConstLevel());
        if (characterConstellationMapper.selectById(id) == null) {
            throw new BusinessException("记录不存在，可能已被删除（id=" + id + "）");
        }
        if (constellationDuplicate(body.getCharacterName(), body.getConstLevel(), id)) {
            throw new BusinessException("该角色下已存在同一命数的命座，请勿重复");
        }
        CharacterConstellation patch = new CharacterConstellation();
        patch.setId(id);
        patch.setCharacterName(body.getCharacterName().trim());
        patch.setSetName(body.getSetName());
        patch.setConstLevel(body.getConstLevel());
        patch.setName(body.getName().trim());
        patch.setDescription(body.getDescription());
        patch.setSortOrder(body.getSortOrder());
        patch.setStatus(body.getStatus());
        characterConstellationMapper.updateById(patch);
        return Result.ok("保存成功", characterConstellationMapper.selectById(id));
    }

    /** 新增一条命座。 */
    @PostMapping("/char-constellations")
    public Result<CharacterConstellation> addCharConstellation(@RequestBody CharacterConstellation body,
                                                                HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        if (body == null || isBlank(body.getCharacterName()) || isBlank(body.getName())) {
            throw new BusinessException("角色名与命座名称都不能为空");
        }
        validateCommon(null, body.getStatus(), "星级");
        validateConstLevel(body.getConstLevel());
        if (constellationDuplicate(body.getCharacterName(), body.getConstLevel(), null)) {
            throw new BusinessException("该角色下已存在同一命数的命座");
        }
        body.setId(null);
        body.setCharacterName(body.getCharacterName().trim());
        body.setName(body.getName().trim());
        if (body.getConstLevel() == null) {
            body.setConstLevel(1);
        }
        if (body.getSortOrder() == null) {
            body.setSortOrder(body.getConstLevel() - 1);
        }
        if (body.getStatus() == null) {
            body.setStatus(1);
        }
        characterConstellationMapper.insert(body);
        return Result.ok("新增成功", body);
    }

    /** 删除一条命座。 */
    @DeleteMapping("/char-constellations/{id}")
    public Result<Void> deleteCharConstellation(@PathVariable("id") Long id,
                                                 HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        characterConstellationMapper.deleteById(id);
        return Result.ok();
    }

    // ==================================================================
    // 模块：角色圣遗物副词条优先级（t_char_substat）
    // ==================================================================

    /** 副词条优先级全量列表（含隐藏记录，按角色名 + 展示顺序）。 */
    @GetMapping("/char-substats")
    public Result<List<CharSubstat>> charSubstats(HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        List<CharSubstat> list = charSubstatMapper.selectList(
                new LambdaQueryWrapper<CharSubstat>()
                        .orderByAsc(CharSubstat::getCharacterName)
                        .orderByAsc(CharSubstat::getSortOrder)
                        .orderByAsc(CharSubstat::getId));
        return Result.ok(list);
    }

    /** 修改一条副词条优先级。 */
    @PutMapping("/char-substats/{id}")
    public Result<CharSubstat> updateCharSubstat(@PathVariable("id") Long id,
                                                 @RequestBody CharSubstat body,
                                                 HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        if (body == null || isBlank(body.getCharacterName()) || isBlank(body.getStatName())) {
            throw new BusinessException("角色名与副词条名称都不能为空");
        }
        validateCommon(null, body.getStatus(), "星级");
        validateTier(body.getTier());
        validateSortOrder(body.getSortOrder());
        if (charSubstatMapper.selectById(id) == null) {
            throw new BusinessException("记录不存在，可能已被删除（id=" + id + "）");
        }
        if (substatDuplicate(body.getCharacterName(), body.getStatName(), id)) {
            throw new BusinessException("该角色下已存在同名副词条，请勿重复");
        }
        CharSubstat patch = new CharSubstat();
        patch.setId(id);
        patch.setCharacterName(body.getCharacterName().trim());
        patch.setStatName(body.getStatName().trim());
        patch.setTier(body.getTier());
        patch.setReason(body.getReason());
        patch.setSortOrder(body.getSortOrder());
        patch.setStatus(body.getStatus());
        charSubstatMapper.updateById(patch);
        return Result.ok("保存成功", charSubstatMapper.selectById(id));
    }

    /** 新增一条副词条优先级。 */
    @PostMapping("/char-substats")
    public Result<CharSubstat> addCharSubstat(@RequestBody CharSubstat body,
                                              HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        if (body == null || isBlank(body.getCharacterName()) || isBlank(body.getStatName())) {
            throw new BusinessException("角色名与副词条名称都不能为空");
        }
        validateCommon(null, body.getStatus(), "星级");
        validateTier(body.getTier());
        validateSortOrder(body.getSortOrder());
        if (substatDuplicate(body.getCharacterName(), body.getStatName(), null)) {
            throw new BusinessException("该角色下已存在同名副词条");
        }
        body.setId(null);
        body.setCharacterName(body.getCharacterName().trim());
        body.setStatName(body.getStatName().trim());
        if (isBlank(body.getTier())) {
            body.setTier("可用");
        }
        if (body.getSortOrder() == null) {
            body.setSortOrder(9);
        }
        if (body.getStatus() == null) {
            body.setStatus(1);
        }
        charSubstatMapper.insert(body);
        return Result.ok("新增成功", body);
    }

    /** 删除一条副词条优先级。 */
    @DeleteMapping("/char-substats/{id}")
    public Result<Void> deleteCharSubstat(@PathVariable("id") Long id,
                                           HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        charSubstatMapper.deleteById(id);
        return Result.ok();
    }

    // ==================================================================
    // 模块：角色毕业面板（t_char_panel）
    // ==================================================================

    /** 毕业面板全量列表（含隐藏记录，按角色名 + 展示顺序）。 */
    @GetMapping("/char-panels")
    public Result<List<CharPanel>> charPanels(HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        List<CharPanel> list = charPanelMapper.selectList(
                new LambdaQueryWrapper<CharPanel>()
                        .orderByAsc(CharPanel::getCharacterName)
                        .orderByAsc(CharPanel::getSortOrder)
                        .orderByAsc(CharPanel::getId));
        return Result.ok(list);
    }

    /** 修改一条毕业面板目标。 */
    @PutMapping("/char-panels/{id}")
    public Result<CharPanel> updateCharPanel(@PathVariable("id") Long id,
                                             @RequestBody CharPanel body,
                                             HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        if (body == null || isBlank(body.getCharacterName()) || isBlank(body.getStatLabel())) {
            throw new BusinessException("角色名与面板词条名都不能为空");
        }
        validateCommon(null, body.getStatus(), "星级");
        validateSortOrder(body.getSortOrder());
        if (charPanelMapper.selectById(id) == null) {
            throw new BusinessException("记录不存在，可能已被删除（id=" + id + "）");
        }
        if (panelDuplicate(body.getCharacterName(), body.getStatLabel(), id)) {
            throw new BusinessException("该角色下已存在同名面板词条，请勿重复");
        }
        CharPanel patch = new CharPanel();
        patch.setId(id);
        patch.setCharacterName(body.getCharacterName().trim());
        patch.setStatLabel(body.getStatLabel().trim());
        patch.setTargetValue(body.getTargetValue());
        patch.setNote(body.getNote());
        patch.setSortOrder(body.getSortOrder());
        patch.setStatus(body.getStatus());
        charPanelMapper.updateById(patch);
        return Result.ok("保存成功", charPanelMapper.selectById(id));
    }

    /** 新增一条毕业面板目标。 */
    @PostMapping("/char-panels")
    public Result<CharPanel> addCharPanel(@RequestBody CharPanel body,
                                          HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        if (body == null || isBlank(body.getCharacterName()) || isBlank(body.getStatLabel())) {
            throw new BusinessException("角色名与面板词条名都不能为空");
        }
        validateCommon(null, body.getStatus(), "星级");
        validateSortOrder(body.getSortOrder());
        if (panelDuplicate(body.getCharacterName(), body.getStatLabel(), null)) {
            throw new BusinessException("该角色下已存在同名面板词条");
        }
        body.setId(null);
        body.setCharacterName(body.getCharacterName().trim());
        body.setStatLabel(body.getStatLabel().trim());
        if (isBlank(body.getTargetValue())) {
            body.setTargetValue("待补充");
        }
        if (body.getSortOrder() == null) {
            body.setSortOrder(9);
        }
        if (body.getStatus() == null) {
            body.setStatus(1);
        }
        charPanelMapper.insert(body);
        return Result.ok("新增成功", body);
    }

    /** 删除一条毕业面板目标。 */
    @DeleteMapping("/char-panels/{id}")
    public Result<Void> deleteCharPanel(@PathVariable("id") Long id,
                                        HttpServletRequest httpRequest) {
        if (!isAdmin(httpRequest)) {
            return Result.fail(401, "请先登录后台管理系统");
        }
        charPanelMapper.deleteById(id);
        return Result.ok();
    }

    private void validateTier(String tier) {
        if (isBlank(tier)) {
            return;
        }
        if (!"核心".equals(tier) && !"重要".equals(tier)
                && !"可用".equals(tier) && !"低收益".equals(tier)) {
            throw new BusinessException("优先级档位只能为 核心 / 重要 / 可用 / 低收益");
        }
    }

    private void validateSortOrder(Integer sortOrder) {
        if (sortOrder != null && (sortOrder < 0 || sortOrder > 99)) {
            throw new BusinessException("展示顺序需在 0-99 之间");
        }
    }

    /** 唯一索引 uk_cs_char_stat(character_name, stat_name) 的友好校验。 */
    private boolean substatDuplicate(String characterName, String statName, Long excludeId) {
        LambdaQueryWrapper<CharSubstat> w = new LambdaQueryWrapper<CharSubstat>()
                .eq(CharSubstat::getCharacterName, characterName.trim())
                .eq(CharSubstat::getStatName, statName.trim());
        if (excludeId != null) {
            w.ne(CharSubstat::getId, excludeId);
        }
        Long n = charSubstatMapper.selectCount(w);
        return n != null && n > 0;
    }

    /** 唯一索引 uk_cp_char_label(character_name, stat_label) 的友好校验。 */
    private boolean panelDuplicate(String characterName, String statLabel, Long excludeId) {
        LambdaQueryWrapper<CharPanel> w = new LambdaQueryWrapper<CharPanel>()
                .eq(CharPanel::getCharacterName, characterName.trim())
                .eq(CharPanel::getStatLabel, statLabel.trim());
        if (excludeId != null) {
            w.ne(CharPanel::getId, excludeId);
        }
        Long n = charPanelMapper.selectCount(w);
        return n != null && n > 0;
    }

    private void validateTalentNumbers(Integer priority, Integer recommendedLevel) {
        if (priority != null && (priority < 1 || priority > 9)) {
            throw new BusinessException("升级优先级需在 1-9 之间");
        }
        if (recommendedLevel != null && (recommendedLevel < 1 || recommendedLevel > 15)) {
            throw new BusinessException("推荐等级需在 1-15 之间");
        }
    }

    private void validateConstLevel(Integer level) {
        if (level != null && (level < 1 || level > 6)) {
            throw new BusinessException("命座层数需在 1-6 之间");
        }
    }

    /** 唯一索引 uk_ct(character_name, talent_type, talent_name) 的友好校验。 */
    private boolean talentDuplicate(String characterName, String talentType, String talentName, Long excludeId) {
        LambdaQueryWrapper<CharacterTalent> w = new LambdaQueryWrapper<CharacterTalent>()
                .eq(CharacterTalent::getCharacterName, characterName.trim())
                .eq(CharacterTalent::getTalentType, talentType)
                .eq(CharacterTalent::getTalentName, talentName.trim());
        if (excludeId != null) {
            w.ne(CharacterTalent::getId, excludeId);
        }
        Long n = characterTalentMapper.selectCount(w);
        return n != null && n > 0;
    }

    /** 唯一索引 uk_cc(character_name, const_level) 的友好校验。 */
    private boolean constellationDuplicate(String characterName, Integer constLevel, Long excludeId) {
        LambdaQueryWrapper<CharacterConstellation> w = new LambdaQueryWrapper<CharacterConstellation>()
                .eq(CharacterConstellation::getCharacterName, characterName.trim())
                .eq(CharacterConstellation::getConstLevel, constLevel);
        if (excludeId != null) {
            w.ne(CharacterConstellation::getId, excludeId);
        }
        Long n = characterConstellationMapper.selectCount(w);
        return n != null && n > 0;
    }

    private boolean isBlank(String s) {
        return s == null || s.trim().isEmpty();
    }

    /**
     * 星级与状态的基本校验，避免误填把首页展示弄乱。
     */
    private void validateCommon(Integer rarity, Integer status, String rarityLabel) {
        if (rarity != null && (rarity < 1 || rarity > 5)) {
            throw new BusinessException(rarityLabel + "需在 1-5 之间");
        }
        if (status != null && status != 0 && status != 1) {
            throw new BusinessException("状态只能为 1（显示）或 0（隐藏）");
        }
    }

    private boolean isAdmin(HttpServletRequest request) {
        return currentAdmin(request) != null;
    }

    private String currentAdmin(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session == null) {
            return null;
        }
        Object value = session.getAttribute(ADMIN_SESSION_KEY);
        return value == null ? null : String.valueOf(value);
    }
}
