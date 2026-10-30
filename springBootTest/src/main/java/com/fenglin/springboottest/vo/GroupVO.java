package com.fenglin.springboottest.vo;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serializable;
import java.util.List;

/**
 * 分组（分类）返回体，用于首页「分级分类」展示。
 * <p>
 * 一条记录表示一个分类，包含分类名、可选副标题（如星级/数量说明）和该分类下的条目列表。
 * <pre>
 *   { "name": "火", "count": 1, "items": [ ...CharacterVO ] }
 * </pre>
 * items 的具体类型由调用方决定：CharacterVO / WeaponVO / TeamVO。
 *
 * @param <T> 条目类型
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class GroupVO<T> implements Serializable {

    private static final long serialVersionUID = 1L;

    /** 分类名，如元素「火」、武器类型「长柄武器」 */
    private String name;

    /** 该分类下的条目数量 */
    private Integer count;

    /** 该分类下的条目列表 */
    private List<T> items;

    public GroupVO() {
    }

    public GroupVO(String name, List<T> items) {
        this.name = name;
        this.items = items;
        this.count = items == null ? 0 : items.size();
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

    public List<T> getItems() {
        return items;
    }

    public void setItems(List<T> items) {
        this.items = items;
    }
}
