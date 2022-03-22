import { Box } from "@mui/material";
import React from "react";
import { Button, Input, InputMask, Modal } from "../../../../components";
import { Icons, Images, RootStyles } from "../../../../utils";
import { fieldNames, fieldPlaceholders } from "../../Payment.data";
import "./styles.scss";

export const AddCardBottomSheet = ({
  isVisibled,
  onClose,
  formik,
  onSaveClick,
}) => {
  const renderCardIcon = () => (
    <Box sx={{ mb: "5px" }}>
      <img src={Icons.card} width={23} height={16} alt="" />
    </Box>
  );

  return (
    <Modal
      isVisibled={isVisibled}
      onClose={onClose}
      title="Add Debit/Credit Card"
      className="addCardBottomSheet"
      fullScreen
      isBack
    >
      <Box className="addCardBottomSheet__container">
        <p className="addCardBottomSheet__container-title">
          Add Debit/Credit Card
        </p>
        <Box>
          <Input
            label="Card Number"
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

        <Box sx={{ ...RootStyles.rowBetween, mt: "16px", flex: 1 }}>
          <Input
            label="Expiry (MM/YY)"
            inputComponent={InputMask}
            name={fieldNames.cardExpiry}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cardExpiry}
            inputProps={{
              mask: "#0/00",
              definitions: { "#": /[0-9]/ },
            }}
            containerStyle={{ flex: 0.48 }}
          />
          <Input
            label="CVC"
            endInput={renderCardIcon()}
            inputComponent={InputMask}
            name={fieldNames.cardCVC}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cardCVC}
            inputProps={{
              mask: "#00",
            }}
            containerStyle={{ flex: 0.48 }}
          />
        </Box>
      </Box>

      <div className="addCardBottomSheet__buttonContainer">
        <Button
          isPrimary
          buttonClassName="addCardBottomSheet__buttonContainer-button"
          onClick={onSaveClick}
        >
          Save
        </Button>
      </div>
    </Modal>
  );
};
