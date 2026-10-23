package com.fenglin.springboottest.dto;

import java.io.Serializable;

/**
 * 注册请求体：{ "username": "xxx", "password": "xxx", "nation": "蒙德" }
 */
public class RegisterRequest implements Serializable {

    private static final long serialVersionUID = 1L;

    private String username;
    private String password;
    private String nation;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNation() {
        return nation;
    }

    public void setNation(String nation) {
        this.nation = nation;
    }
}
