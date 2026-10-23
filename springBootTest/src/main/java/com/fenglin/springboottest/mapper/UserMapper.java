package com.fenglin.springboottest.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.fenglin.springboottest.entity.User;

/**
 * 用户 Mapper。继承 BaseMapper 后即拥有 insert / selectById / selectList 等常用方法，
 * 本项目登录、注册用 LambdaQueryWrapper 查询，无需额外 XML。
 */
public interface UserMapper extends BaseMapper<User> {
}
