import React, { useState } from "react";
import { Images, Icons, RootStyles } from "../../utils";
import "./styles.scss";
import { Button, Input } from "../../components";
import { Box } from "@mui/material";
import {
  AddPaymentBottomSheet,
  AddressBottomSheet,
  CourierBottomSheet,
  RowInfo,
  Summary,
} from "./components";
import {
  addressListData,
  cardList,
  courierList,
  mockAddressData,
  orderSummaryData,
} from "./Payment.data";
import { OtpModal } from "../../components/OtpModal";
import { AddressModal } from "./components/AddressModal/AddressModal";
import { useFormik } from "formik";
import {
  initialValues,
  validationSchema,
  fieldPlaceholders,
  fieldNames,
} from "./Payment.data";

const PHONE_OTP = "PHONE_MODAL";
const EMAIL_OTP = "EMAIL_OTP";
const ADDRESS_MODAL = "ADDRESS_MODAL";
const ADDRESS_BOTTOM_SHEET = "ADDRESS_BOTTOM_SHEET";
const COURIER_BOTTOM_SHEET = "COURIER_BOTTOM_SHEET";
const ADD_PAYMENT_BOTTOM_SHEET = "ADD_PAYMENT_BOTTOM_SHEET";

export default function Payment() {
  const [isPhoneModal, setIsPhoneModal] = useState(false);
  const [isEmailModal, setIsEmailModal] = useState(false);
  const [isAddressModal, setIsAddressModal] = useState(false);
  const [isAddressBottomSheet, setIsAddressBottomSheet] = useState(false);
  const [isCourierBottomSheet, setIsCourierBottomSheet] = useState(false);
  const [isAddPaymentBottomSheet, setIsAddPaymentBottomSheet] = useState(false);

  const formik = useFormik({ initialValues, validationSchema });

  const renderStartPhoneInput = () => {
    return (
      <Box sx={{ ...RootStyles.row, mb: "5px" }}>
        <img src={Images.flat} width={24} height={24} alt="" />
        <img src={Icons.chevronDown} width={18} height={18} alt="" />
      </Box>
    );
  };

  const renderShippingAddress = () => {
    return (
      <Box sx={{ ...RootStyles.row, mb: "5px" }}>
        <img src={Images.flat} width={24} height={24} alt="" />
        <img src={Icons.chevronDown} width={18} height={18} alt="" />
      </Box>
    );
  };

  const handleClose = (type) => {
    type === PHONE_OTP && setIsPhoneModal(false);
    type === EMAIL_OTP && setIsEmailModal(false);
    type === ADDRESS_MODAL && setIsAddressModal(false);
    type === ADDRESS_BOTTOM_SHEET && setIsAddressBottomSheet(false);
    type === COURIER_BOTTOM_SHEET && setIsCourierBottomSheet(false);
    type === ADD_PAYMENT_BOTTOM_SHEET && setIsAddPaymentBottomSheet(false);
  };

  const handleChangePhone = (e) => {
    if (e.target.value.length === 11) {
      setTimeout(() => {
        setIsPhoneModal(true);
      }, 1000);
    }
    formik.handleChange(e);
  };

  return (
    <div className="payment">
      <div className="payment__shopContainer">
        <div className="payment__shopContainer-left">
          <img src={Images.bodyShopIcon} alt="" width={24} height={24} />
          <p className="payment__shopContainer-left-title">THE BODY SHOP</p>
        </div>
        <div className="payment__shopContainer-right">
          <p className="payment__shopContainer-right-title">Rp 270.600</p>
          <img src={Icons.chevronDown} alt="" width={24} height={24} />
        </div>
      </div>

      <div className="payment__formInfor">
        <Input
          id="standard-basic"
          label={fieldPlaceholders.phone}
          variant="standard"
          type="phone"
          startInput={renderStartPhoneInput()}
          name={fieldNames.phone}
          onChange={handleChangePhone}
          value={formik.values.phone}
        />
        {formik.values.phone && (
          <Input
            id="standard-basic"
            label="Email"
            variant="standard"
            inputClass="payment__mt-16"
            sx={{ mt: "16px" }}
          />
        )}
        {formik.values.email && (
          <Box sx={{ mt: "16px", ...RootStyles.rowBetween }}>
            <Input
              id="standard-basic"
              label="First Name"
              variant="standard"
              className={{}}
            />
            <Input id="standard-basic" label="Last Name" variant="standard" />
          </Box>
        )}
        <RowInfo label="Shipping Address" sx={{ mt: "16px" }} />
        {/* <Input
          id="standard-basic"
          label="Shipping Address"
          variant="standard"
          sx={{ mt: "16px" }}
          startInput={renderShippingAddress()}
        /> */}
        {/* <RowInfo
          label="Address"
          data={mockAddressData}
          isEdit
          sx={{ mt: "16px" }}
        /> */}
        <RowInfo label="Courier" isChoose sx={{ mt: "16px" }} />
        <RowInfo label="Payment" sx={{ mt: "16px" }} />
      </div>

      <div className="payment__orderSummary">
        <Summary data={orderSummaryData} />
      </div>

      <div className="payment__confirmButtonContainer">
        <Button
          isPrimary
          fullWidth
          className="payment__confirmButtonContainer-button"
          startIcon={
            <img
              src={Icons.lock}
              width={18}
              height={18}
              alt=""
              style={{ marginBottom: 2 }}
            />
          }
          buttonClassName="payment__confirmButtonContainer-buttonItem"
        >
          Confirm & Pay
        </Button>
        <div className="payment__confirmButtonContainer-info">
          <p>
            By clicking the button above, you agreeFlik's{" "}
            <a href="$">Terms & Conditions</a> and{" "}
            <a href="$">Privacy Policy</a>
          </p>
        </div>
      </div>

      <OtpModal
        isVisibled={isPhoneModal}
        onClose={() => handleClose(PHONE_OTP)}
      />

      <OtpModal
        isVisibled={isEmailModal}
        onClose={() => handleClose(EMAIL_OTP)}
      />

      <AddressModal
        isVisibled={isAddressModal}
        data={addressListData}
        onClose={() => handleClose(ADDRESS_MODAL)}
      />

      <AddressBottomSheet
        isVisibled={isAddressBottomSheet}
        onClose={() => handleClose(ADDRESS_BOTTOM_SHEET)}
      />

      <CourierBottomSheet
        isVisibled={isCourierBottomSheet}
        onClose={() => handleClose(COURIER_BOTTOM_SHEET)}
        courierList={courierList}
      />

      <AddPaymentBottomSheet
        isVisibled={isAddPaymentBottomSheet}
        onClose={() => handleClose(ADD_PAYMENT_BOTTOM_SHEET)}
        data={cardList}
      />
    </div>
  );
}
