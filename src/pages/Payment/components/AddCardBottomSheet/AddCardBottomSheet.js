import { Box } from "@mui/material";
import React from "react";
import { BottomSheet, CheckBox, Input } from "../../../../components";
import { Icons, Images, RootStyles } from "../../../../utils";
import "./styles.scss";

export const AddCardBottomSheet = ({
  isVisibled,
  onClose,
  onSave,
  data,
  onClick,
}) => {
  const renderCardIcon = () => (
    <Box sx={{ mb: "5px" }}>
      <img src={Icons.card} width={23} height={16} alt="" />
    </Box>
  );

  return (
    <BottomSheet
      isVisibled={isVisibled}
      onClose={onClose}
      title="Add Debit/Credit Card"
      minHeight={640}
      className="addCardBottomSheet"
      onSave={onSave}
    >
      <Box>
        <Input
          label="Card Number"
          variant="standard"
          sx={{ mt: "16px" }}
          endInput={renderCardIcon()}
        />
      </Box>
      <Box sx={{ mt: "12px" }}>
        <img src={Images.masterCard} alt="" />
        <img src={Images.visa} alt="" />
      </Box>

      <Box sx={{ ...RootStyles.rowBetween, mt: "16px" }}>
        <Input label="Expiry (MM/YY)" variant="standard" />
        <Input label="CVC" variant="standard" endInput={renderCardIcon()} />
      </Box>

      <CheckBox
        label="Billing Postcode same as Shipping Postcode"
        isChecked={true}
        className="addCardBottomSheet__checkBox"
      />

      <Input label="Card Postcode" variant="standard" />
    </BottomSheet>
  );
};
