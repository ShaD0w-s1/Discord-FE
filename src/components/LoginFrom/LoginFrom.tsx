/*
 * Author: zhangyuxuan
 * Date: 2022-06-03 22:01:14
 * LastEditTime: 2022-07-01 01:51:05
 * LastEditors: zhangyuxuan
 * FilePath: \Discord-FE\src\components\LoginFrom\LoginFrom.tsx
 */
import React, { useEffect, useState } from "react";
import { Link, Navigate, useOutletContext } from "react-router-dom";

import loginRequest from "api/login";
import forgetPasswordRequest from "api/forgetPassword";

import { AuthContext } from "view/Auth/Auth";

import FromInput from "../Input/FromInput";
import Spin from "../Spin/Spin";

import Styles from "./LoginFrom.module.scss";

export interface LoginFromProps {}

export default function LoginFrom(props: LoginFromProps) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loadingState, setLoadingState] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [authState, setAuthState] = useOutletContext<AuthContext>();

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      setLoadingState(true);
      const { data } = await loginRequest({ username, password });
      const { accessToken, idToken, refreshToken } = data.body;
      sessionStorage.setItem("accessToken", accessToken);
      sessionStorage.setItem("idToken", idToken);
      localStorage.setItem("refreshToken", refreshToken);

      Navigate({ to: "/channel" });
    } catch (error) {
    } finally {
      setLoadingState(false);
    }
  };

  const handleForgetPassword = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    const response = await forgetPasswordRequest({ username }).catch(
      (error) => {
        setErrorMessage(error.response.data.message);
      }
    );
    if (response)
      if (response.status === 200) {
        alert("邮件已发送，请查收");
      }
  };

  function setUsernamehandle(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }
  function setPasswordhandle(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  return (
    <>
      <div className={Styles.header}>
        <h3>欢迎回来！</h3>
        <p>很高兴再次见到您！</p>
      </div>
      <form className={Styles.LoginFrom}>
        <FromInput
          type="textarea"
          value={username}
          title="电子邮箱地址或电话号码"
          errorMessage={errorMessage}
          onChange={setUsernamehandle}
        />
        <FromInput
          type="password"
          value={password}
          title="密码"
          errorMessage={errorMessage}
          onChange={setPasswordhandle}
        />
        <button
          className={Styles.forgetPassword}
          onClick={handleForgetPassword}
        >
          <div>忘记密码?</div>
        </button>
        <button
          className={Styles.submitButton}
          type="submit"
          onClick={handleLogin}
        >
          {loadingState ? <Spin /> : <p>登录</p>}
        </button>
        <p>
          需要新的账号？<Link to="/register">注册</Link>
        </p>
      </form>
    </>
  );
}
