package com.fenglin.springboottest.common;

import java.io.Serializable;

/**
 * 统一接口响应体。
 * <p>
 * 前端 LoginCard.vue / RegisterCard.vue 依赖两个字段：
 * <ul>
 *   <li>{@code code} —— 200 表示成功（前端判断 data.code === 200）</li>
 *   <li>{@code message} —— 失败时直接展示给用户（"登录失败：xxx"）</li>
 * </ul>
 * 因此这里的字段名和 200 这个值不要随意改动。
 */
public class Result<T> implements Serializable {

    private static final long serialVersionUID = 1L;

    /** 成功状态码 */
    public static final int CODE_SUCCESS = 200;
    /** 失败状态码 */
    public static final int CODE_ERROR = 500;

    private int code;
    private String message;
    private T data;

    public Result() {
    }

    public Result(int code, String message, T data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public static <T> Result<T> ok() {
        return new Result<>(CODE_SUCCESS, "success", null);
    }

    public static <T> Result<T> ok(T data) {
        return new Result<>(CODE_SUCCESS, "success", data);
    }

    public static <T> Result<T> ok(String message, T data) {
        return new Result<>(CODE_SUCCESS, message, data);
    }

    public static <T> Result<T> fail(String message) {
        return new Result<>(CODE_ERROR, message, null);
    }

    public static <T> Result<T> fail(int code, String message) {
        return new Result<>(code, message, null);
    }
}
