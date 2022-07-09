/*
 * Author: zhangyuxuan
 * Date: 2022-06-03 22:01:14
 * LastEditTime: 2022-06-29 17:30:00
 * LastEditors: zhangyuxuan
 * FilePath: \Discord-FE\src\components\Input\FromInput.tsx
 */

import React, { useEffect, useState } from "react";

import Styles from "./FromInput.module.scss";

type TypeEnums = "password" | "textarea";

export interface FromInputProps {
  type?: TypeEnums;
  value: string;
  title: string
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const defaultProps: FromInputProps = {
  type: "textarea",
  value: "",
  title: "电子邮箱地址或电话号码",
  errorMessage: "",
};

export default function FromInput({
  type,
  value,
  title,
  errorMessage,
  onChange,
}: FromInputProps = defaultProps) {
  return (
    <div className={Styles.fromInputWrapper}>
      <p className={Styles.inputTitle}> {title} </p>
      <div className={Styles.inputContainer}>
        <input
          className={Styles.input}
          type={type}
          value={value}
          onChange={onChange}
        />
      </div>
      <div className={Styles.inputError}>
        {errorMessage === "" ? errorMessage : null}
      </div>
    </div>
  );
}
