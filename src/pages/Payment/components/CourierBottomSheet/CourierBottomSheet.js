import { Box } from "@mui/material";
import React from "react";
import { Button } from "../../../../components";
import { LibraryIcons } from "../../../../utils";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import "./styles.scss";
import { CourierItem } from "..";

export const CourierBottomSheet = ({
  onClose,
  isVisibled,
  courierList,
  onSave,
  className,
}) => {
  return (
    <BottomSheet open={isVisibled} className="courier" onDismiss={onClose}>
      <LibraryIcons.CloseIcon
        className="courier__closeIcon"
        onClick={onClose}
      />
      <Box className="courier__container">
        <p className="courier__container-title">Choose Courier</p>
        <Box>
          {courierList?.map((item) => (
            <CourierItem data={item} key={item.id} />
          ))}
        </Box>
      </Box>
      <div className="courier__buttonContainer">
        <Button
          isPrimary
          fullWidth
          className="courier__button"
          onClick={onSave}
        >
          Save
        </Button>
      </div>
    </BottomSheet>
  );
};
