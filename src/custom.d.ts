/*
 * @Author: zhangyuxuan
 * @Date: 2022-06-04 19:14:02
 * @LastEditTime: 2022-06-18 16:45:32
 * @LastEditors: zhangyuxuan
 * @FilePath: \Discord-FE\src\custom.d.ts
 */


declare module "*.css" {
  const Style: { [key: string]: string }
  export default css
}

declare module "*.scss" {
  const Style: { [key: string]: string }
  export default Style
}