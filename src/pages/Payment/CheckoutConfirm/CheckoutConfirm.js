import { Box, Link } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../../components";
import { Icons, Images, LibraryIcons, RootStyles } from "../../../utils";
import "./styles.scss";

const CheckoutConfirm = () => {
  const navigation = useNavigate();

  const handleCancel = () => {
    navigation(-1);
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
            <p className="checkoutConfirm__shopContainer-right-title">
              Rp 270.600
            </p>
            <img src={Icons.chevronDown} alt="" width={24} height={24} />
          </div>
        </div>

        <div className="checkoutConfirm__formInfor">
          <Box className="checkoutConfirm__formInfor-cardInfoContainer">
            <h2 className="checkoutConfirm__formInfor-cardInfoContainer-title">
              Please Complete Your Payment
            </h2>

            <div style={{ marginTop: 24 }}>
              <p className="checkoutConfirm__formInfor-cardInfoContainer-minorText">
                Transfer to
              </p>
              <img
                src={Images.bca2x}
                alt=""
                className="checkoutConfirm__formInfor-cardInfoContainer-image"
              />
            </div>

            <div style={{ marginTop: 24, marginBottom: 24 }}>
              <p className="checkoutConfirm__formInfor-cardInfoContainer-minorText">
                Virtual Account Number
              </p>

              <h2
                className="checkoutConfirm__formInfor-cardInfoContainer-title"
                style={{ margin: 0 }}
              >
                8870889650872228
              </h2>

              <div className="checkoutConfirm__formInfor-cardInfoContainer-copyContainer">
                <LibraryIcons.ContentCopyIcon fontSize="18px" />
                <p className="checkoutConfirm__formInfor-cardInfoContainer-copyContainer-text">
                  Copy
                </p>
              </div>
            </div>

            <div style={{ marginBottom: 32 }}>
              <p className="checkoutConfirm__formInfor-cardInfoContainer-minorText">
                Total Payment
              </p>

              <h2
                className="checkoutConfirm__formInfor-cardInfoContainer-title"
                style={{ margin: 0 }}
              >
                Rp 270.600
              </h2>

              <div className="checkoutConfirm__formInfor-cardInfoContainer-copyContainer">
                <LibraryIcons.ContentCopyIcon fontSize="18px" />
                <p className="checkoutConfirm__formInfor-cardInfoContainer-copyContainer-text">
                  Copy
                </p>
              </div>
            </div>

            <Link href="#" className="checkoutConfirm__formInfor-howToPay">
              How to Pay
            </Link>
          </Box>

          <Box className="checkoutConfirm__formInfor-detailContainer">
            <h5 className="checkoutConfirm__formInfor-detailContainer-title">
              Order Details
            </h5>

            <Box
              sx={{
                ...RootStyles.rowBetween,
                mb: "10px",
                alignItems: "flex-start",
              }}
            >
              <p className="checkoutConfirm__formInfor-detailContainer-label">
                Transaction ID
              </p>
              <p className="checkoutConfirm__formInfor-detailContainer-value">
                #FC12345
              </p>
            </Box>

            <Box
              sx={{
                ...RootStyles.rowBetween,
                mb: "10px",
                alignItems: "flex-start",
              }}
            >
              <p className="checkoutConfirm__formInfor-detailContainer-label">
                Total Payment
              </p>
              <p className="checkoutConfirm__formInfor-detailContainer-value">
                Rp 377.300
              </p>
            </Box>

            <p className="checkoutConfirm__formInfor-detailContainer-tag">
              Powered by Flik
            </p>
          </Box>

          {/* <Box
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
            >
              Proceed
            </Button>
          </Box> */}
        </div>
      </div>
    </div>
  );
};

export default CheckoutConfirm;
