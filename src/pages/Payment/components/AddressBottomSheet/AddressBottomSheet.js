import { Box } from "@mui/material";
import React from "react";
import "react-spring-bottom-sheet/dist/style.css";
import { BottomSheet, Button, Input } from "../../../../components";
import { Icons, Images, LibraryIcons, RootStyles } from "../../../../utils";
import { fieldNames } from "../../Payment.data";
import "./styles.scss";

export const AddressBottomSheet = ({
  onClose,
  isVisibled,
  onSave,
  className,
  form,
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
      isVisibled={isVisibled}
      className="addressBottomSheet"
      onClose={onClose}
      onSave={onSave}
    >
      <Box className="addressBottomSheet__container">
        <Input
          label="Shipping Address"
          variant="standard"
          sx={{ mt: "16px" }}
          startInput={renderShippingAddress()}
          inputClass="addressBottomSheet__container-input"
          name={fieldNames.shippingAddress}
          value={form.values.shippingAddress}
          onChange={form.handleChange}
          multiline
        />
        <Input
          label="Apartment, Unit, Floor, etc. (Optional)"
          variant="standard"
          sx={{ mt: "16px" }}
          inputClass="addressBottomSheet__container-input"
          name={fieldNames.addressOptional}
          value={form.values.addressOptional}
          onChange={form.handleChange}
        />
        <Input
          label="City"
          variant="standard"
          sx={{ mt: "16px" }}
          name={fieldNames.city}
          value={form.values.city}
          onChange={form.handleChange}
        />
        <Input
          label="Province (Optional)"
          variant="standard"
          sx={{ mt: "16px" }}
          name={fieldNames.province}
          value={form.values.province}
          onChange={form.handleChange}
        />
        <Input
          label="Postal Code"
          variant="standard"
          sx={{ mt: "16px" }}
          name={fieldNames.postalCode}
          value={form.values.postalCode}
          onChange={form.handleChange}
        />
        <Input
          label="Recipient's Name"
          variant="standard"
          sx={{ mt: "16px" }}
          name={fieldNames.recipientName}
          value={form.values.recipientName}
          onChange={form.handleChange}
        />
        <Input
          label="Phone Number"
          variant="standard"
          startInput={renderStartPhoneInput()}
          sx={{ mt: "16px" }}
          name={fieldNames.phone}
          onChange={form.handleChange}
          value={form.values.phone}
        />
      </Box>
    </BottomSheet>
  );
};
