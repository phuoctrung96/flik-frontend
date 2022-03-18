import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../../components";
import { MainRoute } from "../../../router/constants";
import { Icons, Images, RootStyles } from "../../../utils";
import "./styles.scss";

const CheckoutConfirm = () => {
  const navigation = useNavigate();

  const handleCancel = () => {
    navigation(-1);
  };

  const handleNavigateToPaymentSuccess = () => {
    navigation(MainRoute.PaymentSuccess);
  };

  return (
    <div className="checkoutConfirm">
      <div className="checkoutConfirm__container">
        <div className="checkoutConfirm__shopContainer">
          <div className="checkoutConfirm__shopContainer-left">
            <img src={Images.bodyShopIcon} alt="" width={24} height={24} />
            <p className="checkoutConfirm__shopContainer-left-title">
              THE BODY SHOP
            </p>
          </div>
          <div className="checkoutConfirm__shopContainer-right">
            <img src={Icons.shoppingCart} width={16} height={16} alt="" />
            <p className="checkoutConfirm__shopContainer-right-title">
              Rp 270.600
            </p>
            {/* <img src={Icons.chevronDown} alt="" width={24} height={24} /> */}
          </div>
        </div>

        <div className="checkoutConfirm__formInfor">
          <Box className="checkoutConfirm__formInfor-cardInfoContainer">
            <img
              src={Images.visa2x}
              alt=""
              className="checkoutConfirm__formInfor-cardInfoContainer-image"
            />
            <h2 className="checkoutConfirm__formInfor-cardInfoContainer-title">
              Authenticate Using One Time Password (OTP)
            </h2>
            <Box className="checkoutConfirm__formInfor-cardInfoContainer-descriptionContainer">
              <p className="checkoutConfirm__formInfor-cardInfoContainer-descriptionText">
                A verification code has been sent to your mobile phone{" "}
                <b>+6282123456789</b>. Enter the authorization code to approve
                this transaction before the transaction timer runs out
              </p>
            </Box>
            <p className="checkoutConfirm__formInfor-cardInfoContainer-confirmText">
              Confirm your transaction in{" "}
              <span style={{ color: "#0085FF" }}>04:50</span>
            </p>
          </Box>

          <Box className="checkoutConfirm__formInfor-detailContainer">
            <Box
              sx={{ ...RootStyles.row, mb: "10px", alignItems: "flex-start" }}
            >
              <p className="checkoutConfirm__formInfor-detailContainer-label">
                Merchant Name
              </p>
              <p className="checkoutConfirm__formInfor-detailContainer-value">
                Flik
              </p>
            </Box>

            <Box
              sx={{ ...RootStyles.row, mb: "10px", alignItems: "flex-start" }}
            >
              <p className="checkoutConfirm__formInfor-detailContainer-label">
                Amount
              </p>
              <p className="checkoutConfirm__formInfor-detailContainer-value">
                Rp 377.300
              </p>
            </Box>

            <Box
              sx={{ ...RootStyles.row, mb: "10px", alignItems: "flex-start" }}
            >
              <p className="checkoutConfirm__formInfor-detailContainer-label">
                Transaction Date
              </p>
              <p className="checkoutConfirm__formInfor-detailContainer-value">
                Fri, Feb 18 2022 12:45:35 GMT +8
              </p>
            </Box>

            <Box
              sx={{ ...RootStyles.row, mb: "10px", alignItems: "flex-start" }}
            >
              <p className="checkoutConfirm__formInfor-detailContainer-label">
                Visa Number
              </p>
              <p className="checkoutConfirm__formInfor-detailContainer-value">
                4321 5678 9012 0488
              </p>
            </Box>

            <Box sx={{ ...RootStyles.row }}>
              <p className="checkoutConfirm__formInfor-detailContainer-label">
                Authorization Code
              </p>
              <Input
                variant="outlined"
                size="small"
                fullWidth
                className="checkoutConfirm__formInfor-detailContainer-input"
              />
            </Box>

            <p className="checkoutConfirm__formInfor-detailContainer-tag">
              Powered by Flik
            </p>
          </Box>

          <Box
            sx={{ ...RootStyles.row, borderBottom: 0 }}
            className="checkoutConfirm__buttonContainer"
          >
            <Button
              fullWidth
              variant="outlined"
              className="checkoutConfirm__buttonContainer-buttonCancel"
              buttonClassName="checkoutConfirm__buttonContainer-buttonCancelItem"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              isPrimary
              fullWidth
              className="checkoutConfirm__buttonContainer-button"
              onClick={handleNavigateToPaymentSuccess}
            >
              Proceed
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default CheckoutConfirm;
