import { Box } from "@mui/material";
import React from "react";
import { Button } from "../../../../components";
import { RootStyles } from "../../../../utils";
import "./styles.scss";

export const PaymentItem = ({ data, onActiveClick }) => {
  return (
    <Box className="paymentItem" sx={{ ...RootStyles.row }}>
      <div style={{ width: 45, marginRight: 10 }}>
        <img src={data.image} alt="" className="paymentItem__image" />
      </div>
      <Box className="paymentItem__infoContainer">
        <h5 className="paymentItem__title">{data.title}</h5>
        <p className="paymentItem__description">{data.description}</p>
        {!!data.tag && (
          <Box className="paymentItem__tagContainer">
            <p className="paymentItem__tagContainer-text">{data.tag}</p>
          </Box>
        )}
      </Box>
      <Button buttonClassName="paymentItem__button" onClick={onActiveClick}>
        Activate
      </Button>
    </Box>
  );
};
