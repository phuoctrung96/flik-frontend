import { Box } from "@mui/material";
import classNames from "classnames";
import React from "react";
import { Button } from "../../../../components";
import { Images, RootStyles } from "../../../../utils";
import "./styles.scss";

export const RowInfo = ({
  label,
  data,
  buttonText,
  onButtonClick,
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
      <Box sx={{ ...RootStyles.row, alignItems: "flex-start" }}>
        <p className="rowInfo__title rowInfo__mr-12">{label}</p>
      </Box>
      {!!buttonText && (
        <Button
          variant="text"
          onClick={onButtonClick}
          buttonClassName="rowInfo__button"
        >
          {buttonText}
        </Button>
      )}
    </Box>
  );
};
