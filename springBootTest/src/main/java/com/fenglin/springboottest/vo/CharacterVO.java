package com.fenglin.springboottest.vo;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serializable;

/**
 * 角色养成攻略返回体，对应 GET /api/home/characters 数组中的一项。
 * <p>
 * 字段名与前端 src/data/homeData.js 的 CHARACTERS 完全一致，
 * 注意这里叫 role（数据库列名是 role_name，因为 role 在部分 MySQL 版本里是关键字）。
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class CharacterVO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long id;

    private String name;

    private String element;

    private Integer rarity;

    /** 定位，如 主C · 蒸发 */
    private String role;

    private String talents;

    private String artifacts;

    private String mainStats;

    private String summary;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getElement() {
        return element;
    }

    public void setElement(String element) {
        this.element = element;
    }

    public Integer getRarity() {
        return rarity;
    }

    public void setRarity(Integer rarity) {
        this.rarity = rarity;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getTalents() {
        return talents;
    }

    public void setTalents(String talents) {
        this.talents = talents;
    }

    public String getArtifacts() {
        return artifacts;
    }

    public void setArtifacts(String artifacts) {
        this.artifacts = artifacts;
    }

    public String getMainStats() {
        return mainStats;
    }

    public void setMainStats(String mainStats) {
        this.mainStats = mainStats;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }
}
