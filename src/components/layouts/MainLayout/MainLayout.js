import React from "react";
import { Outlet } from "react-router-dom";
// import "./styles.scss";

export const MainLayout = () => {
  return (
    <div className="mainLayout">
      <Outlet />
    </div>
  );
};
