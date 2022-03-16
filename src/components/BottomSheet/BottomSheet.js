import { Box } from "@mui/material";
import classNames from "classnames";
import React from "react";
import { BottomSheet as BottomSheetLibrary } from "react-spring-bottom-sheet";
import { Button } from "..";
import { LibraryIcons } from "../../utils";
import "./styles.scss";

export const BottomSheet = ({
  onClose,
  isVisibled,
  onSave,
  className,
  children,
  minHeight,
  title,
  ...rest
}) => {
  return (
    <BottomSheetLibrary
      open={isVisibled}
      className="bottomSheet"
      onDismiss={onClose}
      {...rest}
    >
      <LibraryIcons.CloseIcon
        className="bottomSheet__closeIcon"
        onClick={onClose}
      />
      <Box
        className={classNames("bottomSheet__container", className)}
        style={{ minHeight }}
      >
        <p className="bottomSheet__container-title">{title}</p>
        {children}
      </Box>
      <div className="bottomSheet__buttonContainer">
        <Button
          isPrimary
          fullWidth
          className="bottomSheet__button"
          onClick={onSave}
        >
          Save
        </Button>
      </div>
    </BottomSheetLibrary>
  );
};
