/*
 * Author: zhangyuxuan
 * Date: 2022-06-15 06:57:15
 * LastEditTime: 2022-06-20 16:03:41
 * LastEditors: zhangyuxuan
 * FilePath: \Discord-FE\src\components\ServersList\ServersListItem\ServersListItem.tsx
 */

import { ReactNode } from "react";

import Styles from "./ServersListItem.module.scss";

type Props = {
  children?: ReactNode;
};

export default function ChannelsListItem({ children }: Props) {
  return <div className={Styles.wrapper}>{children}</div>;
}
