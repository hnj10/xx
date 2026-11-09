package com.fenglin.springboottest.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;

/**
 * 养成材料明细实体，对应表 t_material_item。
 * <p>
 * 一张通用明细表同时存放角色与武器的养成材料：
 * ownerType=character / weapon，ownerName 为角色名或武器名；
 * stage=0 是「1→满级总消耗」汇总，stage=1..6 是各突破阶段的明细。
 * 数据由项目根目录 gen_materials.py 生成，口径见 MATERIAL_NOTICE。
 */
@TableName("t_material_item")
public class MaterialItem implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /** 归属类型：character / weapon */
    private String ownerType;

    /** 角色名或武器名 */
    private String ownerName;

    /** 材料类别：升级消耗 / 元素宝石 / 首领材料 / 地区特产 / 怪物掉落 / 武器突破材料 / 摩拉 */
    private String category;

    /** 材料名称 */
    private String itemName;

    /** 数量 */
    private Integer itemCount;

    /** 0=汇总，1..6=突破阶段 */
    private Integer stage;

    /** 展示顺序 */
    private Integer sortOrder;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getOwnerType() {
        return ownerType;
    }

    public void setOwnerType(String ownerType) {
        this.ownerType = ownerType;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public Integer getItemCount() {
        return itemCount;
    }

    public void setItemCount(Integer itemCount) {
        this.itemCount = itemCount;
    }

    public Integer getStage() {
        return stage;
    }

    public void setStage(Integer stage) {
        this.stage = stage;
    }

    public Integer getSortOrder() {
        return sortOrder;
    }

    public void setSortOrder(Integer sortOrder) {
        this.sortOrder = sortOrder;
    }
}
