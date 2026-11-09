package com.fenglin.springboottest.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.fenglin.springboottest.entity.MaterialItem;

/**
 * 养成材料明细 Mapper。全部查询用 LambdaQueryWrapper 按 ownerType + ownerName 过滤，
 * 无需 XML（项目已开启 @MapperScan）。
 */
public interface MaterialItemMapper extends BaseMapper<MaterialItem> {
}
