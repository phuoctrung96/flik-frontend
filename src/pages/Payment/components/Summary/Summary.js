import { Box, Link } from "@mui/material";
import classNames from "classnames";
import React from "react";
import { Button } from "../../../../components";
import { RootStyles } from "../../../../utils";
import "./styles.scss";

export const Summary = ({
  data,
  className,
  isEdit,
  onEditClick,
  onIncreaseItem,
  onDecreaseItem,
  onCancelOrder,
}) => {
  return (
    <div className={classNames("summary", className)}>
      <Box sx={{ ...RootStyles.rowBetween }}>
        <p className="summary__header">Order Summary</p>
        <Button onClick={onEditClick} buttonClassName="summary__editButton">
          Edit
        </Button>
      </Box>
      <Box className="summary__productContainer">
        {data?.map((item, index) => (
          <Box
            sx={{ ...RootStyles.row, alignItems: "flex-start" }}
            className="summary__productInfo"
            key={index.toString()}
          >
            <img
              src={item?.image_url}
              alt=""
              width={48}
              height={48}
              className="summary__productInfo-image"
            />
            <Box
              sx={{ ...RootStyles.rowBetween, alignItems: "flex-start" }}
              style={{ flex: 1 }}
            >
              <Box className="summary__productInfo-product">
                <p className="summary__productInfo-product-title">
                  {item?.name}
                </p>
                <p className="summary__productInfo-product-amount">
                  ({item?.weight}
                  {item?.weight_unit}, {item?.category})
                </p>
                {!isEdit && (
                  <p className="summary__productInfo-product-quantity">
                    Quantity: {item?.qty}
                  </p>
                )}
                {isEdit && (
                  <Box className="summary__productInfo-product-buttonGroupContainer">
                    <div
                      className="summary__productInfo-product-buttonGroupContainer-minus"
                      onClick={() => onDecreaseItem?.(item)}
                    >
                      -
                    </div>
                    <p className="summary__productInfo-product-buttonGroupContainer-quantity">
                      {item?.qty}
                    </p>
                    <div
                      className="summary__productInfo-product-buttonGroupContainer-plus"
                      onClick={() => onIncreaseItem?.(item)}
                    >
                      +
                    </div>
                    <p className="summary__productInfo-product-stock">
                      80 in Stock
                    </p>
                  </Box>
                )}
              </Box>
              <p style={{ margin: 0 }} className="summary__price">
                Rp {item?.unit_price}
              </p>
            </Box>
          </Box>
        ))}
      </Box>

      {/* <p className="summary__transactionText">TRANSACTION ID #FC12345</p> */}

      {isEdit && (
        <Box>
          <p>Enter Voucher Code</p>
          <div className="summary__voucherCode">
            <input className="summary__voucherCode-input" />
            <Button isPrimary buttonClassName="summary__voucherCode-button">
              Apply
            </Button>
          </div>
        </Box>
      )}

      <Box className="summary__paymentInfo">
        <Box sx={{ ...RootStyles.rowBetween }}>
          <p className="summary__paymentInfo-text">Subtotal</p>
          <p className="summary__paymentInfo-text">
            <b>Rp {data?.subtotal_amount}</b>
          </p>
        </Box>
        <Box sx={{ ...RootStyles.rowBetween }}>
          <p className="summary__paymentInfo-text">Shipping Costs</p>
          <p className="summary__paymentInfo-text">
            <b>Rp {data?.shippingCosts || 0}</b>
          </p>
        </Box>
        <Box sx={{ ...RootStyles.rowBetween }}>
          <p className="summary__paymentInfo-text">Admin Fee</p>
          <p className="summary__paymentInfo-text">
            <b>Rp {data?.tax_amount}</b>
          </p>
        </Box>
        <Box sx={{ ...RootStyles.rowBetween }}>
          <p className="summary__paymentInfo-text summary__paymentInfo-totalLabel">
            Total
          </p>
          <p className="summary__paymentInfo-text summary__paymentInfo-totalValue">
            Rp {data?.total_amount}
          </p>
        </Box>
      </Box>

      {onCancelOrder && (
        <div className="summary__cancelButtonContainer">
          <Link
            className="summary__cancelButtonContainer-cancelButton"
            onClick={onCancelOrder}
          >
            Cancel Order
          </Link>
        </div>
      )}

      <p className="summary__checkoutText">
        Checkou Powered by{" "}
        <a href="$" className="summary__checkoutText-link">
          Flik
        </a>
      </p>
    </div>
  );
};
