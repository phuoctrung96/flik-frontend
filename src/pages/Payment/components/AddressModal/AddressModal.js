import { Box, Radio } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button, CheckBox, Input } from "../../../../components";
import { Modal } from "../../../../components/Modal";
import { LibraryIcons } from "../../../../utils";
import "./styles.scss";

export const AddressModal = ({
  isVisibled,
  onClose,
  data,
  textBackButtonm,
  searchPlaceholder,
  onSaveClick,
  ...rest
}) => {
  const [dataState, setDataState] = useState(data);
  const [itemChecked, setItemChecked] = useState({});

  const handleCheck = (item) => {
    const newData = dataState.map((dataItem) => {
      if (dataItem.id === item.id) {
        dataItem.isChecked = true;
      } else {
        dataItem.isChecked = false;
      }

      return dataItem;
    });

    setDataState(newData);
    setItemChecked(item);
  };

  const handleSaveClick = () => {
    onSaveClick?.(itemChecked, dataState);
  };

  useEffect(() => {
    setDataState(data);
  }, [data]);

  return (
    <Modal
      isVisibled={isVisibled}
      onClose={onClose}
      fullScreen
      isBack
      textBackButton={textBackButtonm}
      {...rest}
    >
      <Box className="addressModal">
        <Input
          label={searchPlaceholder}
          startInput={<LibraryIcons.SearchIcon />}
          variant={"outlined"}
          placeholder={searchPlaceholder}
        />
        <Box className="addressModal__container">
          {dataState.map((item) => (
            <Box
              className="addressModal__addressItem"
              key={item.id}
              onClick={() => handleCheck(item)}
            >
              <p className="addressModal__addressItem-title">{item.title}</p>
              <Radio checked={item.isChecked} />
            </Box>
          ))}
        </Box>

        <div className="addressModal__buttonContainer">
          <Button
            isPrimary
            buttonClassName="addressModal__buttonContainer-button"
            onClick={handleSaveClick}
          >
            Save
          </Button>
        </div>
      </Box>
    </Modal>
  );
};
