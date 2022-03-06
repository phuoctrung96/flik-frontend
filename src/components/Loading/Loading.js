import { CircularProgress } from "@mui/material";
import classNames from "classnames";
import React from "react";
import { Images } from "../../utils";
import "./styles.scss";

export const Loading = ({ className }) => {
  return (
    <div className={classNames("loading", className)}>
      <img src={Images.logo} alt="" width={40} height={40} />
      <CircularProgress className="loading__circle"/>
    </div>
  );
};
