import React from "react";
import { IMaskInput } from "react-imask";
import PropTypes from "prop-types";

export const InputMask = React.forwardRef(function InputMask(props, ref) {
  const {
    onChange,
    mask = "#00 0000 0000",
    definitions = { "#": /[1-9]/ },
    ...other
  } = props;
  return (
    <IMaskInput
      {...other}
      mask={mask}
      definitions={definitions}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

InputMask.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  mask: PropTypes.string,
};
