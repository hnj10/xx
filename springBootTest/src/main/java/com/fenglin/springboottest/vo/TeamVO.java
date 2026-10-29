package com.fenglin.springboottest.vo;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serializable;
import java.util.List;

/**
 * 角色队伍推荐返回体，对应 GET /api/home/teams 数组中的一项。
 * <p>
 * 形状：{ name, core, members:[{name, element}], tip }
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TeamVO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String name;

    private String core;

    private List<TeamMemberVO> members;

    private String tip;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCore() {
        return core;
    }

    public void setCore(String core) {
        this.core = core;
    }

    public List<TeamMemberVO> getMembers() {
        return members;
    }

    public void setMembers(List<TeamMemberVO> members) {
        this.members = members;
    }

    public String getTip() {
        return tip;
    }

    public void setTip(String tip) {
        this.tip = tip;
    }
}
