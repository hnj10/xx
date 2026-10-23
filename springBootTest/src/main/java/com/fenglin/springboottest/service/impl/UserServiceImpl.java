package com.fenglin.springboottest.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.fenglin.springboottest.common.BusinessException;
import com.fenglin.springboottest.entity.User;
import com.fenglin.springboottest.mapper.UserMapper;
import com.fenglin.springboottest.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * 用户业务实现。
 * <p>
 * 密码使用 BCrypt 单向加密存储：注册时 encode，登录时 matches 比对，数据库中不出现明文。
 */
@Service
public class UserServiceImpl implements UserService {

    /** 与前端 src/data/nations.js 中七国名称保持一致 */
    private static final List<String> ALLOWED_NATIONS =
            Arrays.asList("蒙德", "璃月", "稻妻", "须弥", "枫丹", "纳塔", "至冬");

    @Autowired
    private UserMapper userMapper;

    /** BCrypt 是线程安全的，可作为成员变量复用 */
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Override
    public Map<String, Object> login(String username, String password) {
        if (username == null || username.isBlank()) {
            throw new BusinessException("请输入旅行者账号");
        }
        if (password == null || password.isBlank()) {
            throw new BusinessException("请输入密码");
        }

        User user = userMapper.selectOne(
                new LambdaQueryWrapper<User>().eq(User::getUsername, username.trim()));

        if (user == null) {
            throw new BusinessException("该旅行者账号不存在");
        }
        if (user.getStatus() != null && user.getStatus() == 0) {
            throw new BusinessException("账号已被封禁，请联系派蒙");
        }
        if (user.getPassword() == null || !passwordEncoder.matches(password, user.getPassword())) {
            throw new BusinessException("密码错误");
        }

        return toVo(user);
    }

    @Override
    public Map<String, Object> register(String username, String password, String nation) {
        if (username == null || username.isBlank()) {
            throw new BusinessException("请输入旅行者账号");
        }
        String name = username.trim();
        if (name.length() < 3 || name.length() > 20) {
            throw new BusinessException("旅行者账号长度需为 3-20 位");
        }
        if (password == null || password.length() < 6) {
            throw new BusinessException("密码至少需要 6 位");
        }
        if (nation == null || !ALLOWED_NATIONS.contains(nation.trim())) {
            throw new BusinessException("请选择有效的初始国度");
        }
        if (existsUsername(name)) {
            throw new BusinessException("该旅行者账号已被注册");
        }

        User user = new User();
        user.setUsername(name);
        user.setPassword(passwordEncoder.encode(password));
        user.setNickname(name);
        user.setNation(nation.trim());
        user.setStatus(1);
        userMapper.insert(user);

        return toVo(user);
    }

    @Override
    public List<User> listUsers() {
        List<User> users = userMapper.selectList(null);
        // 不把密码泄露到接口响应中
        for (User user : users) {
            user.setPassword(null);
        }
        return users;
    }

    @Override
    public boolean existsUsername(String username) {
        if (username == null || username.isBlank()) {
            return false;
        }
        Long count = userMapper.selectCount(
                new LambdaQueryWrapper<User>().eq(User::getUsername, username.trim()));
        return count != null && count > 0;
    }

    /**
     * 转成返回给前端的用户信息（不含密码）。
     */
    private Map<String, Object> toVo(User user) {
        Map<String, Object> vo = new LinkedHashMap<>();
        vo.put("id", user.getId());
        vo.put("username", user.getUsername());
        vo.put("nickname", user.getNickname());
        vo.put("nation", user.getNation());
        vo.put("status", user.getStatus());
        return vo;
    }
}
