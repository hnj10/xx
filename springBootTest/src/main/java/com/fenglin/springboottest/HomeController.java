package com.fenglin.springboottest;

import com.fenglin.springboottest.common.Result;
import com.fenglin.springboottest.service.HomeService;
import com.fenglin.springboottest.vo.CharWeaponVO;
import com.fenglin.springboottest.vo.CharacterVO;
import com.fenglin.springboottest.vo.GroupVO;
import com.fenglin.springboottest.vo.SearchResultVO;
import com.fenglin.springboottest.vo.TeamVO;
import com.fenglin.springboottest.vo.WeaponVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
 * </pre>
 *
 * 响应结构：{ "code": 200, "message": "success", "data": [ ... ] }
 */
@RestController
@RequestMapping("/home")
public class HomeController {

    @Autowired
    private HomeService homeService;

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
}
