/**
 * @file 获得网页垂直滚动距离
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */

'use strict'

/**
 * 获得网页垂直滚动距离
 *
 * @return {number}
 */
export default function () {
  return Math.max(
    document.body.scrollTop,
    document.documentElement.scrollTop
  )
};
