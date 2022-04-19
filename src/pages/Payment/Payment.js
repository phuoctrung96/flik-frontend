/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as _ from '../../redux/actions';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Loading } from '../../components';
import { OtpModal } from '../../components/OtpModal';
import { MainRoute } from '../../router/constants';
import { Icons, Images } from '../../utils';
import {
  AddCardBottomSheet,
  CourierItem,
  RowInfo,
  Summary,
  FormUserData,
  FormUserAddress,
} from './components';
import { PaymentItem } from './components/PaymentItem';
import {
  courierList,
  fieldNames,
  initialValues,
  paymentMethodList,
  validationSchema,
} from './Payment.data';
import { checkObjectEmpty } from '../../utils/Helpers';
import getDeiviceId from '../../utils/getDeviceId';
import { useTimer } from '../../hooks';
import './styles.scss';

const PHONE_OTP = 'PHONE_OTP';
const EMAIL_OTP = 'EMAIL_OTP';
const ADD_CARD_BOTTOM_SHEET = 'ADD_CARD_BOTTOM_SHEET';
const EDIT_OTHER_SUMMARY = 'EDIT_OTHER_SUMMARY';
const SPLASH_SCREEN = 'SPLASH_SCREEN';

export default function Payment() {
  // QUERY STRING
  const search = useLocation().search;
  const MERCHANT_ID = new URLSearchParams(search).get('mid');
  const ITEMS_DATA = new URLSearchParams(search).getAll('items');

  // const APP_ID = new URLSearchParams(search).get('app_id');
  const passedData = JSON.parse(decodeURIComponent(new URLSearchParams(search).get('body')));
  const DEVICE_ID = getDeiviceId();

  // HOOKS
  const { timer, timeClock, handlePause, handleResume, handleReset } = useTimer(300);

  // REDUX
  const dispatch = useDispatch();
  const { sendOtp, submitOTP, userData, isVerify, cartData } = useSelector((state) => {
    return {
      sendOtp: state?.authentication?.sendOtp,
      submitOTP: state?.authentication?.submitOTP,
      userData: state?.authentication?.userData?.data,
      isVerify: state?.authentication?.verify?.isVerify,
      cartData: state?.cart?.cartData,
    };
  });

  const [
    {
      IS_PHONE_OTP,
      IS_EMAIL_OTP,
      IS_ADD_CARD_BOTTOM_SHEET,
      IS_EDIT_OTHER_SUMMARY,
      IS_SPLASH_SCREEN,
    },
    setConfigurationModal,
  ] = useState({
    IS_PHONE_OTP: false,
    IS_SPLASH_SCREEN: true,
    IS_EDIT_OTHER_SUMMARY: false,
    IS_EMAIL_OTP: false,
    IS_ADD_CARD_BOTTOM_SHEET: false,
  });

  const [isChoosePayment, setIsChoosePayment] = useState(false);
  const [isChooseCourier, setIsChooseCourier] = useState(false);
  const [courierSelected, setCourierSelected] = useState({});
  const [couriers, setCouriers] = useState(courierList);
  const [isShipToMe, setIsShipToMe] = useState(true);

  const navigation = useNavigate();

  const formik = useFormik({ initialValues, validationSchema });

  const handleClose = (type) => {
    setConfigurationModal((prevState) => {
      return {
        ...prevState,
        [`IS_${type}`]: false,
      };
    });
  };

  const handleOpenModal = (type) => {
    setConfigurationModal((prevState) => {
      return {
        ...prevState,
        [`IS_${type}`]: true,
      };
    });
  };

  const handleChangeOTPPhone = (e) => {
    const { values } = formik;
    const otp = e.reduce((prev, next) => prev + '' + next);
    if (otp.length === 6) {
      dispatch(
        _.submitOTPCreator(_.REQUEST_SUBMIT_OTP, {
          app_id: '',
          merchant_id: MERCHANT_ID,
          email: values.email || '',
          phone: `+62${values.phone}`,
          device_id: DEVICE_ID,
          otp: otp,
        })
      );
    }
  };

  const handleActiveClickPaymentCard = (item) => {
    handleOpenModal(ADD_CARD_BOTTOM_SHEET);
  };

  const handleOnSaveCardBottomSheet = () => {
    handleClose(ADD_CARD_BOTTOM_SHEET);
    formik.setFieldValue(fieldNames.payment, true);
  };

  const handleConfirmAndPay = () => {
    navigation(MainRoute.Order, { state: { passedData } });
  };

  //Courier Item Click Function
  const handleCardItemClick = (item) => {
    // courierLi
  };

  const handleOnClickCourierItem = (item) => {
    setCourierSelected({ ...item, isChecked: true });
  };

  const updateCartItem = (item) => {
    const { merchant_cart_id } = cartData?.data;
    dispatch(
      _.cartAction(_.CART_REQUEST_UPDATE, {
        params: {
          id: merchant_cart_id,
        },
        headers: {
          mid: MERCHANT_ID,
        },
        body: item,
      })
    );
  };

  const handleOnIncreaseCartItem = (item) => {
    item.qty = 1;
    updateCartItem(item);
  };

  const handleOnDecreaseCartItem = (item) => {
    item.qty = -1;
    updateCartItem(item);
  };

  const onGetOTP = () => {
    const { errors, values } = formik;
    if (!isVerify && !!!errors.phone && values.phone) {
      dispatch(
        _.authenticationCreator(_.REQUEST_SEND_OTP_REQUEST, {
          app_id: '',
          email: values.email || '',
          phone: `+62${values.phone}`,
          device_id: DEVICE_ID,
          merchant_id: MERCHANT_ID,
        })
      );
    }
  };

  const handleOnBlur = (e) => {
    const { name } = e.target;
    const { errors, values } = formik;
    if (name === 'phone') {
      onGetOTP();
    }
    if (isVerify) {
      if (name === 'email' || name === 'firstName' || name === 'lastName') {
        // check validation firstName email last name done
        if (!errors.firstName && !errors.lastName && !errors.email) {
          dispatch(
            _.userAction(_.UPDATE_DATA_USER, {
              email: values.email,
              first_name: values.firstName,
              last_name: values.lastName,
              status: 'SHOPPER_STATUS_ACTIVE',
            })
          );
        }
      }
    }
  };

  const handleOnBlurAddress = () => {
    const { errors, values } = formik;
    if (!errors.province && !errors.regency && !errors.postalCode) {
      let name = ``;
      let phone = ``;
      if (!isShipToMe) {
        name = values.recipientName;
        phone = `+62${values.recipientPhone}`;
      }

      const data = {
        address_label: 'MY home',
        name: name,
        email: values.email,
        phone: phone,
        status: 'active',
        type: 'consignee',
        address_1: values.shippingAddress,
        address_2: values.addressOptional,
        state_province: values.province,
        address_3: '',
        address_4: '',
        city: values.regency,
        postal_code: values.postalCode,
        country_code: 'IDN',
        postal_code: values.postalCode,
        address_note: '',
        lat: '',
        long: '',
        is_default: true,
      };

      dispatch(_.userAction(_.UPDATE_DATA_USER_ADDRESS, data));
    }
  };

  const handleOnResendOTP = () => {
    onGetOTP();
  };

  useEffect(() => {
    if (timer === 0) {
      handlePause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  // BEGIN REQUEST OTP RESPONSE
  useEffect(() => {
    const { loading, status, errors } = sendOtp;
    if (status === 'success' && loading === false) {
      handleOpenModal(PHONE_OTP);
      handleReset();
      handleResume();
    }
    if (status === 'error') {
      if (errors.length > 0) {
        dispatch(_.toastAction(_.TOAST_DISPLAY_FAILED, { message: errors[0] }));
      }
    }
  }, [sendOtp]);
  // END REQUEST OTP RESPONSE

  // BEGIN SUBMIT OTP RESPONSE
  useEffect(() => {
    const { loading, status, errors } = submitOTP;
    if (status === 'success' && loading === false) {
      handleReset();
      handlePause();
      handleClose(PHONE_OTP);
    }
    if (status === 'error') {
      if (errors.length > 0) {
        dispatch(_.toastAction(_.TOAST_DISPLAY_FAILED, { message: errors[0] }));
      }
    }
  }, [submitOTP]);
  // BEGIN SUBMIT OTP RESPONSE

  const onSetValueDataUser = () => {
    if (userData && userData?.account) {
      formik.setFieldValue('phone', userData?.account?.phone.replace('+62', ''));
      formik.setFieldValue('email', userData?.account?.email);
      formik.setFieldValue('firstName', userData?.account?.first_name);
      formik.setFieldValue('lastName', userData?.account?.last_name);
    }
    if (userData && userData?.shipping_address && userData?.shipping_address[0]) {
      const { postal_code, city, address_1, address_2, phone, state_province, name } =
        userData?.shipping_address[0];
      if (name !== '') {
        setIsShipToMe(false);
        formik.setFieldValue('recipientName', name);
        formik.setFieldValue('recipientPhone', phone?.replace('+62', ''));
      }
      formik.setFieldValue('province', state_province);
      formik.setFieldValue('regency', city);
      formik.setFieldValue('postalCode', postal_code);
      formik.setFieldValue('shippingAddress', address_1);
      formik.setFieldValue('addressOptional', address_2);
    }
  };

  useEffect(() => {
    onSetValueDataUser();
  }, [userData]);

  useEffect(() => {
    if (isVerify) {
      setTimeout(() => {
        dispatch(
          _.cartAction(_.CART_REQUEST_GENERETE, {
            body: {
              type: 'PRODUCT_INTERNAL',
              items: ITEMS_DATA.map((item) => {
                const itemSplit = item.split('|');
                let qty = 0;
                if (itemSplit[1]) {
                  qty = Number(itemSplit[1]);
                }
                return {
                  item_id: itemSplit[0],
                  qty: qty,
                };
              }),
            },
            params: {
              mid: MERCHANT_ID,
            },
          })
        );
      }, 750);
    }
  }, [isVerify]);

  useState(() => {
    setTimeout(() => {
      handleClose(SPLASH_SCREEN);
    }, 2000);
  }, []);

  useEffect(() => {
    const { status, errors } = cartData;
    if (status === 'error') {
      if (errors.length > 0) {
        dispatch(_.toastAction(_.TOAST_DISPLAY_FAILED, { message: errors[0] }));
      }
    }
  }, [cartData]);

  return (
    <>
      {IS_SPLASH_SCREEN ? (
        <Loading />
      ) : (
        <div className="payment">
          <div className="payment__container">
            <div className="payment__shopContainer">
              <div className="payment__shopContainer-left">
                <img src={Images.bodyShopIcon} alt="" width={24} height={24} />
                <p className="payment__shopContainer-left-title">THE BODY SHOP</p>
              </div>
              <div className="payment__shopContainer-right">
                <img src={Icons.shoppingCart} width={16} height={16} alt="" />
                <p className="payment__shopContainer-right-title">Rp 270.600</p>
                {/* <img src={Icons.chevronDown} alt="" width={24} height={24} /> */}
              </div>
            </div>

            <div className="payment__formInfor">
              <FormUserData handleOnBlur={handleOnBlur} formik={formik}></FormUserData>
              <FormUserAddress
                isShipToMe={isShipToMe}
                setIsShipToMe={setIsShipToMe}
                handleOnBlurAddress={handleOnBlurAddress}
                formik={formik}
                fieldNames={fieldNames}
              ></FormUserAddress>

              <div className="payment__formInfor-courier">
                <RowInfo
                  label="Courier"
                  buttonText={formik.values.shippingAddress ? 'Choose Courier' : ''}
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
                    {(Object.keys(courierSelected).length > 0 ? [courierSelected] : couriers)?.map(
                      (item) => (
                        <CourierItem
                          data={item}
                          key={item.id}
                          onClick={() => handleOnClickCourierItem(item)}
                        />
                      )
                    )}
                  </Box>
                )}
              </div>

              <div className="payment__formInfor-payment">
                <RowInfo
                  label="Payment"
                  buttonText={!checkObjectEmpty(courierSelected) && 'Choose Payment'}
                  onButtonClick={() => setIsChoosePayment(true)}
                />

                {!isChoosePayment && (
                  <p className="payment__formInfor-payment-defaultText">
                    Virtual Account, Credit Card, GoPay, OVO, ShopeePay ...
                  </p>
                )}

                {isChoosePayment &&
                  paymentMethodList.map((item) => (
                    <Box key={item.id} sx={{ mb: '32px' }}>
                      <p className="payment__formInfor-payment-title">{item.title}</p>
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
                            onActiveClick={() => handleActiveClickPaymentCard(paymentItem)}
                          />
                        )
                      )}
                    </Box>
                  ))}
              </div>
            </div>
            <div className="payment__orderSummary">
              {isVerify && cartData && cartData?.data !== null && (
                <Summary
                  isEdit={IS_EDIT_OTHER_SUMMARY}
                  data={cartData?.data}
                  onEditClick={() => handleOpenModal(EDIT_OTHER_SUMMARY)}
                  onIncreaseItem={handleOnIncreaseCartItem}
                  onDecreaseItem={handleOnDecreaseCartItem}
                />
              )}
            </div>
          </div>
          <div className="payment__confirmButtonContainer">
            <Button
              isPrimary
              fullWidth
              className="payment__confirmButtonContainer-button"
              startIcon={
                <img src={Icons.lock} width={18} height={18} alt="" style={{ marginBottom: 2 }} />
              }
              buttonClassName="payment__confirmButtonContainer-buttonItem"
              onClick={handleConfirmAndPay}
            >
              Confirm & Pay
            </Button>
            <div className="payment__confirmButtonContainer-info">
              <p>
                By clicking the button above, you agreeFlik's <a href="$">Terms & Conditions</a> and{' '}
                <a href="$">Privacy Policy</a>
              </p>
            </div>
          </div>
          <OtpModal
            timeClock={timeClock}
            onResendOTP={handleOnResendOTP}
            isVisibled={IS_PHONE_OTP}
            timer={timer}
            onClose={() => handleClose(PHONE_OTP)}
            onChange={handleChangeOTPPhone}
            value={formik.values.phone}
          />
          <OtpModal
            isVisibled={IS_EMAIL_OTP}
            onClose={() => handleClose(EMAIL_OTP)}
            onChange={() => {}}
            label="email"
            value={formik.values.email}
          />

          <AddCardBottomSheet
            isVisibled={IS_ADD_CARD_BOTTOM_SHEET}
            onClose={() => handleClose(ADD_CARD_BOTTOM_SHEET)}
            onSaveClick={handleOnSaveCardBottomSheet}
            formik={formik}
          />
        </div>
      )}
    </>
  );
}
