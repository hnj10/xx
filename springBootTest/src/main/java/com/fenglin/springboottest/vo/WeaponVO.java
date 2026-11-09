package com.fenglin.springboottest.vo;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serializable;
import java.util.List;

/**
 * 武器养成攻略返回体，对应 GET /api/home/weapons 数组中的一项。
 * <p>
 * 注意这里叫 desc（数据库列名是 description，因为 desc 是 MySQL 排序关键字）。
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class WeaponVO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String name;

    private Integer rarity;

    private String type;

    private String stat;

    /** 1 级基础攻击力（白值） */
    private Integer atk1;

    /** 90 级基础攻击力（白值） */
    private Integer atk90;

    /** 副词条名称，如 暴击伤害 */
    private String subStat;

    /** 副词条 90 级提升值，如 44.1% / 198 */
    private String subValue;

    /** 武器效果描述 */
    private String desc;

    /** 适配角色名列表 */
    private List<String> users;

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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getStat() {
        return stat;
    }

    public void setStat(String stat) {
        this.stat = stat;
    }

    public Integer getAtk1() {
        return atk1;
    }

    public void setAtk1(Integer atk1) {
        this.atk1 = atk1;
    }

    public Integer getAtk90() {
        return atk90;
    }

    public void setAtk90(Integer atk90) {
        this.atk90 = atk90;
    }

    public String getSubStat() {
        return subStat;
    }

    public void setSubStat(String subStat) {
        this.subStat = subStat;
    }

    public String getSubValue() {
        return subValue;
    }

    public void setSubValue(String subValue) {
        this.subValue = subValue;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public List<String> getUsers() {
        return users;
    }

    public void setUsers(List<String> users) {
        this.users = users;
    }
}
