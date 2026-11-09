package com.fenglin.springboottest.vo;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

/**
 * 单个角色 / 武器的完整养成材料。
 * <p>
 * 结构与前端本地兜底数据 materialsData.js 中的条目一致：
 * { name, ownerType, element/rarity/type/region, summary, stages, items }
 * items 里 stage=0 是汇总，stage=1..6 是逐突破阶段明细。
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class MaterialVO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String name;
    private String ownerType;
    private String element;
    private Integer rarity;
    private String type;
    private String region;
    private MaterialSummaryVO summary;
    /** [{ level: 20, mora: 20000 }, ...] */
    private List<Map<String, Object>> stages;
    private List<MaterialItemVO> items;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOwnerType() {
        return ownerType;
    }

    public void setOwnerType(String ownerType) {
        this.ownerType = ownerType;
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public MaterialSummaryVO getSummary() {
        return summary;
    }

    public void setSummary(MaterialSummaryVO summary) {
        this.summary = summary;
    }

    public List<Map<String, Object>> getStages() {
        return stages;
    }

    public void setStages(List<Map<String, Object>> stages) {
        this.stages = stages;
    }

    public List<MaterialItemVO> getItems() {
        return items;
    }

    public void setItems(List<MaterialItemVO> items) {
        this.items = items;
    }
}
