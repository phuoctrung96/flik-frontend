/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@mui/material";
import { useFormik } from "formik";
import { debounce } from "lodash";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, CheckBox, Input, InputMask, Loading } from "../../components";
import { OtpModal } from "../../components/OtpModal";
import { MainRoute } from "../../router/constants";
import { Icons, Images, RootStyles } from "../../utils";
import {
  AddCardBottomSheet,
  CourierItem,
  RowInfo,
  Summary,
} from "./components";
import { PaymentItem } from "./components/PaymentItem";
import {
  cardList,
  cardListActivated,
  courierList,
  fieldNames,
  fieldPlaceholders,
  initialValues,
  orderSummaryData,
  validationSchema,
} from "./Payment.data";
import "./styles.scss";
import { requestOTP, verifyToken } from "../../utils/ApiManage";

const PHONE_OTP = "PHONE_MODAL";
const EMAIL_OTP = "EMAIL_OTP";
const ADDRESS_MODAL = "ADDRESS_MODAL";
const ADDRESS_BOTTOM_SHEET = "ADDRESS_BOTTOM_SHEET";
const COURIER_BOTTOM_SHEET = "COURIER_BOTTOM_SHEET";
const ADD_PAYMENT_BOTTOM_SHEET = "ADD_PAYMENT_BOTTOM_SHEET";
const ADD_CARD_BOTTOM_SHEET = "ADD_CARD_BOTTOM_SHEET";

export default function Payment() {
  const [isPhoneModal, setIsPhoneModal] = useState(false);
  const [isEmailModal, setIsEmailModal] = useState(false);
  const [isAddressModal, setIsAddressModal] = useState(false);
  const [isAddressBottomSheet, setIsAddressBottomSheet] = useState(false);
  const [isCourierBottomSheet, setIsCourierBottomSheet] = useState(false);
  const [isAddPaymentBottomSheet, setIsAddPaymentBottomSheet] = useState(false);
  const [isAddCardBottomSheet, setIsAddCardBottomSheet] = useState(false);
  const [isEditOtherSummary, setIsEditOtherSummary] = useState(false);
  const [isSplashScreen, setIsSplashScreen] = useState(true);
  const [isChoosePayment, setIsChoosePayment] = useState(false);
  const [isChooseCourier, setIsChooseCourier] = useState(false);

  const [isShipToMe, setIsShipToMe] = useState(true);

  const navigation = useNavigate();

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
    type === ADD_CARD_BOTTOM_SHEET && setIsAddCardBottomSheet(false);
  };

  const handleChangePhone = (e) => {
    formik.handleChange(e);

    // updateModal(e.target.value, () => setIsPhoneModal(true));
  };

  const updateModal = useCallback(
    debounce((text, cb) => text && cb(), 500),
    []
  );

  const handleChangeEmail = (e) => {
    formik.handleChange(e);
    // if (!formik.errors.email) {
    //   updateModal(e.target.value, () => setIsEmailModal(true));
    // }
  };

  const handleChangeOTPPhone = (e) => {
    const otp = e.reduce((prev, next) => prev + "" + next);
    if (otp.length === 6) {
      formik.setFieldValue(fieldNames.phoneOtp, otp);
      // otp = 696062
      verifyToken({
        app_id: "601886d6-44f5-3112-92b4-be1d89fb0f2b",
        email: "shopper1@gmail.com",
        phone: "+6282110075629",
        device_id: "testdevice",
        otp: otp,
      })
        .then((result) => {
          console.log(result);
          setIsPhoneModal(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleBlurPhone = () => {
    setIsPhoneModal(true);
    if (!!!formik.errors.phone) {
      requestOTP({
        app_id: "601886d6-44f5-3112-92b4-be1d89fb0f2b",
        email: "shopper1@gmail.com",
        phone: "+6282110075629",
        device_id: "testdevice",
      })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleBlurEmail = () => {
    if (!formik.errors.email) {
      setIsEmailModal(true);
      requestOTP({
        app_id: "601886d6-44f5-3112-92b4-be1d89fb0f2b",
        email: "shopper1@gmail.com",
        phone: "+6282110075629",
        device_id: "testdevice",
      })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleChangeOTPEmail = (e) => {
    const otp = e.reduce((prev, next) => prev + "" + next);
    if (otp.length === 6) {
      formik.setFieldValue(fieldNames.emailOtp, otp);
      // otp = 696062
      verifyToken({
        app_id: "601886d6-44f5-3112-92b4-be1d89fb0f2b",
        email: "shopper1@gmail.com",
        phone: "+6282110075629",
        device_id: "testdevice",
        otp: otp,
      })
        .then((result) => {
          console.log(result);
          setIsEmailModal(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleClickAddressModalItem = (item) => {
    setIsAddressModal(false);

    setTimeout(() => {
      formik.setFieldValue(
        fieldNames.shippingAddress,
        item.title + ", " + item.address
      );
      setIsAddressBottomSheet(true);
    }, 500);
  };

  const handleSaveAddressModal = () => {
    setIsAddressBottomSheet(false);
  };

  const handleOnSaveCourierBottomSheet = () => {
    formik.setFieldValue(fieldNames.courier, true);
    setIsCourierBottomSheet(false);
  };

  const handleActiveClickPaymentCard = (item) => {
    setIsAddPaymentBottomSheet(false);
    setIsAddCardBottomSheet(true);
  };

  const handleOnSaveCardBottomSheet = () => {
    setIsAddCardBottomSheet(false);
    formik.setFieldValue(fieldNames.payment, true);
  };

  const handleConfirmAndPay = () => {
    navigation(MainRoute.CheckoutConfirm);
  };

  const handleEditSummary = () => {
    setIsEditOtherSummary(true);
  };

  useState(() => {
    setTimeout(() => {
      setIsSplashScreen(false);
    }, 2000);
  }, []);

  return (
    <>
      {isSplashScreen ? (
        <Loading />
      ) : (
        <div className="payment">
          <div className="payment__container">
            <div className="payment__shopContainer">
              <div className="payment__shopContainer-left">
                <img src={Images.bodyShopIcon} alt="" width={24} height={24} />
                <p className="payment__shopContainer-left-title">
                  THE BODY SHOP
                </p>
              </div>
              <div className="payment__shopContainer-right">
                <img src={Icons.shoppingCart} width={16} height={16} alt="" />
                <p className="payment__shopContainer-right-title">Rp 270.600</p>
                <img src={Icons.chevronDown} alt="" width={24} height={24} />
              </div>
            </div>

            <div className="payment__formInfor">
              <div className="payment__formInfor-personal">
                <Input
                  label={fieldPlaceholders.phone}
                  type="phone"
                  startInput={renderStartPhoneInput()}
                  name={fieldNames.phone}
                  onChange={handleChangePhone}
                  onBlur={handleBlurPhone}
                  value={formik.values.phone}
                  placeholder={fieldPlaceholders.phone}
                  inputComponent={InputMask}
                />
                <Input
                  label="Email"
                  inputClass="payment__mt-16"
                  sx={{ mt: "16px" }}
                  name={fieldNames.email}
                  onChange={handleChangeEmail}
                  onBlur={handleBlurEmail}
                  value={formik.values.email}
                />

                <Box sx={{ mt: "16px", ...RootStyles.rowBetween }}>
                  <Input
                    label="First Name"
                    name={fieldNames.firstName}
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    className="payment__mr-5"
                  />
                  <Input
                    label="Last Name"
                    name={fieldNames.lastName}
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                  />
                </Box>
              </div>

              <div className="payment__formInfor-shippingAddress">
                <Box sx={{ ...RootStyles.rowBetween }}>
                  <p className="payment__formInfor-shippingAddress-title">
                    Shipping Address
                  </p>
                  <CheckBox
                    isLabelFirst
                    label="Ship to me"
                    onChange={setIsShipToMe}
                    isChecked={isShipToMe}
                  />
                </Box>

                {!isShipToMe && (
                  <Box sx={{ flex: 1, ...RootStyles.rowBetween, mb: "8px" }}>
                    <Input
                      label="Recipient's Name"
                      containerStyle={{ flex: 0.49 }}
                    />
                    <Input
                      label="Phone Number"
                      containerStyle={{ flex: 0.49 }}
                    />
                  </Box>
                )}

                <Input
                  label={fieldPlaceholders.shippingAddress}
                  type="text"
                  startInput={renderShippingAddress()}
                  name={fieldNames.shippingAddress}
                  onChange={formik.handleChange}
                  value={formik.values.shippingAddress}
                  placeholder={fieldPlaceholders.shippingAddress}
                />

                {!!formik.values.shippingAddress && (
                  <Input
                    label="Apartment, Unit, Floor, etc. (Optional)"
                    containerStyle={{ marginTop: 8 }}
                  />
                )}

                {!!formik.values.shippingAddress && (
                  <Box sx={{ flex: 1, ...RootStyles.rowBetween, mt: "8px" }}>
                    <Input label="City" containerStyle={{ flex: 0.32 }} />
                    <Input label="Province" containerStyle={{ flex: 0.32 }} />
                    <Input
                      label="Postal Code"
                      containerStyle={{ flex: 0.32 }}
                    />
                  </Box>
                )}
              </div>

              <div className="payment__formInfor-courier">
                <RowInfo
                  label="Courier"
                  buttonText="Choose Courier"
                  sx={{ mt: "16px" }}
                  onButtonClick={() => setIsChooseCourier(true)}
                />

                {isChooseCourier && (
                  <Box>
                    {courierList?.map((item) => (
                      <CourierItem data={item} key={item.id} />
                    ))}
                  </Box>
                )}
              </div>

              <div className="payment__formInfor-courier">
                <RowInfo
                  label="Payment"
                  buttonText="Choose Payment"
                  sx={{ mt: "16px" }}
                  onButtonClick={() => setIsChoosePayment(true)}
                />

                {isChoosePayment && (
                  <Box sx={{ mb: "32px" }}>
                    {cardListActivated.map((item) => (
                      <CourierItem data={item} key={item.id} />
                    ))}
                  </Box>
                )}

                {isChoosePayment &&
                  cardList.map((item) => (
                    <PaymentItem
                      key={item.id}
                      data={item}
                      onActiveClick={() => handleActiveClickPaymentCard(item)}
                    />
                  ))}
              </div>
            </div>

            <div className="payment__orderSummary">
              <Summary
                isEdit={isEditOtherSummary}
                data={orderSummaryData}
                onEditClick={handleEditSummary}
              />
            </div>
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
              onClick={handleConfirmAndPay}
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
            onChange={handleChangeOTPPhone}
            value={formik.values.phone}
          />
          <OtpModal
            isVisibled={isEmailModal}
            onClose={() => handleClose(EMAIL_OTP)}
            onChange={handleChangeOTPEmail}
            label="email"
            value={formik.values.email}
          />
          {/* /* <AddressModal
            isVisibled={isAddressModal}
            data={addressListData}
            onClose={() => handleClose(ADDRESS_MODAL)}
            onClick={handleClickAddressModalItem}
          />

          <AddressBottomSheet
            isVisibled={isAddressBottomSheet}
            onClose={() => handleClose(ADDRESS_BOTTOM_SHEET)}
            form={formik}
            onSave={handleSaveAddressModal}
          />

          <CourierBottomSheet
            isVisibled={isCourierBottomSheet}
            onClose={() => handleClose(COURIER_BOTTOM_SHEET)}
            courierList={courierList}
            onSave={handleOnSaveCourierBottomSheet}
          /> */}
          {/* <AddPaymentBottomSheet
            isVisibled={isAddPaymentBottomSheet}
            onClose={() => handleClose(ADD_PAYMENT_BOTTOM_SHEET)}
            data={cardList}
            onSave={() => {}}
            onActiveClick={handleActiveClickPaymentCard}
          /> */}
          <AddCardBottomSheet
            isVisibled={isAddCardBottomSheet}
            onClose={() => handleClose(ADD_CARD_BOTTOM_SHEET)}
            onSave={handleOnSaveCardBottomSheet}
            formik={formik}
          />
        </div>
      )}
    </>
  );
}
