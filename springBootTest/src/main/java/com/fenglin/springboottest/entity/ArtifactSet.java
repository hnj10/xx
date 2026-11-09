package com.fenglin.springboottest.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * 圣遗物套装实体，对应表 t_artifact_set。
 * <p>
 * 用于首页「圣遗物套装一览」模块与后台管理的数据维护，
 * 包含 2 件套 / 4 件套效果、图标路径与卡片主题色。
 */
@TableName("t_artifact_set")
public class ArtifactSet implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    /** 套装名 */
    private String name;

    /** 稀有度 3/4/5 */
    private Integer rarity;

    /** 主题标签：元素 / 定位 */
    private String element;

    /** 主要获取区域 */
    private String region;

    /** 2 件套效果 */
    @TableField("two_piece")
    private String twoPiece;

    /** 4 件套效果 */
    @TableField("four_piece")
    private String fourPiece;

    /** 定位提示 / 备注 */
    private String flavor;

    /** 图标路径，如 /artifacts/xxx.png */
    private String image;

    /** 卡片主题色，如 #e0604a */
    @TableField("theme_color")
    private String themeColor;

    /** 排序，小的在前 */
    @TableField("sort_order")
    private Integer sortOrder;

    /** 状态：1-显示 0-隐藏 */
    private Integer status;

    @TableField("create_time")
    private LocalDateTime createTime;

    @TableField("update_time")
    private LocalDateTime updateTime;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getRarity() {
        return rarity;
    }

    public void setRarity(Integer rarity) {
        this.rarity = rarity;
    }

    public String getElement() {
        return element;
    }

    public void setElement(String element) {
        this.element = element;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getTwoPiece() {
        return twoPiece;
    }

    public void setTwoPiece(String twoPiece) {
        this.twoPiece = twoPiece;
    }

    public String getFourPiece() {
        return fourPiece;
    }

    public void setFourPiece(String fourPiece) {
        this.fourPiece = fourPiece;
    }

    public String getFlavor() {
        return flavor;
    }

    public void setFlavor(String flavor) {
        this.flavor = flavor;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getThemeColor() {
        return themeColor;
    }

    public void setThemeColor(String themeColor) {
        this.themeColor = themeColor;
    }

    public Integer getSortOrder() {
        return sortOrder;
    }

    public void setSortOrder(Integer sortOrder) {
        this.sortOrder = sortOrder;
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
