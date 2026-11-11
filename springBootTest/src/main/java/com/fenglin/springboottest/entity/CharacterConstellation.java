package com.fenglin.springboottest.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * 角色命之座详情实体，对应表 t_character_constellation。
 *
 * <p>每位角色 6 条命座（1~6 命），后台管理系统可增删改查，
 * 首页「模块六」实时读取 status=1 的记录。</p>
 */
@TableName("t_character_constellation")
public class CharacterConstellation implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /** 所属角色名 */
    @TableField("character_name")
    private String characterName;

    /** 命座套名，可留空（首页显示「命之座」） */
    @TableField("set_name")
    private String setName;

    /** 第几命，1~6 */
    @TableField("const_level")
    private Integer constLevel;

    /** 该命座的名称 */
    private String name;

    /** 命座效果描述 */
    private String description;

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

    public String getSetName() {
        return setName;
    }

    public void setSetName(String setName) {
        this.setName = setName;
    }

    public Integer getConstLevel() {
        return constLevel;
    }

    public void setConstLevel(Integer constLevel) {
        this.constLevel = constLevel;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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
