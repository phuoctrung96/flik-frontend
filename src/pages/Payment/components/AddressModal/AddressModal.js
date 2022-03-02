import { Box } from "@mui/material";
import React from "react";
import { Modal } from "../../../../components/Modal";
import { LibraryIcons } from "../../../../utils";
import "./styles.scss";

export const AddressModal = ({
  isVisibled,
  onClose,
  data,
  onClick,
  ...rest
}) => {
  return (
    <Modal
      isVisibled={isVisibled}
      onClose={onClose}
      className="addressModalContainer"
      {...rest}
    >
      <Box className="addressModal">
        <Box>
          {data.map((item) => (
            <Box
              className="addressModal__addressItem"
              key={item.id}
              onClick={() => onClick(item)}
            >
              <p className="addressModal__addressItem-title">{item.title}</p>
              <p className="addressModal__addressItem-description">
                {item.address}
              </p>
            </Box>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};
