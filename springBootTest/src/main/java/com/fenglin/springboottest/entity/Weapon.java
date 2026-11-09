package com.fenglin.springboottest.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * 武器养成攻略实体，对应表 t_weapon。
 * <p>
 * 武器适配角色存放在 t_weapon_user，接口返回时用 users 数组补齐。
 */
@TableName("t_weapon")
public class Weapon implements Serializable {

    private static final long serialVersionUID = 1L;

    /** 主键，数据库自增 */
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /** 武器名 */
    private String name;

    /** 星级 */
    private Integer rarity;

    /** 类型：单手剑/双手剑/长柄武器/法器/弓 */
    private String type;

    /** 副属性 */
    private String stat;

    /** 1 级基础攻击力（白值） */
    private Integer atk1;

    /** 90 级基础攻击力（白值） */
    private Integer atk90;

    /** 副词条名称，如 暴击伤害 */
    private String subStat;

    /** 副词条 90 级提升值，如 44.1% / 198 */
    private String subValue;

    /** 武器效果描述（列名 description，desc 是 MySQL 关键字） */
    private String description;

    /** 排序 */
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

    public Integer getRarity() {
        return rarity;
    }

    public void setRarity(Integer rarity) {
        this.rarity = rarity;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getStat() {
        return stat;
    }

    public void setStat(String stat) {
        this.stat = stat;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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
