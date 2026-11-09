package com.fenglin.springboottest.vo;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serializable;

/**
 * 武器简要信息，用于角色武器推荐中的 best 数组。
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class WeaponBriefVO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String name;

    private Integer rarity;

    private String reason;

    /** 1 级基础攻击力（白值） */
    private Integer atk1;

    /** 90 级基础攻击力（白值） */
    private Integer atk90;

    /** 副词条名称，如 暴击伤害 */
    private String subStat;

    /** 副词条 90 级提升值，如 44.1% / 198 */
    private String subValue;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getRarity() {
        return rarity;
    }

    public void setRarity(Integer rarity) {
        this.rarity = rarity;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public Integer getAtk1() {
        return atk1;
    }

    public void setAtk1(Integer atk1) {
        this.atk1 = atk1;
    }

    public Integer getAtk90() {
        return atk90;
    }

    public void setAtk90(Integer atk90) {
        this.atk90 = atk90;
    }

    public String getSubStat() {
        return subStat;
    }

    public void setSubStat(String subStat) {
        this.subStat = subStat;
    }

    public String getSubValue() {
        return subValue;
    }

    public void setSubValue(String subValue) {
        this.subValue = subValue;
    }
}
