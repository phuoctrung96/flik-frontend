import { Box } from "@mui/material";
import React, { useState } from "react";
import {
  BottomSheet,
  CheckBox,
  Input,
  InputMask,
} from "../../../../components";
import { Icons, Images, RootStyles } from "../../../../utils";
import { fieldNames, fieldPlaceholders } from "../../Payment.data";
import "./styles.scss";

export const AddCardBottomSheet = ({
  isVisibled,
  onClose,
  onSave,
  formik,
  data,
  onClick,
}) => {
  const [isBillingChecked, setIsBillingChecked] = useState(false);

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
          inputComponent={InputMask}
          name={fieldNames.cardNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cardNumber}
          placeholder={fieldPlaceholders.cardNumber}
          inputProps={{
            mask: "#000 0000 0000 0000",
          }}
        />
      </Box>
      <Box sx={{ mt: "12px" }}>
        <img src={Images.masterCard} alt="" />
        <img src={Images.visa} alt="" />
      </Box>

      <Box sx={{ ...RootStyles.rowBetween, mt: "16px" }}>
        <Input
          label="Expiry (MM/YY)"
          variant="standard"
          inputComponent={InputMask}
          name={fieldNames.cardExpiry}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cardExpiry}
          placeholder={fieldPlaceholders.cardExpiry}
          inputProps={{
            mask: "#0/00",
          }}
        />
        <Input
          label="CVC"
          variant="standard"
          endInput={renderCardIcon()}
          inputComponent={InputMask}
          name={fieldNames.cardCVC}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cardCVC}
          placeholder={fieldPlaceholders.cardCVC}
          inputProps={{
            mask: "#00",
          }}
        />
      </Box>

      <CheckBox
        label="Billing Postcode same as Shipping Postcode"
        isChecked={isBillingChecked}
        className="addCardBottomSheet__checkBox"
        onChange={(value) => setIsBillingChecked(value)}
      />

      {!isBillingChecked && (
        <Input
          label="Card Postcode"
          variant="standard"
          inputComponent={InputMask}
          name={fieldNames.cardPostCode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cardPostCode}
          placeholder={fieldPlaceholders.cardPostCode}
          inputProps={{
            mask: "#0000",
          }}
        />
      )}
    </BottomSheet>
  );
};
