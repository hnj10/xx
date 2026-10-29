package com.fenglin.springboottest.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;

/**
 * 角色武器推荐实体，对应表 t_char_weapon。
 * <p>
 * 一个角色可以有多条推荐武器，接口返回时会按 characterName 聚合成
 * { character, element, best:[{name, rarity, reason}] } 的形状。
 */
@TableName("t_char_weapon")
public class CharWeapon implements Serializable {

    private static final long serialVersionUID = 1L;

    /** 主键，数据库自增 */
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /** 角色名（冗余字段，便于搜索与分组） */
    @TableField("character_name")
    private String characterName;

    /** 角色元素 */
    private String element;

    /** 推荐武器名 */
    @TableField("weapon_name")
    private String weaponName;

    /** 武器星级 */
    private Integer rarity;

    /** 推荐理由 */
    private String reason;

    /** 排序，小的更推荐 */
    @TableField("sort_order")
    private Integer sortOrder;

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

    public String getElement() {
        return element;
    }

    public void setElement(String element) {
        this.element = element;
    }

    public String getWeaponName() {
        return weaponName;
    }

    public void setWeaponName(String weaponName) {
        this.weaponName = weaponName;
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

    public Integer getSortOrder() {
        return sortOrder;
    }

    public void setSortOrder(Integer sortOrder) {
        this.sortOrder = sortOrder;
    }
}
