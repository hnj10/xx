package com.fenglin.springboottest.vo;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serializable;
import java.util.List;

/**
 * 角色武器推荐返回体，对应 GET /api/home/char-weapons 数组中的一项。
 * <p>
 * 形状：{ character, element, best:[{name, rarity, reason}] }
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class CharWeaponVO implements Serializable {

    private static final long serialVersionUID = 1L;

    /** 角色名 */
    private String character;

    /** 角色元素 */
    private String element;

    /** 推荐武器列表，按 sort_order 升序 */
    private List<WeaponBriefVO> best;

    public String getCharacter() {
        return character;
    }

    public void setCharacter(String character) {
        this.character = character;
    }

    public String getElement() {
        return element;
    }

    public void setElement(String element) {
        this.element = element;
    }

    public List<WeaponBriefVO> getBest() {
        return best;
    }

    public void setBest(List<WeaponBriefVO> best) {
        this.best = best;
    }
}
