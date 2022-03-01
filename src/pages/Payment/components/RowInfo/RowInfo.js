import { Box } from "@mui/material";
import classNames from "classnames";
import React from "react";
import { Button } from "../../../../components";
import { RootStyles } from "../../../../utils";
import "./styles.scss";

export const RowInfo = ({
  label,
  data,
  isChoose,
  isEdit,
  onEditPress,
  onChoosePress,
  className,
  sx,
  ...rest
}) => {
  return (
    <Box
      sx={{ ...RootStyles.rowBetween, alignItems: "flex-start", ...sx }}
      className={classNames("rowInfo", className)}
      {...rest}
    >
      <p className="rowInfo__title rowInfo__mr-12">{label}</p>
      {data && (
        <Box className="rowInfo__content">
          <p className="rowInfo__content-title">{data?.name}</p>
          <p className="rowInfo__content-phone">({data?.phone})</p>
          <p className="rowInfo__content-address">{data?.address}</p>
        </Box>
      )}
      {isEdit && <Button variant="text">Edit</Button>}
      {isChoose && <Button variant="text">+Choose</Button>}
    </Box>
  );
};
