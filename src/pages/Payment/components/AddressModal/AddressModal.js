import { Box, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Button, CheckBox, Input } from '../../../../components';
import { Modal } from '../../../../components/Modal';
import { LibraryIcons, wordingLocation } from '../../../../utils';
import debounce from 'lodash/debounce';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import * as _ from '../../../../redux/actions';

import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const AddressModal = ({
  isVisibled,
  typeLocation,
  onChangeValue,
  locationSaveData,
  parentId,
  onClose,
  textBackButtonm,
  searchPlaceholder,
  onSaveClick,
  ...rest
}) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => {
    return {
      data: state?.location[typeLocation]?.data,
    };
  });

  const [dataState, setDataState] = useState(data);
  const [itemChecked, setItemChecked] = useState({});
  const onGetData = (value = '') => {
    const typeAction = `${typeLocation.toUpperCase()}_REQUEST`;
    let params = {
      name: value,
    };
    if (typeLocation === 'regency') {
      params = {
        ...params,
        code: locationSaveData.province.code,
      };
    }
    if (typeLocation === 'district') {
      params = {
        ...params,
        code: locationSaveData.regency.code,
      };
    }
    if (typeLocation === 'village') {
      params = {
        ...params,
        code: locationSaveData?.district?.code,
      };
    }
    dispatch(
      _.locationAction(typeAction, {
        locationType: typeLocation,
        params: params,
      })
    );
  };

  useEffect(() => {
    onGetData();
  }, [isVisibled]);

  const handleSaveClick = () => {
    onSaveClick?.(
      itemChecked,
      data.find((item) => item.name === itemChecked),
      typeLocation
    );
  };

  const onTypeDone = debounce((value) => {
    onGetData(value, typeLocation);
  }, 1000);

  const onSearchData = (e) => {
    onTypeDone(e.target.value);
  };

  const handleChange = (e) => {
    setItemChecked(e.target.value);
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
        <FormControl size="small" variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            startAdornment={
              <InputAdornment position="start">
                <LibraryIcons.SearchIcon />
              </InputAdornment>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            onChange={onSearchData}
            placeholder={searchPlaceholder}
          />
        </FormControl>
        <Box className="addressModal__container">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            onChange={handleChange}
          >
            {dataState &&
              dataState.length > 0 &&
              dataState.map((item, key) => (
                <FormControlLabel
                  labelPlacement="start"
                  key={key}
                  value={item.name}
                  control={<Radio />}
                  label={wordingLocation(item.name)}
                />
              ))}
          </RadioGroup>
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
