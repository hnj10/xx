package com.fenglin.springboottest.dto;

import java.io.Serializable;

/**
 * 登录请求体：{ "username": "xxx", "password": "xxx" }
 */
public class LoginRequest implements Serializable {

    private static final long serialVersionUID = 1L;

    private String username;
    private String password;

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
}
