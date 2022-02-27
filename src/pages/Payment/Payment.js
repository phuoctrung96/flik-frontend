import React from "react";
import { Images, Icons } from "../../utils";
import "./styles.scss";
import { Button } from "../../components";

export default function Payment() {
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
        <h5>Le duc Tung</h5>
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
              style={{ marginBottom: 2}}
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
