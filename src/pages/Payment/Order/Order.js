import React, { useState } from "react";
import { Icons, Images, LibraryIcons } from "../../../utils";
import { Summary } from "../components";
import { orderSummaryData } from "../Payment.data";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./styles.scss";
import { convertSecondToMinute } from "../../../utils/Helpers";
import { Link } from "@mui/material";
import { Button } from "../../../components";

const Order = () => {
  const [isEditOtherSummary, setIsEditOtherSummary] = useState(false);

  const handleEditSummary = () => {};

  return (
    <div className="order">
      <div className="order__container">
        <div className="order__shopContainer">
          <div className="order__shopContainer-left">
            <img src={Images.bodyShopIcon} alt="" width={24} height={24} />
            <p className="order__shopContainer-left-title">THE BODY SHOP</p>
          </div>
          <div className="order__shopContainer-right">
            <img src={Icons.shoppingCart} width={16} height={16} alt="" />
            <p className="order__shopContainer-right-title">Rp 270.600</p>
            <img src={Icons.chevronDown} alt="" width={24} height={24} />
          </div>
        </div>

        <div className="order__orderInformation">
          <div className="order__orderInformation-header">
            <div className="order__orderInformation-header-checkContainer">
              <LibraryIcons.CheckIcon
                style={{ color: "#ffffff", fontWeight: "bold" }}
              />
            </div>
            <h3 className="order__orderInformation-header-title">
              Order is Placed
            </h3>
            <p className="order__orderInformation-header-transaction">
              TRANSACTION ID #FC12345
            </p>
          </div>

          <div className="order__orderInformation-extraTimeContainer">
            <CountdownCircleTimer
              isPlaying
              duration={60 * 5}
              colors={["#0085FF"]}
              size={48}
              strokeWidth={2}
            >
              {({ remainingTime }) => (
                <p className="order__orderInformation-extraTimeContainer-counterText">
                  {convertSecondToMinute(remainingTime)}
                </p>
              )}
            </CountdownCircleTimer>

            <div className="order__orderInformation-extraTimeContainer-right">
              <p className="order__orderInformation-extraTimeContainer-right-text">
                You have extra time to make changes or click Verify Payment Now
                to finalize your order.
              </p>

              <Link className="order__orderInformation-extraTimeContainer-right-link">
                Verify Payment Now
              </Link>
            </div>
          </div>

          <div className="order__orderInformation-informationContainer">
            <p className="order__orderInformation-informationContainer-text">
              A confirmation email will be sent to
            </p>
            <p className="order__orderInformation-informationContainer-email">
              helloo.lauramartin@gmail.com
            </p>
            <Link className="order__orderInformation-informationContainer-link">
              Edit
            </Link>
          </div>

          <div className="order__orderInformation-addressContainer">
            <p className="order__orderInformation-addressContainer-label">
              Address
            </p>
            <div className="order__orderInformation-addressContainer-infoBlock">
              <p className="order__orderInformation-addressContainer-infoBlock-title">
                Laura Martin
              </p>
              <p className="order__orderInformation-addressContainer-infoBlock-phone">
                (+62 821 2345 6789)
              </p>
              <p className="order__orderInformation-addressContainer-infoBlock-description">
                The Olivia Apartments, 23, Kecamatan Pasar Minggu, Jakarta
                Selatan, DKI Jakarta 12345{" "}
              </p>
            </div>
            <Button buttonClassName="order__orderInformation-addressContainer-button">
              Edit
            </Button>
          </div>

          <div className="order__orderInformation-courierContainer">
            <p className="order__orderInformation-courierContainer-label">
              Courier
            </p>
            <div className="order__orderInformation-courierContainer-infoBlock">
              <img src={Images.jne} alt="" />
              <div className="order__orderInformation-courierContainer-infoBlock-centerContainer">
                <p className="order__orderInformation-courierContainer-infoBlock-centerContainer-title">
                  JNE Express
                </p>
                <p className="order__orderInformation-courierContainer-infoBlock-centerContainer-description">
                  Pengirman (1-2 hari)
                </p>
              </div>
            </div>
            <Button buttonClassName="order__orderInformation-courierContainer-button">
              Edit
            </Button>
          </div>

          <div className="order__orderInformation-paymentContainer">
            <p className="order__orderInformation-paymentContainer-label">
              Payment
            </p>
            <div className="order__orderInformation-paymentContainer-infoBlock">
              <img src={Images.visa} alt="" />
              <div className="order__orderInformation-paymentContainer-infoBlock-centerContainer">
                <p className="order__orderInformation-paymentContainer-infoBlock-centerContainer-title">
                  JNE Express
                </p>
                <p className="order__orderInformation-paymentContainer-infoBlock-centerContainer-description">
                  **** 0488
                </p>
              </div>
            </div>
            <Button buttonClassName="order__orderInformation-paymentContainer-button">
              Edit
            </Button>
          </div>
        </div>

        <div className="order__orderSummary">
          <Summary
            isEdit={isEditOtherSummary}
            data={orderSummaryData}
            onEditClick={handleEditSummary}
          />
        </div>
      </div>
    </div>
  );
};

export default Order;
