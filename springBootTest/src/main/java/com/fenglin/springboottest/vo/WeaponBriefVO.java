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
}
