import { Box, Radio } from "@mui/material";
import React from "react";
import { RootStyles } from "../../../../utils";
import "./styles.scss";

export const CourierItem = ({ data }) => {
  return (
    <Box className="courierItem">
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
        </Box>
      </Box>
      <Box sx={{ ...RootStyles.row }}>
        <p className="courierItem__price">Rp {data.price}</p>
        <Radio
          checked={data.isChecked}
          sx={{
            color: "#1f1f54",
            "&.Mui-checked": {
              color: "#1f1f54",
            },
          }}
        />
      </Box>
    </Box>
  );
};
