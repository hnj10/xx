package com.fenglin.springboottest.vo;

import java.io.Serializable;

/**
 * 角色详情页里的「一把推荐武器」：推荐理由 + 武器养成攻略 + 该武器的突破材料与精锻矿。
 */
public class WeaponDetailVO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String name;
    private Integer rarity;
    private String reason;
    /** t_weapon 里的完整养成信息；武器未收录时为 null */
    private WeaponVO weapon;
    /** t_material_item 里的完整材料；材料缺失时为 null */
    private MaterialVO material;

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

    public WeaponVO getWeapon() {
        return weapon;
    }

    public void setWeapon(WeaponVO weapon) {
        this.weapon = weapon;
    }

    public MaterialVO getMaterial() {
        return material;
    }

    public void setMaterial(MaterialVO material) {
        this.material = material;
    }
}
