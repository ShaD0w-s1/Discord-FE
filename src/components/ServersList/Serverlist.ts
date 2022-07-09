/*
 * @Author: zhangyuxuan
 * @Date: 2022-06-23 22:29:14
 * @LastEditTime: 2022-06-23 22:37:18
 * @LastEditors: zhangyuxuan
 * @FilePath: \Discord-FE\src\components\ServersList\Serverlist.ts
 */
export interface ServersInfo {
  ServersId: string;
  name: string;
  type?: string;
  icon?: string;
  unread?: number;
  iconUrl?: string;
  channelsInfo?: channelsInfo;
}

export interface ServersState {
  haveUnreadMessage: boolean;
  haveUnreadMention: number;
  isSelected: boolean;
}

export interface channelsInfo {}

export interface ServersProps {
  servers: ServersInfo[];
}
