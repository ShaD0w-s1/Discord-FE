/*
 * @Author: zhangyuxuan
 * @Date: 2022-06-24 16:00:36
 * @LastEditTime: 2022-06-30 23:21:29
 * @LastEditors: zhangyuxuan
 * @FilePath: \Discord-FE\src\utils\net\withAuth.ts
 */
import { withAuthRequest, baseResponseErrorInterceptors } from "./request";

import { Navigate } from "react-router-dom";

import type {
  AxiosResponse,
  AxiosRequestConfig,
  AxiosError,
  AxiosPromise,
} from "axios";

import type { Method, URL } from "@/utils/net/request";

import refreshTokenfuntion from "api/refreshToken";

const AccessToken = sessionStorage.getItem("AccessToken");
const RefreshToken = localStorage.getItem("RefreshToken");

// 添加请求拦截器
withAuthRequest.interceptors.request.use(
  async (config) => {
    // 判断是否存在token，如果存在的话，则每个请求头都加上token
    if (AccessToken) {
      config!.headers!.Authorization = AccessToken;
    } else {
      // 如果没有AccessToken，则检查是否存在RefreshToken
      if (RefreshToken) {
        // 如果存在RefreshToken，则调用RefreshToken接口刷新token
        try {
          const { status, data } = await refreshTokenfuntion(RefreshToken);
          const { accessToken } = data.body;
          // 如果刷新AccessToken成功，则更新本地AccessToken
          sessionStorage.setItem("AccessToken", accessToken);
          status === 200 && (config!.headers!.Authorization = accessToken);
        } catch (error) {
          // 如果刷新AccessToken失败，则清除本地token，并跳转到登录页面
          sessionStorage.removeItem("AccessToken");
          localStorage.removeItem("RefreshToken");
          Navigate({ to: "/login" });
        }
      } else {
        // 如果没有refreshToken，则跳转到登录页面
        Navigate({ to: "/login" });
      }
    }

    return config;
  },
  (error) => {
    // 对请求错误做些什么
    throw error as AxiosError;
  }
);

// 添加响应拦截器
withAuthRequest.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response;
  },
  async (error) => {
    if (error.response) {
      const axiosError = error as AxiosError;
      const { status } = axiosError;

      switch (status) {
        // 如果返回401，则代表token已过期，需要重新登录
        case "401":
          //  如果有RefreshToken，则调用RefreshToken接口刷新token
          if (RefreshToken) {
            const response = await refreshTokenfuntion(RefreshToken).catch(
              (error) => {
                // 如果刷新AccessToken失败，则清除本地token，并跳转到登录页面
                sessionStorage.removeItem("AccessToken");
                localStorage.removeItem("RefreshToken");
                Navigate({ to: "/login" });
              }
            );
            if (response) {
              const { data, status } = response;
              const { accessToken } = data.body;
              if (status === 200) {
                // 如果刷新AccessToken成功，则更新本地AccessToken
                sessionStorage.setItem("AccessToken", accessToken);
                // 重新发起请求
                return withAuthRequest(axiosError.config);
              }
            } else {
              // 如果没有refreshToken，则跳转到登录页面
              Navigate({ to: "/login" });
            }
            // 处理其他网络错误
            axiosError.message = baseResponseErrorInterceptors(axiosError);
          }
          throw axiosError;
      }
    }

    // 处理其他类型错误
    const defaultError = error as Error;
    throw defaultError;
  }
);

export interface WithAuthRequestConfig<T extends Method>
  extends AxiosRequestConfig {
  method: T;
  url: URL;
  data?: unknown;
  params?: unknown;
}

export interface WithAuthResponse extends AxiosResponse {
  code: string;
  message: string;
  body: any;
}

export default function request(
  withAuthRequestOptions: AxiosRequestConfig
): AxiosPromise<WithAuthResponse> {
  return withAuthRequest.request(withAuthRequestOptions);
}
