package com.fenglin.springboottest.vo;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serializable;

/**
 * 队伍成员返回体，用于 TeamVO.members。
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TeamMemberVO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String name;

    private String element;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getElement() {
        return element;
    }

    public void setElement(String element) {
        this.element = element;
    }
}
