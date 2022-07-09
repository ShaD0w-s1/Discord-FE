/*
 * Author: zhangyuxuan
 * Date: 2022-06-29 16:30:20
 * LastEditTime: 2022-06-29 17:09:07
 * LastEditors: zhangyuxuan
 * FilePath: \Discord-FE\src\components\Spin\Spin.tsx
 */
import Style from "./Spin.module.scss";


export default function Spin() {
  
  return (<svg className={Style.spin}>
    <rect width="30" height="30"/>
  </svg>)
}