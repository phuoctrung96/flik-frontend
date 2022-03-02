import { Box } from "@mui/material";
import React from "react";
import { BottomSheet } from "../../../../components";
import { PaymentItem } from "../PaymentItem";

export const AddPaymentBottomSheet = ({
  isVisibled,
  onClose,
  data,
  onActiveClick,
  onSave,
}) => {
  return (
    <BottomSheet
      isVisibled={isVisibled}
      onClose={onClose}
      onSave={onSave}
      title="Add Payment"
    >
      <Box>
        {data.map((item) => (
          <PaymentItem
            key={item.id}
            data={item}
            onActiveClick={() => onActiveClick(item)}
          />
        ))}
      </Box>
    </BottomSheet>
  );
};
