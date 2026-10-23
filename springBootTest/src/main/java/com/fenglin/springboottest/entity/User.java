package com.fenglin.springboottest.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * 旅行者（用户）实体，对应表 t_user。
 * <p>
 * 说明：表名用 t_user 而不是 user，避免和 MySQL 关键字冲突。
 */
@TableName("t_user")
public class User implements Serializable {

    private static final long serialVersionUID = 1L;

    /** 主键，数据库自增 */
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /** 旅行者账号（唯一） */
    private String username;

    /** 密码，BCrypt 密文，不返回给前端 */
    private String password;

    /** 昵称，注册时默认与账号相同 */
    private String nickname;

    /** 所属国度：蒙德/璃月/稻妻/须弥/枫丹/纳塔/至冬 */
    private String nation;

    /** 状态：1 正常，0 封禁 */
    private Integer status;

    /** 创建时间，由数据库默认值填充 */
    @TableField("create_time")
    private LocalDateTime createTime;

    /** 更新时间，由数据库 ON UPDATE 填充 */
    @TableField("update_time")
    private LocalDateTime updateTime;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getNation() {
        return nation;
    }

    public void setNation(String nation) {
        this.nation = nation;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public LocalDateTime getCreateTime() {
        return createTime;
    }

    public void setCreateTime(LocalDateTime createTime) {
        this.createTime = createTime;
    }

    public LocalDateTime getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(LocalDateTime updateTime) {
        this.updateTime = updateTime;
    }
}
