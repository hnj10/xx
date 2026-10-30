package com.fenglin.springboottest.service;

import com.fenglin.springboottest.vo.CharWeaponVO;
import com.fenglin.springboottest.vo.CharacterVO;
import com.fenglin.springboottest.vo.GroupVO;
import com.fenglin.springboottest.vo.SearchResultVO;
import com.fenglin.springboottest.vo.TeamVO;
import com.fenglin.springboottest.vo.WeaponVO;

import java.util.List;

/**
 * 首页业务接口：角色养成、角色武器推荐、武器养成、队伍推荐、全站搜索。
 *
 * <pre>
 *   GET /api/home/characters    角色养成攻略列表
 *   GET /api/home/char-weapons  角色武器推荐列表
 *   GET /api/home/weapons       武器养成攻略列表
 *   GET /api/home/teams         角色队伍推荐列表
 *   GET /api/home/search        全站搜索
 * </pre>
 */
public interface HomeService {

    /**
     * 角色养成攻略列表（t_character，status=1，按 sort_order 升序）。
     */
    List<CharacterVO> listCharacters();

    /**
     * 角色武器推荐列表（t_char_weapon 按角色分组，组内按 sort_order 升序）。
     */
    List<CharWeaponVO> listCharWeapons();

    /**
     * 武器养成攻略列表（t_weapon + t_weapon_user，users 为适配角色名数组）。
     */
    List<WeaponVO> listWeapons();

    /**
     * 角色队伍推荐列表（t_team + t_team_member，members 为四个位置）。
     */
    List<TeamVO> listTeams();

    /**
     * 全站搜索：按角色 / 武器 / 队伍顺序返回命中结果。
     *
     * @param keyword 搜索关键字，空白时返回空列表
     */
    List<SearchResultVO> search(String keyword);

    /**
     * 全站搜索（带分类过滤）：只返回指定类别的命中结果。
     *
     * @param keyword  搜索关键字，空白时返回空列表
     * @param category 分类，取值 character / weapon / team，其它值等同于不过滤
     */
    List<SearchResultVO> search(String keyword, String category);

    /**
     * 角色按元素分组（分级分类）。按元素顺序（火/水/雷/草/风/岩/冰）返回分组，
     * 组内保持原有 sort_order 排序。
     */
    List<GroupVO<CharacterVO>> listCharactersByElement();

    /**
     * 武器按类型分组（分级分类）。按类型（长柄武器/单手剑/双手剑/法器/弓）返回分组。
     */
    List<GroupVO<WeaponVO>> listWeaponsByType();

    /**
     * 队伍按核心机制分组（分级分类）。按 sort_order 聚合出唯一的核心机制作为分组名。
     */
    List<GroupVO<TeamVO>> listTeamsByCore();
}
