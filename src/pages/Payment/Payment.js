import React from "react";
import { Images, Icons, RootStyles } from "../../utils";
import "./styles.scss";
import { Button, Input } from "../../components";
import { Box } from "@mui/material";
import { RowInfo } from "./components";
import { mockAddressData } from "./Payment.data";

export default function Payment() {
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
          label="Phone Number"
          variant="standard"
          startInput={renderStartPhoneInput()}
        />
        <Input
          id="standard-basic"
          label="Email"
          variant="standard"
          inputClass="payment__mt-16"
          sx={{ mt: "16px" }}
        />
        <Box sx={{ mt: "16px", ...RootStyles.rowBetween }}>
          <Input
            id="standard-basic"
            label="First Name"
            variant="standard"
            className={{}}
          />
          <Input id="standard-basic" label="Last Name" variant="standard" />
        </Box>
        <Input
          id="standard-basic"
          label="Shipping Address"
          variant="standard"
          sx={{ mt: "16px" }}
          startInput={renderShippingAddress()}
        />
        <RowInfo
          label="Address"
          data={mockAddressData}
          isEdit
          sx={{ mt: "16px" }}
        />
        <RowInfo label="Courier" isChoose sx={{ mt: "16px" }} />
        <RowInfo label="Payment" sx={{ mt: "16px" }} />
      </div>

      <div className="payment__orderSummary">
        <p>Order Sumary</p>
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
    </div>
  );
}
