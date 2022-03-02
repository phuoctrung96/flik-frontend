import { Dialog } from "@mui/material";
import classNames from "classnames";
import React from "react";
import { LibraryIcons } from "../../utils";
import "./styles.scss";

export const Modal = ({
  children,
  onClose,
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
      <div className="modal__closeIcon" onClick={onClose}>
        <LibraryIcons.CloseIcon />
      </div>
      {children}
    </Dialog>
  );
};
