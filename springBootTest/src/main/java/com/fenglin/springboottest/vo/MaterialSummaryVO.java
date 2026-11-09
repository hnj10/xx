package com.fenglin.springboottest.vo;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serializable;
import java.util.List;

/**
 * 养成消耗摘要。首页卡片只展示这几个数字，避免一次拉取上万条明细。
 * highlights 是「主要材料名」列表（如元素宝石、首领材料、地区特产），用于卡片副标题。
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class MaterialSummaryVO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String name;
    /** 角色：大英雄的经验数量；武器为 0 */
    private Integer books;
    private String bookName;
    /** 武器：精锻用魔矿数量；角色为 0 */
    private Integer ore;
    private String oreName;
    private Integer moraLevel;
    private Integer moraAscension;
    private Integer moraTotal;
    private List<String> highlights;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getBooks() {
        return books;
    }

    public void setBooks(Integer books) {
        this.books = books;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public Integer getOre() {
        return ore;
    }

    public void setOre(Integer ore) {
        this.ore = ore;
    }

    public String getOreName() {
        return oreName;
    }

    public void setOreName(String oreName) {
        this.oreName = oreName;
    }

    public Integer getMoraLevel() {
        return moraLevel;
    }

    public void setMoraLevel(Integer moraLevel) {
        this.moraLevel = moraLevel;
    }

    public Integer getMoraAscension() {
        return moraAscension;
    }

    public void setMoraAscension(Integer moraAscension) {
        this.moraAscension = moraAscension;
    }

    public Integer getMoraTotal() {
        return moraTotal;
    }

    public void setMoraTotal(Integer moraTotal) {
        this.moraTotal = moraTotal;
    }

    public List<String> getHighlights() {
        return highlights;
    }

    public void setHighlights(List<String> highlights) {
        this.highlights = highlights;
    }
}
