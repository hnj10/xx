package com.fenglin.springboottest.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;

/**
 * 角色圣遗物副词条优先级，对应表 t_char_substat。
 *
 * <p>首页「模块一 · 角色养成攻略」与角色详情页展示每位角色的副词条优先级，
 * 后台管理系统可逐条增删改查，首页实时读取 status=1 的记录。</p>
 */
@TableName("t_char_substat")
public class CharSubstat implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /** 所属角色名，与 t_character.name 对应 */
    @TableField("character_name")
    private String characterName;

    /** 副词条名称，如 暴击率 / 生命值% / 元素充能效率 */
    @TableField("stat_name")
    private String statName;

    /** 优先级档位：核心 / 重要 / 可用 / 低收益 */
    private String tier;

    /** 该词条对本角色的收益依据 */
    private String reason;

    /** 展示顺序，小的在前 */
    @TableField("sort_order")
    private Integer sortOrder;

    /** 状态：1-首页显示 0-隐藏 */
    private Integer status;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCharacterName() {
        return characterName;
    }

    public void setCharacterName(String characterName) {
        this.characterName = characterName;
    }

    public String getStatName() {
        return statName;
    }

    public void setStatName(String statName) {
        this.statName = statName;
    }

    public String getTier() {
        return tier;
    }

    public void setTier(String tier) {
        this.tier = tier;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
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
}
