import React from "react";
import { Button } from "../../../components";
import { Images } from "../../../utils";
import "./styles.scss";

const PaymentSuccess = () => {
  return (
    <div className="paymentSuccess">
      <div className="paymentSuccess__information">
        <img src={Images.congratulation} alt="" />
        <h1 className="paymentSuccess__information-title">
          Thank you for shopping with us!
        </h1>
        <p className="paymentSuccess__information-description">
          The amount of <b>Rp 270.600</b> has been deducted from your{" "}
          <b>Credit Card</b>{" "}
          Balance
        </p>
        <p className="paymentSuccess__information-description">
          View your order on <b>useflik.com</b>
        </p>
      </div>
      <div className="paymentSuccess__buttonContainer">
        <Button
          fullWidth
          isPrimary
          buttonClassName="paymentSuccess__buttonContainer-button"
        >
          View Order
        </Button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
