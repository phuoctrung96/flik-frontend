import { Box } from "@mui/material";
import classNames from "classnames";
import React from "react";
import { Images, RootStyles } from "../../../../utils";
import "./styles.scss";

export const Summary = ({ data, className }) => {
  return (
    <div className={classNames("summary", className)}>
      <p className="summary__header">Order Summary</p>
      <Box className="summary__productContainer">
        {data?.products.map((item) => (
          <Box
            sx={{ ...RootStyles.row, alignItems: "flex-start" }}
            className="summary__productInfo"
            key={item.id}
          >
            <img
              src={item.image}
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
                  {item.name}
                </p>
                <p className="summary__productInfo-product-amount">
                  ({item.amount}
                  {item.type}, {item.category})
                </p>
                <p className="summary__productInfo-product-quantity">
                  Quantity: {item.quantity}
                </p>
              </Box>
              <p style={{ margin: 0 }} className="summary__price">
                Rp {item.price}
              </p>
            </Box>
          </Box>
        ))}
      </Box>

      <p className="summary__transactionText">TRANSACTION ID #FC12345</p>

      <Box className="summary__paymentInfo">
        <Box sx={{ ...RootStyles.rowBetween }}>
          <p className="summary__paymentInfo-text">Subtotal</p>
          <p className="summary__paymentInfo-text">Rp {data.subtotal}</p>
        </Box>
        <Box sx={{ ...RootStyles.rowBetween }}>
          <p className="summary__paymentInfo-text">Shipping Costs</p>
          <p className="summary__paymentInfo-text">Rp {data.shippingCosts}</p>
        </Box>
        <Box sx={{ ...RootStyles.rowBetween }}>
          <p className="summary__paymentInfo-text">Admin Fee</p>
          <p className="summary__paymentInfo-text">Rp {data.adminFee}</p>
        </Box>
        <Box sx={{ ...RootStyles.rowBetween }}>
          <p className="summary__paymentInfo-text summary__paymentInfo-totalLabel">
            Total
          </p>
          <p className="summary__paymentInfo-text summary__paymentInfo-totalValue">
            Rp {data.total}
          </p>
        </Box>
      </Box>

      <p className="summary__checkoutText">Checkou Powered by Flik</p>
    </div>
  );
};
