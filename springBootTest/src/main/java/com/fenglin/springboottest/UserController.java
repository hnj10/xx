package com.fenglin.springboottest;

import com.fenglin.springboottest.common.Result;
import com.fenglin.springboottest.dto.LoginRequest;
import com.fenglin.springboottest.dto.RegisterRequest;
import com.fenglin.springboottest.entity.User;
import com.fenglin.springboottest.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 用户接口。
 * <p>
 * 因为 application.properties 中配置了 server.servlet.context-path=/api，
 * 所以这里的 /user/login 对外完整路径是 <b>/api/user/login</b>，
 * 与前端 LoginCard.vue 中 fetch('/api/user/login') 完全对应。
 *
 * <pre>
 *   POST /api/user/login     {"username":"xxx","password":"xxx"}
 *   POST /api/user/register  {"username":"xxx","password":"xxx","nation":"蒙德"}
 *   GET  /api/user/list      查询全部用户（自测用）
 *   GET  /api/user/exists?username=xxx  账号是否已被占用
 * </pre>
 */
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    /**
     * 登录。成功返回 {code:200, data:{id,username,nickname,nation,status}}。
     */
    @PostMapping("/login")
    public Result<Map<String, Object>> login(@RequestBody LoginRequest request) {
        Map<String, Object> data = userService.login(request.getUsername(), request.getPassword());
        return Result.ok("登录成功", data);
    }

    /**
     * 注册。成功返回 {code:200, data:{...}}。
     */
    @PostMapping("/register")
    public Result<Map<String, Object>> register(@RequestBody RegisterRequest request) {
        Map<String, Object> data = userService.register(
                request.getUsername(), request.getPassword(), request.getNation());
        return Result.ok("注册成功", data);
    }

    /**
     * 全部用户列表，用于验证前后端联通（密码已置空）。
     */
    @GetMapping("/list")
    public Result<List<User>> list() {
        return Result.ok(userService.listUsers());
    }

    /**
     * 账号是否已存在，返回 {code:200, data:{exists:true/false}}。
     */
    @GetMapping("/exists")
    public Result<Map<String, Object>> exists(@RequestParam("username") String username) {
        Map<String, Object> data = new HashMap<>();
        data.put("exists", userService.existsUsername(username));
        return Result.ok(data);
    }
}
