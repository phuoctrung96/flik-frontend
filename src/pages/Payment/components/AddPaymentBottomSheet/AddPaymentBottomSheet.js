import { Box } from "@mui/material";
import React from "react";
import { Button, Modal } from "../../../../components";
import { CourierItem } from "../CourierItem";
import { PaymentItem } from "../PaymentItem";
import "./styles.scss";

export const AddPaymentBottomSheet = ({
  isVisibled,
  onClose,
  formik,
  onSaveClick,
  onCardItemClick,
  onActiveClickPaymentCard,
  data,
}) => {
  return (
    <Modal
      isVisibled={isVisibled}
      onClose={onClose}
      title="Change Payment"
      className="addPaymentBottomSheet"
      fullScreen
      isBack
    >
      <Box className="addPaymentBottomSheet__container">
        <p className="addPaymentBottomSheet__container-title">Change Payment</p>
        {data?.map((item) => (
          <Box key={item.id} sx={{ mb: "32px" }}>
            <p className="addPaymentBottomSheet__formInfor-title">
              {item.title}
            </p>
            {item.children.map((paymentItem) =>
              paymentItem.isActivated ? (
                <CourierItem
                  data={paymentItem}
                  key={paymentItem.id}
                  onClick={() => onCardItemClick(paymentItem)}
                />
              ) : (
                <PaymentItem
                  key={paymentItem.id}
                  data={paymentItem}
                  onActiveClick={() => onActiveClickPaymentCard(paymentItem)}
                />
              )
            )}
          </Box>
        ))}
      </Box>

      <div className="addPaymentBottomSheet__buttonContainer">
        <Button
          isPrimary
          buttonClassName="addPaymentBottomSheet__buttonContainer-button"
          onClick={onSaveClick}
        >
          Save
        </Button>
      </div>
    </Modal>
  );
};
