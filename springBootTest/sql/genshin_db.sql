-- =============================================================
-- 原神登录 Demo —— MySQL 初始化脚本
-- 数据库: genshin_db    用户名: root    密码: 123456
--
-- 使用方法（任选其一）:
--   1. IDEA: 打开本文件, 选择 MySQL 数据源后直接执行
--   2. 命令行: mysql -uroot -p123456 --default-character-set=utf8mb4 < genshin_db.sql
--
-- 脚本可重复执行:
--   - 建库/建表均使用 IF NOT EXISTS
--   - 示例账号使用 NOT EXISTS 防止重复插入, 不会覆盖已注册用户
--
-- 示例账号(密码均为 123456, 数据库中存的是 BCrypt 密文):
--   traveler / 123456 / 蒙德
--   paimon    / 123456 / 璃月
-- =============================================================

CREATE DATABASE IF NOT EXISTS genshin_db
    DEFAULT CHARACTER SET utf8mb4
    DEFAULT COLLATE utf8mb4_general_ci;

USE genshin_db;

CREATE TABLE IF NOT EXISTS t_user (
    id          BIGINT       NOT NULL AUTO_INCREMENT COMMENT '主键',
    username    VARCHAR(50)  NOT NULL                COMMENT '旅行者账号(唯一)',
    password    VARCHAR(100) NOT NULL                COMMENT '密码(BCrypt密文)',
    nickname    VARCHAR(50)  NULL                    COMMENT '昵称, 注册时默认等于账号',
    nation      VARCHAR(20)  NULL                    COMMENT '所属国度: 蒙德/璃月/稻妻/须弥/枫丹/纳塔/至冬',
    status      TINYINT      NOT NULL DEFAULT 1      COMMENT '状态: 1-正常 0-封禁',
    create_time DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    update_time DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    PRIMARY KEY (id),
    UNIQUE KEY uk_username (username)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_general_ci
  COMMENT = '旅行者(用户)表';

-- -------------------------------------------------------------
-- 示例账号 1: traveler / 123456 (蒙德)
-- -------------------------------------------------------------
INSERT INTO t_user (username, password, nickname, nation, status)
SELECT 'traveler', '$2a$10$Hdd/CpTjIM275SamMofic.bNWmqL1ewDoy6KhKjRdAaHspW6f5682', 'traveler', '蒙德', 1
FROM DUAL
WHERE NOT EXISTS (SELECT 1 FROM t_user WHERE username = 'traveler');

-- -------------------------------------------------------------
-- 示例账号 2: paimon / 123456 (璃月)
-- -------------------------------------------------------------
INSERT INTO t_user (username, password, nickname, nation, status)
SELECT 'paimon', '$2a$10$tQ/Db2XNsWXcpzpmUyCb4uhhckKGAoBgH881/0TY4fJL1NOCzzZJu', 'paimon', '璃月', 1
FROM DUAL
WHERE NOT EXISTS (SELECT 1 FROM t_user WHERE username = 'paimon');
