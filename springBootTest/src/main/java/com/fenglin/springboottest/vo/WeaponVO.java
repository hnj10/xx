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
