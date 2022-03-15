import { Box, Radio } from "@mui/material";
import classNames from "classnames";
import React from "react";
import { RootStyles } from "../../../../utils";
import "./styles.scss";

export const CourierItem = ({ data, onClick }) => {
  return (
    <Box
      className={classNames("courierItem", { active: data.isChecked })}
      onClick={onClick}
    >
      <Box sx={{ ...RootStyles.row }}>
        <img
          src={data.image}
          alt=""
          width={36}
          className="courierItem__image"
        />
        <Box>
          <p className="courierItem__title">{data.title}</p>
          <p className="courierItem__description">{data.description}</p>
          {!!data.tag && (
            <Box className="courierItem__tagContainer">
              <p className="courierItem__tagContainer-text">{data.tag}</p>
            </Box>
          )}
        </Box>
      </Box>
      <Box sx={{ ...RootStyles.row }}>
        {!!data.price && (
          <p className="courierItem__price">
            {data.currencyType + " "}
            {data.price}
          </p>
        )}
        <Radio
          checked={data.isChecked}
          sx={{
            "&.Mui-checked": {
              color: "#0085FF",
            },
          }}
        />
      </Box>
    </Box>
  );
};
