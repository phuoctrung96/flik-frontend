import { Box } from "@mui/material";
import classNames from "classnames";
import React from "react";
import { Button } from "../../../../components";
import { Images, RootStyles } from "../../../../utils";
import "./styles.scss";

export const RowInfo = ({
  label,
  data,
  isChoose,
  isEdit,
  onEditClick,
  onChooseClick,
  className,
  isSeccondContentView,
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
        {isEdit && data && !isSeccondContentView && (
          <Box className="rowInfo__content">
            <p className="rowInfo__content-title">{data?.name}</p>
            <p className="rowInfo__content-phone">({data?.phone})</p>
            <p className="rowInfo__content-address">{data?.address}</p>
          </Box>
        )}
        {isEdit && data && isSeccondContentView && (
          <Box
            className="rowInfo__seccondContent"
            sx={{ ...RootStyles.rowCenter }}
          >
            <img
              src={data?.image}
              alt=""
              className="rowInfo__seccondContent-image"
            />
            <Box className="rowInfo__seccondContent-infoContainer">
              <p className="rowInfo__seccondContent-infoContainer-title">
                {data?.title}
              </p>
              <p className="rowInfo__seccondContent-infoContainer-description">
                {data?.description}
              </p>
            </Box>
          </Box>
        )}
      </Box>
      {isEdit && (
        <Button variant="text" onClick={onEditClick} style={{ padding: 0 }}>
          Edit
        </Button>
      )}
      {isChoose && (
        <Button variant="text" onClick={onChooseClick} style={{ padding: 0 }}>
          +Choose
        </Button>
      )}
    </Box>
  );
};
