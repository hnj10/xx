package com.fenglin.springboottest.service;

import com.fenglin.springboottest.entity.User;

import java.util.List;
import java.util.Map;

/**
 * 用户业务接口。
 */
public interface UserService {

    /**
     * 登录校验，返回脱敏后的用户信息；校验失败抛 BusinessException。
     */
    Map<String, Object> login(String username, String password);

    /**
     * 注册新旅行者，返回脱敏后的用户信息。
     */
    Map<String, Object> register(String username, String password, String nation);

    /**
     * 查询全部用户（密码已清空），便于接口联通自测。
     */
    List<User> listUsers();

    /**
     * 判断账号是否已被占用。
     */
    boolean existsUsername(String username);
}
