/*
 * Author: zhangyuxuan
 * Date: 2022-06-15 06:57:15
 * LastEditTime: 2022-06-23 23:05:16
 * LastEditors: zhangyuxuan
 * FilePath: \Discord-FE\src\components\ServersList\ServersList.tsx
 */
/*
 * Author: zhangyuxuan
 * Date: 2022-06-15 06:57:15
 * LastEditTime: 2022-06-20 16:39:43
 * LastEditors: zhangyuxuan
 * FilePath: \Discord-FE\src\components\ServersList\ServersList.tsx
 */
import ServerListItem from "./ServersListItem/ServersListItem";
import ServersPill from "./ServersPill/ServersPill";
import ServersButton from "./ServersButton/ServersButton";
import type { ServersProps } from "components/ServersList/Serverlist";

import Styles from "./ServersList.module.scss";
import { Link } from "react-router-dom";




export default function ServersList({ servers }: ServersProps) {
  return (
    <div className={Styles.wrapper}>
      {/* 顶部提示 */}

      <div className={Styles["unreadMentionsIndicator-top"]} />

      {/* 列表主体 */}
      <div className={Styles.scroller}>
        {/* 我的主页 */}

        <ServerListItem>
          <ServersPill></ServersPill>
          <Link to="/1/">
            <ServersButton></ServersButton>
          </Link>
        </ServerListItem>

        {/* 隔断 */}

        <ServerListItem>
          <div className={Styles.separator} />
        </ServerListItem>

        {/* 频道列表 */}

        <>
          {servers.map(({ ServersId }) => {
            return (
              <ServerListItem key={ServersId}>
                <ServersPill></ServersPill>
                <Link to={ServersId}>
                  <ServersButton></ServersButton>
                </Link>
              </ServerListItem>
            );
          })}
        </>

        {/* 添加服务器 */}

        <ServerListItem>
          <ServersPill></ServersPill>
          <ServersButton></ServersButton>
        </ServerListItem>

        {/* 搜索公开服务器 */}

        <ServerListItem>
          <ServersPill></ServersPill>
          <ServersButton></ServersButton>
        </ServerListItem>

        {/* 隔断 */}

        <ServerListItem>
          <div className={Styles.separator} />
        </ServerListItem>

        {/* 下载APP */}

        <ServerListItem>
          <ServersPill></ServersPill>
          <ServersButton></ServersButton>
        </ServerListItem>
      </div>
      {/* 底部提示 */}

      <div className={Styles["unreadMentionsIndicator-bottom"]} />
    </div>
  );
}
