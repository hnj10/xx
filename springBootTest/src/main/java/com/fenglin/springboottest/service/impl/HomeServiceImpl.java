package com.fenglin.springboottest.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.fenglin.springboottest.entity.CharWeapon;
import com.fenglin.springboottest.entity.GenshinCharacter;
import com.fenglin.springboottest.entity.Team;
import com.fenglin.springboottest.entity.TeamMember;
import com.fenglin.springboottest.entity.Weapon;
import com.fenglin.springboottest.entity.WeaponUser;
import com.fenglin.springboottest.mapper.CharWeaponMapper;
import com.fenglin.springboottest.mapper.CharacterMapper;
import com.fenglin.springboottest.mapper.TeamMapper;
import com.fenglin.springboottest.mapper.TeamMemberMapper;
import com.fenglin.springboottest.mapper.WeaponMapper;
import com.fenglin.springboottest.mapper.WeaponUserMapper;
import com.fenglin.springboottest.service.HomeService;
import com.fenglin.springboottest.vo.CharWeaponVO;
import com.fenglin.springboottest.vo.CharacterVO;
import com.fenglin.springboottest.vo.SearchResultVO;
import com.fenglin.springboottest.vo.TeamMemberVO;
import com.fenglin.springboottest.vo.TeamVO;
import com.fenglin.springboottest.vo.WeaponBriefVO;
import com.fenglin.springboottest.vo.WeaponVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * 首页业务实现。
 * <p>
 * 数据来自 6 张表：t_character / t_char_weapon / t_weapon / t_weapon_user / t_team / t_team_member，
 * 建表与初始化脚本见 src/main/resources/../sql/home_data.sql（项目根目录 sql/home_data.sql）。
 * <p>
 * 组装原则：先把子表（适配角色、队伍成员、推荐武器）一次性查出来按外键分组，
 * 再拼装成前端需要的嵌套结构，避免 N+1 查询。
 */
@Service
public class HomeServiceImpl implements HomeService {

    /** 搜索关键字最大长度，防止超长输入拖慢模糊查询 */
    private static final int MAX_KEYWORD_LENGTH = 50;

    @Autowired
    private CharacterMapper characterMapper;

    @Autowired
    private CharWeaponMapper charWeaponMapper;

    @Autowired
    private WeaponMapper weaponMapper;

    @Autowired
    private WeaponUserMapper weaponUserMapper;

    @Autowired
    private TeamMapper teamMapper;

    @Autowired
    private TeamMemberMapper teamMemberMapper;

    // ------------------------------------------------------------------
    // 列表查询
    // ------------------------------------------------------------------

    @Override
    public List<CharacterVO> listCharacters() {
        LambdaQueryWrapper<GenshinCharacter> query = new LambdaQueryWrapper<>();
        query.eq(GenshinCharacter::getStatus, 1)
                .orderByAsc(GenshinCharacter::getSortOrder)
                .orderByAsc(GenshinCharacter::getId);
        List<GenshinCharacter> list = characterMapper.selectList(query);
        List<CharacterVO> result = new ArrayList<>(list.size());
        for (GenshinCharacter entity : list) {
            result.add(toCharacterVO(entity));
        }
        return result;
    }

    @Override
    public List<CharWeaponVO> listCharWeapons() {
        // 角色展示顺序以 t_character 的 sort_order 为准
        Map<String, Integer> characterOrder = loadCharacterOrder();

        LambdaQueryWrapper<CharWeapon> query = new LambdaQueryWrapper<>();
        query.orderByAsc(CharWeapon::getSortOrder)
                .orderByAsc(CharWeapon::getId);
        List<CharWeapon> rows = charWeaponMapper.selectList(query);

        // character_name -> { element, best[] }
        Map<String, CharWeaponVO> grouped = new LinkedHashMap<>();
        for (CharWeapon row : rows) {
            CharWeaponVO vo = grouped.computeIfAbsent(row.getCharacterName(), name -> {
                CharWeaponVO item = new CharWeaponVO();
                item.setCharacter(name);
                item.setElement(row.getElement());
                item.setBest(new ArrayList<>());
                return item;
            });
            WeaponBriefVO brief = new WeaponBriefVO();
            brief.setName(row.getWeaponName());
            brief.setRarity(row.getRarity());
            brief.setReason(row.getReason());
            vo.getBest().add(brief);
        }

        List<CharWeaponVO> result = new ArrayList<>(grouped.values());
        result.sort(Comparator.comparingInt(vo -> characterOrder.getOrDefault(vo.getCharacter(), Integer.MAX_VALUE)));
        return result;
    }

    @Override
    public List<WeaponVO> listWeapons() {
        LambdaQueryWrapper<Weapon> query = new LambdaQueryWrapper<>();
        query.eq(Weapon::getStatus, 1)
                .orderByAsc(Weapon::getSortOrder)
                .orderByAsc(Weapon::getId);
        List<Weapon> list = weaponMapper.selectList(query);

        List<String> names = list.stream().map(Weapon::getName).collect(Collectors.toList());
        Map<String, List<String>> userMap = weaponUserMap(names);

        List<WeaponVO> result = new ArrayList<>(list.size());
        for (Weapon entity : list) {
            result.add(toWeaponVO(entity, userMap.getOrDefault(entity.getName(), Collections.emptyList())));
        }
        return result;
    }

    @Override
    public List<TeamVO> listTeams() {
        LambdaQueryWrapper<Team> query = new LambdaQueryWrapper<>();
        query.eq(Team::getStatus, 1)
                .orderByAsc(Team::getSortOrder)
                .orderByAsc(Team::getId);
        List<Team> list = teamMapper.selectList(query);

        List<Long> ids = list.stream().map(Team::getId).collect(Collectors.toList());
        Map<Long, List<TeamMemberVO>> memberMap = teamMemberMap(ids);

        List<TeamVO> result = new ArrayList<>(list.size());
        for (Team entity : list) {
            result.add(toTeamVO(entity, memberMap.getOrDefault(entity.getId(), Collections.emptyList())));
        }
        return result;
    }

    // ------------------------------------------------------------------
    // 全站搜索
    // ------------------------------------------------------------------

    @Override
    public List<SearchResultVO> search(String keyword) {
        if (!StringUtils.hasText(keyword)) {
            return Collections.emptyList();
        }
        String kw = keyword.trim();
        if (kw.length() > MAX_KEYWORD_LENGTH) {
            kw = kw.substring(0, MAX_KEYWORD_LENGTH);
        }
        // lambda 中只能引用 final 或实际 final 的变量，这里固化一份
        final String key = kw;

        List<SearchResultVO> result = new ArrayList<>();

        // ---- 1. 角色：名称 / 定位 / 元素 / 圣遗物 / 主词条 / 攻略 ----
        LambdaQueryWrapper<GenshinCharacter> charQuery = new LambdaQueryWrapper<>();
        charQuery.eq(GenshinCharacter::getStatus, 1)
                .and(w -> w.like(GenshinCharacter::getName, key)
                        .or().like(GenshinCharacter::getRoleName, key)
                        .or().like(GenshinCharacter::getElement, key)
                        .or().like(GenshinCharacter::getArtifacts, key)
                        .or().like(GenshinCharacter::getMainStats, key)
                        .or().like(GenshinCharacter::getSummary, key))
                .orderByAsc(GenshinCharacter::getSortOrder)
                .orderByAsc(GenshinCharacter::getId);
        for (GenshinCharacter entity : characterMapper.selectList(charQuery)) {
            result.add(wrap("character", toCharacterVO(entity)));
        }

        // ---- 2. 武器：名称 / 类型 / 副属性 / 描述 / 适配角色 ----
        LambdaQueryWrapper<Weapon> weaponQuery = new LambdaQueryWrapper<>();
        weaponQuery.eq(Weapon::getStatus, 1)
                .and(w -> w.like(Weapon::getName, key)
                        .or().like(Weapon::getType, key)
                        .or().like(Weapon::getStat, key)
                        .or().like(Weapon::getDescription, key))
                .orderByAsc(Weapon::getSortOrder)
                .orderByAsc(Weapon::getId);
        List<Weapon> weapons = new ArrayList<>(weaponMapper.selectList(weaponQuery));

        // 适配角色命中时，把对应武器也补进来
        Set<String> hitWeaponNames = weapons.stream().map(Weapon::getName).collect(Collectors.toCollection(LinkedHashSet::new));
        List<WeaponUser> matchedUsers = weaponUserMapper.selectList(
                new LambdaQueryWrapper<WeaponUser>().like(WeaponUser::getUserName, key));
        List<String> extraWeaponNames = matchedUsers.stream()
                .map(WeaponUser::getWeaponName)
                .filter(name -> !hitWeaponNames.contains(name))
                .distinct()
                .collect(Collectors.toList());
        if (!extraWeaponNames.isEmpty()) {
            weapons.addAll(weaponMapper.selectList(new LambdaQueryWrapper<Weapon>()
                    .eq(Weapon::getStatus, 1)
                    .in(Weapon::getName, extraWeaponNames)
                    .orderByAsc(Weapon::getSortOrder)
                    .orderByAsc(Weapon::getId)));
        }

        List<String> weaponNames = weapons.stream().map(Weapon::getName).collect(Collectors.toList());
        Map<String, List<String>> userMap = weaponUserMap(weaponNames);
        for (Weapon entity : weapons) {
            result.add(wrap("weapon", toWeaponVO(entity, userMap.getOrDefault(entity.getName(), Collections.emptyList()))));
        }

        // ---- 3. 队伍：队名 / 核心机制 / 手法要点 / 成员名 / 成员元素 ----
        LambdaQueryWrapper<Team> teamQuery = new LambdaQueryWrapper<>();
        teamQuery.eq(Team::getStatus, 1)
                .and(w -> w.like(Team::getName, key)
                        .or().like(Team::getCore, key)
                        .or().like(Team::getTip, key))
                .orderByAsc(Team::getSortOrder)
                .orderByAsc(Team::getId);
        List<Team> teams = new ArrayList<>(teamMapper.selectList(teamQuery));

        Set<Long> hitTeamIds = teams.stream().map(Team::getId).collect(Collectors.toCollection(LinkedHashSet::new));
        List<TeamMember> matchedMembers = teamMemberMapper.selectList(
                new LambdaQueryWrapper<TeamMember>()
                        .like(TeamMember::getMemberName, key)
                        .or().like(TeamMember::getElement, key));
        List<Long> extraTeamIds = matchedMembers.stream()
                .map(TeamMember::getTeamId)
                .filter(id -> !hitTeamIds.contains(id))
                .distinct()
                .collect(Collectors.toList());
        if (!extraTeamIds.isEmpty()) {
            teams.addAll(teamMapper.selectList(new LambdaQueryWrapper<Team>()
                    .eq(Team::getStatus, 1)
                    .in(Team::getId, extraTeamIds)
                    .orderByAsc(Team::getSortOrder)
                    .orderByAsc(Team::getId)));
        }

        List<Long> teamIds = teams.stream().map(Team::getId).collect(Collectors.toList());
        Map<Long, List<TeamMemberVO>> memberMap = teamMemberMap(teamIds);
        for (Team entity : teams) {
            result.add(wrap("team", toTeamVO(entity, memberMap.getOrDefault(entity.getId(), Collections.emptyList()))));
        }

        return result;
    }

    // ------------------------------------------------------------------
    // 私有工具方法
    // ------------------------------------------------------------------

    /** 角色名 -> 展示顺序（t_character.sort_order） */
    private Map<String, Integer> loadCharacterOrder() {
        LambdaQueryWrapper<GenshinCharacter> query = new LambdaQueryWrapper<>();
        query.orderByAsc(GenshinCharacter::getSortOrder).orderByAsc(GenshinCharacter::getId);
        List<GenshinCharacter> characters = characterMapper.selectList(query);
        Map<String, Integer> order = new HashMap<>(characters.size() * 2);
        for (int i = 0; i < characters.size(); i++) {
            order.put(characters.get(i).getName(), i);
        }
        return order;
    }

    /** 武器名 -> 适配角色名列表 */
    private Map<String, List<String>> weaponUserMap(Collection<String> weaponNames) {
        Map<String, List<String>> map = new HashMap<>();
        if (weaponNames == null || weaponNames.isEmpty()) {
            return map;
        }
        LambdaQueryWrapper<WeaponUser> query = new LambdaQueryWrapper<>();
        query.in(WeaponUser::getWeaponName, weaponNames)
                .orderByAsc(WeaponUser::getSortOrder)
                .orderByAsc(WeaponUser::getId);
        for (WeaponUser row : weaponUserMapper.selectList(query)) {
            map.computeIfAbsent(row.getWeaponName(), key -> new ArrayList<>()).add(row.getUserName());
        }
        return map;
    }

    /** 队伍 id -> 成员列表 */
    private Map<Long, List<TeamMemberVO>> teamMemberMap(Collection<Long> teamIds) {
        Map<Long, List<TeamMemberVO>> map = new HashMap<>();
        if (teamIds == null || teamIds.isEmpty()) {
            return map;
        }
        LambdaQueryWrapper<TeamMember> query = new LambdaQueryWrapper<>();
        query.in(TeamMember::getTeamId, teamIds)
                .orderByAsc(TeamMember::getSortOrder)
                .orderByAsc(TeamMember::getId);
        for (TeamMember row : teamMemberMapper.selectList(query)) {
            TeamMemberVO vo = new TeamMemberVO();
            vo.setName(row.getMemberName());
            vo.setElement(row.getElement());
            map.computeIfAbsent(row.getTeamId(), key -> new ArrayList<>()).add(vo);
        }
        return map;
    }

    private CharacterVO toCharacterVO(GenshinCharacter entity) {
        CharacterVO vo = new CharacterVO();
        vo.setId(entity.getId());
        vo.setName(entity.getName());
        vo.setElement(entity.getElement());
        vo.setRarity(entity.getRarity());
        vo.setRole(entity.getRoleName());
        vo.setTalents(entity.getTalents());
        vo.setArtifacts(entity.getArtifacts());
        vo.setMainStats(entity.getMainStats());
        vo.setSummary(entity.getSummary());
        return vo;
    }

    private WeaponVO toWeaponVO(Weapon entity, List<String> users) {
        WeaponVO vo = new WeaponVO();
        vo.setName(entity.getName());
        vo.setRarity(entity.getRarity());
        vo.setType(entity.getType());
        vo.setStat(entity.getStat());
        vo.setDesc(entity.getDescription());
        vo.setUsers(new ArrayList<>(users));
        return vo;
    }

    private TeamVO toTeamVO(Team entity, List<TeamMemberVO> members) {
        TeamVO vo = new TeamVO();
        vo.setName(entity.getName());
        vo.setCore(entity.getCore());
        vo.setTip(entity.getTip());
        vo.setMembers(new ArrayList<>(members));
        return vo;
    }

    private SearchResultVO wrap(String category, Object data) {
        SearchResultVO vo = new SearchResultVO();
        vo.setCategory(category);
        vo.setData(data);
        return vo;
    }
}
