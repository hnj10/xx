package com.fenglin.springboottest.common;

/**
 * 业务异常：用于把"账号不存在""密码错误"这类可预期错误直接以文案形式返回给前端。
 */
public class BusinessException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public BusinessException(String message) {
        super(message);
    }

    public BusinessException(String message, Throwable cause) {
        super(message, cause);
    }
}
