package com.fenglin.springboottest.vo;

import java.io.Serializable;

/**
 * 单条材料明细。字段名与前端 materialsData.js 中的 items 元素保持一致，
 * 便于前端在本地兜底数据与接口数据之间无缝切换。
 */
public class MaterialItemVO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String category;
    private String name;
    private Integer count;
    private Integer stage;
    private Integer sortOrder;

    public MaterialItemVO() {
    }

    public MaterialItemVO(String category, String name, Integer count, Integer stage, Integer sortOrder) {
        this.category = category;
        this.name = name;
        this.count = count;
        this.stage = stage;
        this.sortOrder = sortOrder;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
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
