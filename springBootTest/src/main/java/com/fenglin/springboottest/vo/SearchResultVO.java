package com.fenglin.springboottest.vo;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serializable;

/**
 * 全站搜索结果项，对应 GET /api/home/search 数组中的一项。
 * <p>
 * 为了让前端能一次性拿到三类结果又保持数组结构，这里采用「分类 + 数据」的形状：
 * <pre>
 *   { "category": "character", "data": { ...CharacterVO  } }
 *   { "category": "weapon",    "data": { ...WeaponVO     } }
 *   { "category": "team",      "data": { ...TeamVO       } }
 * </pre>
 * 前端按 category 过滤即可得到 hitChars / hitWeapons / hitTeams。
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class SearchResultVO implements Serializable {

    private static final long serialVersionUID = 1L;

    /** 结果分类：character / weapon / team */
    private String category;

    /** 具体数据，实际类型为 CharacterVO / WeaponVO / TeamVO */
    private Object data;

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
