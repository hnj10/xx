package com.fenglin.springboottest.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * 角色天赋详情实体，对应表 t_character_talent。
 *
 * <p>首页「模块六 · 角色天赋与命之座」展示每位角色的 3 项主动天赋，
 * 后台管理系统可对本表进行增删改查，首页实时读取 status=1 的记录。</p>
 */
@TableName("t_character_talent")
public class CharacterTalent implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /** 所属角色名，与 t_character.name 对应 */
    @TableField("character_name")
    private String characterName;

    /** 天赋类型：普通攻击 / 元素战技 / 元素爆发 / 固有天赋 */
    @TableField("talent_type")
    private String talentType;

    /** 天赋名称 */
    @TableField("talent_name")
    private String talentName;

    /** 天赋效果描述 */
    private String description;

    /** 升级优先级，1 最高 */
    private Integer priority;

    /** 推荐等级，1~10 */
    @TableField("recommended_level")
    private Integer recommendedLevel;

    /** 展示顺序，小的在前 */
    @TableField("sort_order")
    private Integer sortOrder;

    /** 状态：1-首页显示 0-隐藏 */
    private Integer status;

    @TableField("create_time")
    private LocalDateTime createTime;

    @TableField("update_time")
    private LocalDateTime updateTime;

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

    public String getTalentType() {
        return talentType;
    }

    public void setTalentType(String talentType) {
        this.talentType = talentType;
    }

    public String getTalentName() {
        return talentName;
    }

    public void setTalentName(String talentName) {
        this.talentName = talentName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getPriority() {
        return priority;
    }

    public void setPriority(Integer priority) {
        this.priority = priority;
    }

    public Integer getRecommendedLevel() {
        return recommendedLevel;
    }

    public void setRecommendedLevel(Integer recommendedLevel) {
        this.recommendedLevel = recommendedLevel;
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
