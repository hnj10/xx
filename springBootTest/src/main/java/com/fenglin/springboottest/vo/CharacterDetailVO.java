package com.fenglin.springboottest.vo;

import java.io.Serializable;
import java.util.List;

/**
 * 角色详情聚合体。点击首页角色卡片后展示：
 * 角色基础攻略 + 突破材料与经验书 + 该角色的武器推荐（含每把武器的养成与材料）+ 包含该角色的队伍推荐。
 */
public class CharacterDetailVO implements Serializable {

    private static final long serialVersionUID = 1L;

    private CharacterVO character;
    private MaterialVO material;
    private List<WeaponDetailVO> weapons;
    private List<TeamVO> teams;
    /** 数据口径说明，前端会原样展示 */
    private String notice;

    public CharacterVO getCharacter() {
        return character;
    }

    public void setCharacter(CharacterVO character) {
        this.character = character;
    }

    public MaterialVO getMaterial() {
        return material;
    }

    public void setMaterial(MaterialVO material) {
        this.material = material;
    }

    public List<WeaponDetailVO> getWeapons() {
        return weapons;
    }

    public void setWeapons(List<WeaponDetailVO> weapons) {
        this.weapons = weapons;
    }

    public List<TeamVO> getTeams() {
        return teams;
    }

    public void setTeams(List<TeamVO> teams) {
        this.teams = teams;
    }

    public String getNotice() {
        return notice;
    }

    public void setNotice(String notice) {
        this.notice = notice;
    }
}
