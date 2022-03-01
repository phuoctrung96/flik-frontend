import { Box } from "@mui/material";
import React from "react";
import { BottomSheet } from "../../../../components";
import { PaymentItem } from "../PaymentItem";

export const AddPaymentBottomSheet = ({
  isVisibled,
  onClose,
  data,
  onClick,
}) => {
  return (
    <BottomSheet isVisibled={isVisibled} onClose={onClose} title="Add Payment">
      <Box>
        {data.map((item) => (
          <PaymentItem key={item.id} data={item} />
        ))}
      </Box>
    </BottomSheet>
  );
};
