package com.fenglin.springboottest.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;

/**
 * 角色毕业面板，对应表 t_char_panel。
 *
 * <p>每个角色只保留最重要的 2~4 个目标词条（如 攻击力 / 暴击率 / 暴击伤害），
 * 后台管理系统可逐条增删改查，首页实时读取 status=1 的记录。</p>
 */
@TableName("t_char_panel")
public class CharPanel implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /** 所属角色名，与 t_character.name 对应 */
    @TableField("character_name")
    private String characterName;

    /** 面板词条名称，如 生命值 / 元素充能效率 / 暴击伤害 */
    @TableField("stat_label")
    private String statLabel;

    /** 毕业目标值，如 "3.0 万+" / "70%+" / "900~1000" */
    @TableField("target_value")
    private String targetValue;

    /** 该词条为何重要、如何达成 */
    private String note;

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

    public String getStatLabel() {
        return statLabel;
    }

    public void setStatLabel(String statLabel) {
        this.statLabel = statLabel;
    }

    public String getTargetValue() {
        return targetValue;
    }

    public void setTargetValue(String targetValue) {
        this.targetValue = targetValue;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
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
