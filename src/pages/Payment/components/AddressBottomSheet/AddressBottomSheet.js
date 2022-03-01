import { Box } from "@mui/material";
import React from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import { Button, Input } from "../../../../components";
import { Icons, Images, LibraryIcons, RootStyles } from "../../../../utils";
import "./styles.scss";

export const AddressBottomSheet = ({
  onClose,
  isVisibled,
  onClick,
  className,
}) => {
  const renderShippingAddress = () => {
    return (
      <Box sx={{ ...RootStyles.row, mb: "5px" }}>
        <img src={Images.flat} width={24} height={24} alt="" />
        <img src={Icons.chevronDown} width={18} height={18} alt="" />
      </Box>
    );
  };

  const renderStartPhoneInput = () => {
    return (
      <Box sx={{ ...RootStyles.row, mb: "5px" }}>
        <img src={Images.flat} width={24} height={24} alt="" />
        <img src={Icons.chevronDown} width={18} height={18} alt="" />
      </Box>
    );
  };

  return (
    <BottomSheet
      open={isVisibled}
      className="addressBottomSheet"
      onDismiss={onClose}
    >
      <LibraryIcons.CloseIcon
        className="addressBottomSheet__closeIcon"
        onClick={onClose}
      />
      <Box className="addressBottomSheet__container">
        <Input
          id="standard-basic"
          label="Shipping Address"
          variant="standard"
          sx={{ mt: "16px" }}
          startInput={renderShippingAddress()}
          inputClass="addressBottomSheet__container-input"
        />
        <Input
          id="standard-basic"
          label="Apartment, Unit, Floor, etc. (Optional)"
          variant="standard"
          sx={{ mt: "16px" }}
          inputClass="addressBottomSheet__container-input"
        />
        <Input
          id="standard-basic"
          label="City"
          variant="standard"
          sx={{ mt: "16px" }}
        />
        <Input
          id="standard-basic"
          label="Province (Optional)"
          variant="standard"
          sx={{ mt: "16px" }}
        />
        <Input
          id="standard-basic"
          label="Postal Code"
          variant="standard"
          sx={{ mt: "16px" }}
        />
        <Input
          id="standard-basic"
          label="Recipient's Name"
          variant="standard"
          sx={{ mt: "16px" }}
        />
        <Input
          id="standard-basic"
          label="Phone Number"
          variant="standard"
          startInput={renderStartPhoneInput()}
          sx={{ mt: "16px" }}
        />
      </Box>
      <div className="addressBottomSheet__buttonContainer">
        <Button isPrimary fullWidth className="addressBottomSheet__button">
          Save
        </Button>
      </div>
    </BottomSheet>
  );
};
