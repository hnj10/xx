package com.fenglin.springboottest.vo;

/**
 * 后台「队伍推荐」管理用 VO。
 * <p>
 * t_team 一行 + t_team_member 四行，这里把四个成员平铺成
 * m1Name/m1Element ... m4Name/m4Element，方便后台通用表单逐格编辑，
 * 保存时再由 AdminController 拆回两张表。
 */
public class AdminTeamVO {

    private Long id;
    private String name;
    private String core;
    private String tip;
    private Integer sortOrder;
    private Integer status;

    private String m1Name;
    private String m1Element;
    private String m2Name;
    private String m2Element;
    private String m3Name;
    private String m3Element;
    private String m4Name;
    private String m4Element;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCore() {
        return core;
    }

    public void setCore(String core) {
        this.core = core;
    }

    public String getTip() {
        return tip;
    }

    public void setTip(String tip) {
        this.tip = tip;
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

    public String getM1Name() {
        return m1Name;
    }

    public void setM1Name(String m1Name) {
        this.m1Name = m1Name;
    }

    public String getM1Element() {
        return m1Element;
    }

    public void setM1Element(String m1Element) {
        this.m1Element = m1Element;
    }

    public String getM2Name() {
        return m2Name;
    }

    public void setM2Name(String m2Name) {
        this.m2Name = m2Name;
    }

    public String getM2Element() {
        return m2Element;
    }

    public void setM2Element(String m2Element) {
        this.m2Element = m2Element;
    }

    public String getM3Name() {
        return m3Name;
    }

    public void setM3Name(String m3Name) {
        this.m3Name = m3Name;
    }

    public String getM3Element() {
        return m3Element;
    }

    public void setM3Element(String m3Element) {
        this.m3Element = m3Element;
    }

    public String getM4Name() {
        return m4Name;
    }

    public void setM4Name(String m4Name) {
        this.m4Name = m4Name;
    }

    public String getM4Element() {
        return m4Element;
    }

    public void setM4Element(String m4Element) {
        this.m4Element = m4Element;
    }
}
