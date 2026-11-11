package com.fenglin.springboottest;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.fenglin.springboottest.common.Result;
import com.fenglin.springboottest.entity.ArtifactSet;
import com.fenglin.springboottest.entity.CharPanel;
import com.fenglin.springboottest.entity.CharSubstat;
import com.fenglin.springboottest.entity.CharacterConstellation;
import com.fenglin.springboottest.entity.CharacterTalent;
import com.fenglin.springboottest.entity.GenshinCharacter;
import com.fenglin.springboottest.mapper.CharPanelMapper;
import com.fenglin.springboottest.mapper.CharSubstatMapper;
import com.fenglin.springboottest.mapper.CharacterConstellationMapper;
import com.fenglin.springboottest.mapper.CharacterMapper;
import com.fenglin.springboottest.mapper.CharacterTalentMapper;
import com.fenglin.springboottest.service.HomeService;
import com.fenglin.springboottest.vo.CharWeaponVO;
import com.fenglin.springboottest.vo.CharacterDetailVO;
import com.fenglin.springboottest.vo.CharacterVO;
import com.fenglin.springboottest.vo.GroupVO;
import com.fenglin.springboottest.vo.MaterialSummaryVO;
import com.fenglin.springboottest.vo.MaterialVO;
import com.fenglin.springboottest.vo.SearchResultVO;
import com.fenglin.springboottest.vo.TeamVO;
import com.fenglin.springboottest.vo.WeaponVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * 首页接口。
 * <p>
 * 因为 application.properties 中配置了 server.servlet.context-path=/api，
 * 所以这里 /home/characters 对外完整路径是 <b>/api/home/characters</b>，
 * 与前端 HomePage.vue 的请求路径完全一致。
 *
 * <pre>
 *   GET /api/home/characters            角色养成攻略列表
 *   GET /api/home/char-weapons          角色武器推荐列表
 *   GET /api/home/weapons               武器养成攻略列表
 *   GET /api/home/teams                 角色队伍推荐列表
 *   GET /api/home/search?keyword=xxx    全站搜索（角色 / 武器 / 队伍）
 *   GET /api/home/search?keyword=xxx&category=character  仅搜索角色
 *   GET /api/home/characters/elements   角色按元素分级分类
 *   GET /api/home/weapons/types         武器按类型分级分类
 *   GET /api/home/teams/cores           队伍按核心机制分级分类
 *   GET /api/home/materials/summary     角色 / 武器养成消耗摘要（首页卡片用）
 *   GET /api/home/materials?type=character&name=xxx  单个角色或武器的完整材料明细
 *   GET /api/home/characters/detail?name=xxx         角色详情聚合
 * </pre>
 *
 * 响应结构：{ "code": 200, "message": "success", "data": [ ... ] }
 */
@RestController
@RequestMapping("/home")
public class HomeController {

    @Autowired
    private HomeService homeService;

    @Autowired
    private CharacterTalentMapper characterTalentMapper;

    @Autowired
    private CharacterConstellationMapper characterConstellationMapper;

    @Autowired
    private CharacterMapper characterMapper;

    @Autowired
    private CharSubstatMapper charSubstatMapper;

    @Autowired
    private CharPanelMapper charPanelMapper;

    /**
     * 角色养成攻略列表。
     */
    @GetMapping("/characters")
    public Result<List<CharacterVO>> characters() {
        return Result.ok(homeService.listCharacters());
    }

    /**
     * 角色武器推荐列表，形状 { character, element, best:[...] }。
     */
    @GetMapping("/char-weapons")
    public Result<List<CharWeaponVO>> charWeapons() {
        return Result.ok(homeService.listCharWeapons());
    }

    /**
     * 武器养成攻略列表，users 为适配角色名数组。
     */
    @GetMapping("/weapons")
    public Result<List<WeaponVO>> weapons() {
        return Result.ok(homeService.listWeapons());
    }

    /**
     * 角色队伍推荐列表，members 为四个位置的成员。
     */
    @GetMapping("/teams")
    public Result<List<TeamVO>> teams() {
        return Result.ok(homeService.listTeams());
    }

    /**
     * 圣遗物套装一览（首页模块五）。后台可维护 t_artifact_set，首页实时读取 status=1 的套装。
     */
    @GetMapping("/artifact-sets")
    public Result<List<ArtifactSet>> artifactSets() {
        return Result.ok(homeService.listArtifactSets());
    }

    /**
     * 全站搜索。返回 [{ category, data }]，category 取值 character / weapon / team。
     * 可选参数 category 用于限定搜索范围（只搜某一类）。
     */
    @GetMapping("/search")
    public Result<List<SearchResultVO>> search(
            @RequestParam(value = "keyword", required = false, defaultValue = "") String keyword,
            @RequestParam(value = "category", required = false) String category) {
        return Result.ok(homeService.search(keyword, category));
    }

    /**
     * 角色按元素分级分类，返回 [{ name, count, items }]。
     */
    @GetMapping("/characters/elements")
    public Result<List<GroupVO<CharacterVO>>> charactersByElement() {
        return Result.ok(homeService.listCharactersByElement());
    }

    /**
     * 武器按类型分级分类，返回 [{ name, count, items }]。
     */
    @GetMapping("/weapons/types")
    public Result<List<GroupVO<WeaponVO>>> weaponsByType() {
        return Result.ok(homeService.listWeaponsByType());
    }

    /**
     * 队伍按核心机制分级分类，返回 [{ name, count, items }]。
     */
    @GetMapping("/teams/cores")
    public Result<List<GroupVO<TeamVO>>> teamsByCore() {
        return Result.ok(homeService.listTeamsByCore());
    }

    /**
     * 首页卡片用的轻量摘要：{ characters: { 角色名: {...} }, weapons: { 武器名: {...} } }。
     */
    @GetMapping("/materials/summary")
    public Result<Map<String, Map<String, MaterialSummaryVO>>> materialSummaries() {
        return Result.ok(homeService.listMaterialSummaries());
    }

    /**
     * 单个角色 / 武器的完整养成材料。type 取 character / weapon，默认 character。
     */
    @GetMapping("/materials")
    public Result<MaterialVO> material(
            @RequestParam(value = "type", required = false, defaultValue = "character") String type,
            @RequestParam("name") String name) {
        String ownerType = "weapon".equalsIgnoreCase(type) ? "weapon" : "character";
        return Result.ok(homeService.getMaterial(ownerType, name));
    }

    /**
     * 角色详情聚合：角色基础攻略 + 突破材料与经验书 + 武器推荐（含武器养成与材料）+ 相关队伍。
     */
    @GetMapping("/characters/detail")
    public Result<CharacterDetailVO> characterDetail(@RequestParam("name") String name) {
        return Result.ok(homeService.getCharacterDetail(name));
    }

    /**
     * 首页「模块六 · 角色天赋与命之座」的数据源。
     * 返回 { talents:[...], constellations:[...], priorities:{ 角色名: 天赋升级顺序 } }，
     * 只取 status=1 的记录；后台管理系统增删改后，首页重新加载即生效。
     */
    @GetMapping("/char-talents")
    public Result<Map<String, Object>> charTalents() {
        List<CharacterTalent> talents = characterTalentMapper.selectList(
                new LambdaQueryWrapper<CharacterTalent>()
                        .eq(CharacterTalent::getStatus, 1)
                        .orderByAsc(CharacterTalent::getCharacterName)
                        .orderByAsc(CharacterTalent::getSortOrder)
                        .orderByAsc(CharacterTalent::getId));
        List<CharacterConstellation> constellations = characterConstellationMapper.selectList(
                new LambdaQueryWrapper<CharacterConstellation>()
                        .eq(CharacterConstellation::getStatus, 1)
                        .orderByAsc(CharacterConstellation::getCharacterName)
                        .orderByAsc(CharacterConstellation::getSortOrder)
                        .orderByAsc(CharacterConstellation::getConstLevel)
                        .orderByAsc(CharacterConstellation::getId));
        Map<String, String> priorities = new HashMap<>();
        for (GenshinCharacter c : characterMapper.selectList(null)) {
            if (c.getName() != null && c.getTalents() != null) {
                priorities.put(c.getName(), c.getTalents());
            }
        }
        // 已录入（含隐藏）的角色名清单：前端据此区分「全部隐藏」与「从未录入」
        Set<String> known = new HashSet<>();
        for (CharacterTalent t : characterTalentMapper.selectList(
                new LambdaQueryWrapper<CharacterTalent>().select(CharacterTalent::getCharacterName))) {
            if (t.getCharacterName() != null) {
                known.add(t.getCharacterName());
            }
        }
        for (CharacterConstellation c : characterConstellationMapper.selectList(
                new LambdaQueryWrapper<CharacterConstellation>().select(CharacterConstellation::getCharacterName))) {
            if (c.getCharacterName() != null) {
                known.add(c.getCharacterName());
            }
        }
        Map<String, Object> data = new HashMap<>();
        data.put("talents", talents);
        data.put("constellations", constellations);
        data.put("priorities", priorities);
        data.put("characters", new ArrayList<>(known));
        return Result.ok(data);
    }

    /**
     * 首页「模块一 · 角色养成攻略」的副词条优先级与毕业面板数据源。
     * 返回 { substats:[...], panels:[...], characters:[已录入角色名] }，
     * 只取 status=1 的记录；后台管理系统增删改后，首页重新加载即生效。
     * characters 含隐藏记录，供前端区分「全部隐藏」与「从未录入」。
     */
    @GetMapping("/char-builds")
    public Result<Map<String, Object>> charBuilds() {
        List<CharSubstat> substats = charSubstatMapper.selectList(
                new LambdaQueryWrapper<CharSubstat>()
                        .eq(CharSubstat::getStatus, 1)
                        .orderByAsc(CharSubstat::getCharacterName)
                        .orderByAsc(CharSubstat::getSortOrder)
                        .orderByAsc(CharSubstat::getId));
        List<CharPanel> panels = charPanelMapper.selectList(
                new LambdaQueryWrapper<CharPanel>()
                        .eq(CharPanel::getStatus, 1)
                        .orderByAsc(CharPanel::getCharacterName)
                        .orderByAsc(CharPanel::getSortOrder)
                        .orderByAsc(CharPanel::getId));
        Set<String> known = new HashSet<>();
        for (CharSubstat s : charSubstatMapper.selectList(
                new LambdaQueryWrapper<CharSubstat>().select(CharSubstat::getCharacterName))) {
            if (s.getCharacterName() != null) {
                known.add(s.getCharacterName());
            }
        }
        for (CharPanel p : charPanelMapper.selectList(
                new LambdaQueryWrapper<CharPanel>().select(CharPanel::getCharacterName))) {
            if (p.getCharacterName() != null) {
                known.add(p.getCharacterName());
            }
        }
        Map<String, Object> data = new HashMap<>();
        data.put("substats", substats);
        data.put("panels", panels);
        data.put("characters", new ArrayList<>(known));
        return Result.ok(data);
    }
}
