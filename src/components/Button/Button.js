import React from "react";
import { Button as ButtonLibrary } from "@mui/material";
import classNames from "classnames";
import "./styles.scss";

export const Button = ({
  isPrimary,
  children,
  className,
  buttonClassName,
  ...rest
}) => {
  return (
    <div className={classNames("button", className)}>
      <ButtonLibrary
        {...rest}
        className={classNames("item", buttonClassName, {
          "primary-color": isPrimary,
        })}
      >
        {children}
      </ButtonLibrary>
    </div>
  );
};
