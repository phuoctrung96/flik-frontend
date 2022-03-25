/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@mui/material";
import { useFormik } from "formik";
import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, CheckBox, Input, InputMask, Loading } from "../../components";
import { OtpModal } from "../../components/OtpModal";
import { MainRoute } from "../../router/constants";
import { Icons, Images, LibraryIcons, RootStyles } from "../../utils";
import {
  AddCardBottomSheet,
  AddressModal,
  CourierItem,
  RowInfo,
  Summary,
} from "./components";
import { PaymentItem } from "./components/PaymentItem";
import {
  cardList,
  cityList as cityListData,
  courierList,
  fieldNames,
  initialValues,
  orderSummaryData,
  paymentMethodList,
  postalCodeList as postalCodeListData,
  provinceList as provinceListData,
  validationSchema,
} from "./Payment.data";
import "./styles.scss";
import {
  generateCart,
  generateTokenWithOTP,
  getCartData,
  requestOTP,
  updateCartItem,
  verifyToken,
} from "../../utils/ApiManage";
import { checkObjectEmpty } from "../../utils/Helpers";
import AuthHelper from "../../utils/AuthHelpers";

const PHONE_OTP = "PHONE_MODAL";
const EMAIL_OTP = "EMAIL_OTP";
const PROVINCE_MODAL = "PROVINCE_MODAL";
const CITY_MODAL = "CITY_MODAL";
const POSTAL_CODE_MODAL = "POSTAL_CODE_MODAL";
const ADD_CARD_BOTTOM_SHEET = "ADD_CARD_BOTTOM_SHEET";

export default function Payment() {
  const search = useLocation().search;

  const [isPhoneModal, setIsPhoneModal] = useState(false);
  const [isEmailModal, setIsEmailModal] = useState(false);
  const [isAddCardBottomSheet, setIsAddCardBottomSheet] = useState(false);
  const [isEditOtherSummary, setIsEditOtherSummary] = useState(false);
  const [isSplashScreen, setIsSplashScreen] = useState(true);
  const [isChoosePayment, setIsChoosePayment] = useState(false);
  const [isChooseCourier, setIsChooseCourier] = useState(false);

  const [isProvinceModal, setIsProvinceModal] = useState(false);
  const [isCityModal, setIsCityModal] = useState(false);
  const [isPostalCodeModal, setIsPostalCodeModal] = useState(false);
  const [courierSelected, setCourierSelected] = useState({});
  const [paymentMethodSelected, setPaymentMethodSelected] = useState({});

  const [couriers, setCouriers] = useState(courierList);
  const [paymentMethods, setPaymentMethods] = useState(cardList);

  const [isVerifyToken, setIsVerifyToken] = useState(false);

  const [accessToken, setAccessToken] = useState(AuthHelper.getAccessToken());

  const [appId, setAppId] = useState(new URLSearchParams(search).get("app_id"));
  const [passedData, setPassedData] = useState(
    JSON.parse(decodeURIComponent(new URLSearchParams(search).get("body")))
  );

  const [provinceList, setProvinceList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [postalCodeList, setPostalCodeList] = useState([]);

  const [isShipToMe, setIsShipToMe] = useState(true);

  const [cartDetail, setCartDetail] = useState({});

  const navigation = useNavigate();

  const formik = useFormik({ initialValues, validationSchema });

  const [merchantCartId, setMerchantCartId] = useState(
    "746977d6-3909-42a9-93bd-ea1ab46e44aa"
  );

  const handleClose = (type) => {
    type === PHONE_OTP && setIsPhoneModal(false);
    type === EMAIL_OTP && setIsEmailModal(false);
    type === ADD_CARD_BOTTOM_SHEET && setIsAddCardBottomSheet(false);
    type === PROVINCE_MODAL && setIsProvinceModal(false);
    type === CITY_MODAL && setIsCityModal(false);
    type === POSTAL_CODE_MODAL && setIsPostalCodeModal(false);
    type === ADD_CARD_BOTTOM_SHEET && setIsAddCardBottomSheet(false);
  };

  const handleChangePhone = (e) => {
    formik.handleChange(e);
  };

  const handleChangeEmail = (e) => {
    formik.handleChange(e);
  };

  const handleChangeOTPPhone = (e) => {
    const otp = e.reduce((prev, next) => prev + "" + next);
    if (otp.length === 6) {
      formik.setFieldValue(fieldNames.phoneOtp, otp);

      formik.setValues({
        ...formik.values,
        email: "shopper1@gmail.com",
        firstName: "Tung",
        lastName: "Le",
        shippingAddress: "123 Test Test",
      });
      
      navigation(MainRoute.Order, {
        state: { data: formik.values, passedData },
      });

      // otp = 389477
      generateTokenWithOTP({
        app_id: "601886d6-44f5-3112-92b4-be1d89fb0f2b",
        email: "shopper1@gmail.com",
        phone: "+6282110075629",
        device_id: "testdevice",
        otp: otp,
      })
        .then((result) => {
          // const res = JSON.parse(result);
          AuthHelper.storeAccessToken(result.data.access_token);
          AuthHelper.storeRefreshToken(result.data.refresh_token);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsPhoneModal(false);
        });
    }
  };

  const handleGenerateCart = () => {
    generateCart(appId)
      .then((res) => {
        console.log("res generate cart => ", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleBlurPhone = () => {
    if (!isVerifyToken && !!!formik.errors.phone && formik.values.phone) {
      setIsPhoneModal(true);
      requestOTP({
        app_id: "601886d6-44f5-3112-92b4-be1d89fb0f2b",
        email: "shopper1@gmail.com",
        phone: "+6282110075629",
        device_id: "testdevice",
      })
        .then((result) => {})
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleBlurEmail = () => {
    if (!isVerifyToken && !formik.errors.email) {
      setIsEmailModal(true);
      requestOTP({
        app_id: "601886d6-44f5-3112-92b4-be1d89fb0f2b",
        email: "shopper1@gmail.com",
        phone: "+6282110075629",
        device_id: "testdevice",
      })
        .then((result) => {})
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
      generateTokenWithOTP({
        app_id: "601886d6-44f5-3112-92b4-be1d89fb0f2b",
        email: "shopper1@gmail.com",
        phone: "+6282110075629",
        device_id: "testdevice",
        otp: otp,
      })
        .then((result) => {
          AuthHelper.storeAccessToken(result.data.access_token);
          AuthHelper.storeRefreshToken(result.data.refresh_token);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsEmailModal(false);
        });
    }
  };

  const handleActiveClickPaymentCard = (item) => {
    // setIsAddPaymentBottomSheet(false);
    setIsAddCardBottomSheet(true);
  };

  const handleOnSaveCardBottomSheet = () => {
    setIsAddCardBottomSheet(false);
    formik.setFieldValue(fieldNames.payment, true);
  };

  const handleConfirmAndPay = () => {
    navigation(MainRoute.Order, { state: { passedData } });
  };

  const handleEditSummary = () => {
    setIsEditOtherSummary(true);
  };

  //Item in modal province click after save
  const handleOnProvinceSaveClick = (itemSelected, newData) => {
    formik.setFieldValue(fieldNames.province, itemSelected.title);
    setProvinceList(newData);
    setIsProvinceModal(false);
  };

  //Item in modal city click after save
  const handleOnCitySaveClick = (itemSelected, newData) => {
    formik.setFieldValue(fieldNames.city, itemSelected.title);
    setCityList(newData);
    setIsCityModal(false);
  };

  //Item in modal postalCode click after save
  const handleOnPostalCodeSaveClick = (itemSelected, newData) => {
    formik.setFieldValue(fieldNames.postalCode, itemSelected.title);
    setPostalCodeList(newData);
    setIsPostalCodeModal(false);
  };

  //Courier Item Click Function
  const handleCardItemClick = (item) => {
    // courierLi
  };

  const handleOnClickCourierItem = (item) => {
    setCourierSelected({ ...item, isChecked: true });
  };

  const verifyAccessToken = () => {
    verifyToken({ access_token: accessToken })
      .then((result) => {
        // const newResult = JSON.parse(result);
        console.log(result);
        if (result.status === "Success") {
          setIsVerifyToken(true);
        } else {
          setIsVerifyToken(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCartWithMerchantCartId = async () => {
    try {
      const appId = "601886d6-44f5-3112-92b4-be1d89fb0f2b";
      const res = await getCartData(appId, merchantCartId);

      if (res.status === "success") {
        setCartDetail(res.data);
      }

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnIncreaseCartItem = async (item) => {
    try {
      const appId = "601886d6-44f5-3112-92b4-be1d89fb0f2b";
      const res = await updateCartItem(appId, { item, qty: item.qty + 1 });
      await getCartData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnDecreaseCartItem = async (item) => {
    try {
      if (item.qty === 0) return;
      const appId = "601886d6-44f5-3112-92b4-be1d89fb0f2b";
      const res = await updateCartItem(appId, { item, qty: item.qty - 1 });
      await getCartData();
    } catch (error) {
      console.log(error);
    }
  };

  useState(() => {
    setTimeout(() => {
      setIsSplashScreen(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setCityList(cityListData);
    setProvinceList(provinceListData);
    setPostalCodeList(postalCodeListData);
  }, []);

  useEffect(() => {
    if (accessToken) {
      setIsVerifyToken(true);
      verifyAccessToken();
    } else {
      setIsVerifyToken(false);
    }
  }, []);

  useEffect(() => {
    // getCartWithMerchantCartId();
    handleGenerateCart();
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
                {/* <img src={Icons.chevronDown} alt="" width={24} height={24} /> */}
              </div>
            </div>

            <div className="payment__formInfor">
              <div className="payment__formInfor-personal">
                <Box className="custom-input">
                  <Box sx={{ ...RootStyles.row }}>
                    <img src={Images.flat} width={24} height={24} alt="" />
                    <img
                      src={Icons.chevronDown}
                      width={18}
                      height={18}
                      alt=""
                    />
                  </Box>
                  <Input
                    label="Phone Number"
                    type="phone"
                    name={fieldNames.phone}
                    onChange={handleChangePhone}
                    onBlur={handleBlurPhone}
                    value={formik.values.phone}
                    placeholder="0821 2345 6789"
                    inputComponent={InputMask}
                  />
                </Box>
                <Input
                  label="Email"
                  inputClass="payment__mt-16"
                  sx={{ mt: "8px" }}
                  name={fieldNames.email}
                  onChange={handleChangeEmail}
                  onBlur={handleBlurEmail}
                  value={formik.values.email}
                />

                <Box sx={{ mt: "8px", ...RootStyles.rowBetween }}>
                  <Input
                    label="First Name"
                    name={fieldNames.firstName}
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    className="payment__mr-8"
                    containerStyle={{ flex: 0.5 }}
                  />
                  <Input
                    label="Last Name"
                    name={fieldNames.lastName}
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    containerStyle={{ flex: 0.5 }}
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

                <Box className="custom-input">
                  <Box sx={{ ...RootStyles.row }}>
                    <img src={Images.flat} width={24} height={24} alt="" />
                    <img
                      src={Icons.chevronDown}
                      width={18}
                      height={18}
                      alt=""
                    />
                  </Box>
                  <Input
                    label="Shipping Address"
                    type="text"
                    name={fieldNames.shippingAddress}
                    onChange={formik.handleChange}
                    value={formik.values.shippingAddress}
                    placeholder="Shipping Address"
                  />
                </Box>

                {!!formik.values.shippingAddress && (
                  <Input
                    label="Apartment, Unit, Floor, etc. (Optional)"
                    containerStyle={{ marginTop: 8 }}
                  />
                )}

                {!!formik.values.shippingAddress && (
                  <Box sx={{ flex: 1, ...RootStyles.rowBetween, mt: "8px" }}>
                    <Input
                      label="Province"
                      containerStyle={{ flex: 0.32 }}
                      onClick={() => setIsProvinceModal(true)}
                      endInput={<LibraryIcons.ArrowDropDownIcon />}
                      name={fieldNames.province}
                      value={formik.values.province}
                      readOnly
                    />
                    <Input
                      label="City"
                      containerStyle={{ flex: 0.32 }}
                      onClick={() => setIsCityModal(true)}
                      endInput={<LibraryIcons.ArrowDropDownIcon />}
                      readOnly
                      name={fieldNames.city}
                      value={formik.values.city}
                    />
                    <Input
                      label="Postal Code"
                      containerStyle={{ flex: 0.32 }}
                      onClick={() => setIsPostalCodeModal(true)}
                      endInput={<LibraryIcons.ArrowDropDownIcon />}
                      readOnly
                      name={fieldNames.postalCode}
                      value={formik.values.postalCode}
                    />
                  </Box>
                )}
              </div>

              <div className="payment__formInfor-courier">
                <RowInfo
                  label="Courier"
                  buttonText={
                    formik.values.shippingAddress ? "Choose Courier" : ""
                  }
                  onButtonClick={() => {
                    setIsChooseCourier(true);
                    setCourierSelected({});
                    setCouriers(courierList);
                  }}
                />

                {!isChooseCourier && (
                  <p className="payment__formInfor-courier-defaultText">
                    AnterAja, GoSend, Grab, JNE, J&T, SiCepat, Ninja, Lion ...
                  </p>
                )}

                {isChooseCourier && (
                  <Box>
                    {(Object.keys(courierSelected).length > 0
                      ? [courierSelected]
                      : couriers
                    )?.map((item) => (
                      <CourierItem
                        data={item}
                        key={item.id}
                        onClick={() => handleOnClickCourierItem(item)}
                      />
                    ))}
                  </Box>
                )}
              </div>

              <div className="payment__formInfor-payment">
                <RowInfo
                  label="Payment"
                  buttonText={
                    !checkObjectEmpty(courierSelected) && "Choose Payment"
                  }
                  onButtonClick={() => setIsChoosePayment(true)}
                />

                {!isChoosePayment && (
                  <p className="payment__formInfor-payment-defaultText">
                    Virtual Account, Credit Card, GoPay, OVO, ShopeePay ...
                  </p>
                )}

                {isChoosePayment &&
                  paymentMethodList.map((item) => (
                    <Box key={item.id} sx={{ mb: "32px" }}>
                      <p className="payment__formInfor-payment-title">
                        {item.title}
                      </p>
                      {item.children.map((paymentItem) =>
                        paymentItem.isActivated ? (
                          <CourierItem
                            data={paymentItem}
                            key={paymentItem.id}
                            onClick={() => handleCardItemClick(paymentItem)}
                          />
                        ) : (
                          <PaymentItem
                            key={paymentItem.id}
                            data={paymentItem}
                            onActiveClick={() =>
                              handleActiveClickPaymentCard(paymentItem)
                            }
                          />
                        )
                      )}
                    </Box>
                  ))}
              </div>
            </div>

            <div className="payment__orderSummary">
              <Summary
                isEdit={isEditOtherSummary}
                data={[passedData]}
                onEditClick={handleEditSummary}
                onIncreaseItem={handleOnIncreaseCartItem}
                onDecreaseItem={handleOnDecreaseCartItem}
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

          {/* Province Modal */}
          <AddressModal
            data={provinceList}
            isVisibled={isProvinceModal}
            searchPlaceholder="Search Province"
            onClose={() => setIsProvinceModal(false)}
            onSaveClick={handleOnProvinceSaveClick}
          />

          {/* City Modal */}
          <AddressModal
            data={cityList}
            isVisibled={isCityModal}
            searchPlaceholder="Search City"
            onClose={() => setIsCityModal(false)}
            onSaveClick={handleOnCitySaveClick}
          />

          {/* Postal Code Modal */}
          <AddressModal
            data={postalCodeList}
            isVisibled={isPostalCodeModal}
            searchPlaceholder="Search Postal Code"
            onClose={() => setIsPostalCodeModal(false)}
            onSaveClick={handleOnPostalCodeSaveClick}
          />

          <AddCardBottomSheet
            isVisibled={isAddCardBottomSheet}
            onClose={() => handleClose(ADD_CARD_BOTTOM_SHEET)}
            onSaveClick={handleOnSaveCardBottomSheet}
            formik={formik}
          />
        </div>
      )}
    </>
  );
}
