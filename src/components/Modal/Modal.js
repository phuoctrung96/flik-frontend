import { Dialog } from "@mui/material";
import classNames from "classnames";
import React from "react";
import { LibraryIcons } from "../../utils";
import "./styles.scss";

export const Modal = ({
  children,
  onClose,
  isClose,
  isBack,
  textBackButton = "Back",
  isVisibled,
  className,
  ...rest
}) => {
  return (
    <Dialog
      onClose={onClose}
      open={isVisibled}
      className={classNames("modal", className)}
      {...rest}
    >
      {isBack && (
        <div className="modal__closeIconBack" onClick={onClose}>
          <LibraryIcons.ArrowBackIosNewIcon fontSize="24px" />
          <p className="modal__closeIconBack-text">{textBackButton}</p>
        </div>
      )}
      {isClose && (
        <div className="modal__closeIcon" onClick={onClose}>
          <LibraryIcons.CloseIcon />
        </div>
      )}
      {children}
    </Dialog>
  );
};
