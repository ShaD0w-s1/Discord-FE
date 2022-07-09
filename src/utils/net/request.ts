/*
 * @Author: zhangyuxuan
 * @Date: 2022-06-24 16:03:06
 * @LastEditTime: 2022-06-30 23:13:44
 * @LastEditors: zhangyuxuan
 * @FilePath: \Discord-FE\src\utils\net\request.ts
 */
import axios, { AxiosError } from "axios";

export type URL = `/api/v${number}/${string}`;

export type Method =
  | "get"
  | "post"
  | "put"
  | "delete"
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE";

const baseConfig = {
  baseURL: "http://localhost:8000",
  timeout: 10000,
};

export function baseRequestConfigInterceptors(response: any) {}

export function baseResponseErrorInterceptors(error: AxiosError) {
    switch (error.status) {
      case "401":
        return "请先登录";
      case "403":
        return "没有权限";
      case "404":
        return "找不到页面";
      case "500":
        return "服务器错误";
      default:
        return "未知错误";
    }
  
}

export const withAuthRequest = axios.create(baseConfig);

export const withoutAuthRequest = axios.create(baseConfig);
