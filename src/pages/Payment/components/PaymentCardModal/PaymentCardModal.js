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

export const PaymentCardModal = ({
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

  function handleXenditInitiation() {
    console.log('test');
    // replace the key with Xendit account for Flik
    window.Xendit.setPublishableKey(
      'xnd_public_development_QUIF3UOhUSOKsGQjkkfGQHeQDVa9eNZlR5CUGMoWizEt8VcjCsgb7hOQsY1OhDC'
    );
  }

  function handleXenditVerification(type, value, value2 = '') {
    if (type === 'card_number') {
      if (!window.Xendit.card.validateCardNumber(value)) {
        console.log('Credit card number is invalid!');
        // return "Credit card number is invalid!";
      }
    } else if (type === 'expiry_date') {
      if (!window.Xendit.card.validateExpiry(value, value2)) {
        console.log('Expiry date is invalid!');
        // return "Expiry date is invalid!";
      }
    } else if (type === 'cvn_number') {
      if (!window.Xendit.card.validateCvn(value)) {
        console.log('CVN number is invalid!');
        // return "CVN number is invalid!";
      }
    }

    return;
  }

  function handleXenditPayment() {
    handleXenditVerification('card_number', cardNumber.value);
    handleXenditVerification('expiry_date', cardExpMonth.value, cardExpYear.value);
    handleXenditVerification('cvn_number', cardCvn.value);

    window.Xendit.card.createToken(
      {
        amount: amount.value,
        card_number: cardNumber.value,
        card_exp_month: cardExpMonth.value,
        card_exp_year: cardExpYear.value,
        card_cvn: cardCvn.value,
        is_multiple_use: false,
      },
      xenditResponseHandler
    );
  }

  function xenditResponseHandler(err, creditCardCharge) {
    if (err) {
      // Show the errors on the form
      console.log(err);
      return;
    }

    if (creditCardCharge.status === 'VERIFIED') {
      console.log('verified triggered');
      const token = creditCardCharge.id;
      setCardToken(token);
      setTokenStatus('Verified');
    } else if (creditCardCharge.status === 'IN_REVIEW') {
      console.log('in review triggered');
      const authenticationUrl = creditCardCharge.payer_authentication_url;
      setCardToken(authenticationUrl);
      setTokenStatus('In Review');
      window.open(creditCardCharge.payer_authentication_url, 'sample-inline-frame');
    } else if (creditCardCharge.status === 'FAILED') {
      console.log('failed triggered');
      setCardToken(creditCardCharge.failure_reason);
      setTokenStatus('Failed');
    }
  }

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
      <Box className="PaymentCreditCardModal">
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
        <Box className="PaymentCreditCardModal__container">
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

        <div className="PaymentCreditCardModal__buttonContainer">
          <Button
            isPrimary
            buttonClassName="PaymentCreditCardModal__buttonContainer-button"
            onClick={handleSaveClick}
          >
            Save
          </Button>
        </div>
      </Box>
    </Modal>
  );
};
