package com.fenglin.springboottest.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * 角色养成攻略实体，对应表 t_character。
 * <p>
 * 对应前端 GET /api/home/characters 的一条数据，
 * 字段与 src/data/homeData.js 中 CHARACTERS 的结构保持一致。
 * <p>
 * 注意：类名不能叫 Character —— MyBatis 会按简单类名注册类型别名，
 * 与 java.lang.Character 冲突导致 SqlSessionFactory 启动失败
 * （报错：The alias 'Character' is already mapped to the value 'java.lang.Character'）。
 */
@TableName("t_character")
public class GenshinCharacter implements Serializable {

    private static final long serialVersionUID = 1L;

    /** 主键，数据库自增 */
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /** 角色名 */
    private String name;

    /** 元素：风/岩/雷/草/水/火/冰 */
    private String element;

    /** 星级 4/5 */
    private Integer rarity;

    /** 定位，如 主C · 蒸发（列名 role_name，role 在部分 MySQL 版本里是关键字） */
    @TableField("role_name")
    private String roleName;

    /** 天赋升级顺序 */
    private String talents;

    /** 圣遗物推荐 */
    private String artifacts;

    /** 主词条推荐（列名 main_stats） */
    @TableField("main_stats")
    private String mainStats;

    /** 一句话攻略 */
    private String summary;

    /** 排序，小的在前 */
    @TableField("sort_order")
    private Integer sortOrder;

    /** 状态：1-显示 0-隐藏 */
    private Integer status;

    /** 创建时间 */
    @TableField("create_time")
    private LocalDateTime createTime;

    /** 更新时间 */
    @TableField("update_time")
    private LocalDateTime updateTime;

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

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
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

    public Integer getSortOrder() {
        return sortOrder;
    }

    public void setSortOrder(Integer sortOrder) {
        this.sortOrder = sortOrder;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public LocalDateTime getCreateTime() {
        return createTime;
    }

    public void setCreateTime(LocalDateTime createTime) {
        this.createTime = createTime;
    }

    public LocalDateTime getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(LocalDateTime updateTime) {
        this.updateTime = updateTime;
    }
}
