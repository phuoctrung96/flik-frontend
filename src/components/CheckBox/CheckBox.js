import { Box } from "@mui/material";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Checkbox as CheckBoxLibrary } from "@mui/material";
import "./styles.scss";

const labelProps = { inputProps: { "aria-label": "Checkbox demo" } };

export const CheckBox = ({
  className,
  isChecked = false,
  label,
  size = "small",
  onChange,
  ...rest
}) => {
  const [isCheckedState, setIsCheckedState] = useState(false);

  const handleChangeCheckBox = () => {
    setIsCheckedState(!isCheckedState);
    onChange(!isCheckedState);
  };

  useEffect(() => {
    setIsCheckedState(isChecked);
  }, []);

  return (
    <Box className={classNames("checkBox", className)}>
      <CheckBoxLibrary
        {...labelProps}
        onClick={handleChangeCheckBox}
        checked={isCheckedState}
        sx={{
          color: "#06B3BA",
          "&.Mui-checked": {
            color: "#06B3BA",
          },
          marginRight: "16px",
          padding: 0,
        }}
        size={size}
      />
      <p className="checkBox__label">{label}</p>
    </Box>
  );
};
