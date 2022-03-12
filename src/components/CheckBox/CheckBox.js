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
  isLabelFirst = false,
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
      {isLabelFirst && <p className="checkBox__labelFirst">{label}</p>}
      <CheckBoxLibrary
        {...labelProps}
        onClick={handleChangeCheckBox}
        checked={isCheckedState}
        sx={{
          color: "#0085FF",
          "&.Mui-checked": {
            color: "#0085FF",
          },
          marginRight: "16px",
          padding: 0,
        }}
        size={size}
      />
      {!isLabelFirst && <p className="checkBox__label">{label}</p>}
    </Box>
  );
};
