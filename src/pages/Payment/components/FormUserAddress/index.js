import { Box } from '@mui/material';
import React, { useState } from 'react';
import { CheckBox, Input, InputMask } from '../../../../components';
import { Icons, LibraryIcons, Images, RootStyles, wordingLocation } from '../../../../utils';
import { AddressModal } from '../index';

const PROVINCE_MODAL = 'PROVINCE_MODAL';
const REGENCY_MODAL = 'REGENCY_MODAL';
const VILLAGE_MODAL = 'VILLAGE_MODAL';
const DISTRICT_MODAL = 'DISTRICT_MODAL';

export const FormUserAddress = ({
  isShipToMe,
  setIsShipToMe,
  fieldNames,
  formik,
  handleOnBlurAddress,
}) => {
  const [
    { IS_PROVINCE_MODAL, IS_REGENCY_MODAL, IS_VILLAGE_MODAL, IS_DISTRICT_MODAL },
    setConfigurationModal,
  ] = useState({
    IS_PROVINCE_MODAL: false,
    IS_REGENCY_MODAL: false,
    IS_VILLAGE_MODAL: false,
    IS_DISTRICT_MODAL: false,
  });

  const [locationSaveData, setLocationSaveData] = useState({
    province: {},
    regency: {},
    district: {},
  });

  const handleClose = (type) => {
    setConfigurationModal((prevState) => {
      return {
        ...prevState,
        [`IS_${type}`]: false,
      };
    });
  };

  const handleOnChange = (e) => {
    formik.setFieldValue('postalCode', e.target.value);
  };

  const handleOpenModal = (type) => {
    setConfigurationModal((prevState) => {
      return {
        ...prevState,
        [`IS_${type}`]: true,
      };
    });
  };

  const handleOnSaveLocation = (itemSelected, itemData, typeLocation) => {
    if (typeLocation === 'province') {
      formik.setFieldValue(fieldNames['regency'], '');
    }
    formik.setFieldValue(fieldNames[typeLocation], itemSelected);
    setLocationSaveData((prevState) => {
      return {
        ...prevState,
        [typeLocation]: itemData,
      };
    });
    const modalType = `${typeLocation.toUpperCase()}_MODAL`;
    handleClose(modalType);
  };

  return (
    <div className="payment__formInfor-shippingAddress">
      <Box sx={{ ...RootStyles.rowBetween }}>
        <p className="payment__formInfor-shippingAddress-title">Shipping Address</p>
        <CheckBox isLabelFirst label="Ship to me" onChange={setIsShipToMe} isChecked={isShipToMe} />
      </Box>
      {!isShipToMe && (
        <Box sx={{ flex: 1, ...RootStyles.rowBetween, mb: '8px' }}>
          <Input
            onBlur={handleOnBlurAddress}
            label="Recipient's Name"
            name={fieldNames.recipientName}
            onChange={formik.handleChange}
            value={formik.values.recipientName}
            containerStyle={{ flex: 0.49 }}
          />
          <Input
            onBlur={handleOnBlurAddress}
            label="Phone Number"
            type="phone"
            name={fieldNames.recipientPhone}
            onChange={formik.handleChange}
            value={formik.values.recipientPhone}
            placeholder="0821 2345 6789"
            inputComponent={InputMask}
            containerStyle={{ flex: 0.49 }}
          />
        </Box>
      )}
      <Box className="custom-input">
        <Box sx={{ ...RootStyles.row }}>
          <img src={Images.flat} width={24} height={24} alt="" />
          <img src={Icons.chevronDown} width={18} height={18} alt="" />
        </Box>
        <Input
          label="Shipping Address"
          type="text"
          name={fieldNames.shippingAddress}
          onChange={formik.handleChange}
          value={formik.values.shippingAddress}
          placeholder="Shipping Address"
        />
      </Box>
      {!!formik.values.shippingAddress && (
        <Input
          name={fieldNames.addressOptional}
          onChange={formik.handleChange}
          value={formik.values.addressOptional}
          label="Apartment, Unit, Floor, etc. (Optional)"
          containerStyle={{ marginTop: 8 }}
        />
      )}
      {!!formik.values.shippingAddress && (
        <>
          <Box sx={{ flex: 1, ...RootStyles.rowBetween, mt: '8px' }}>
            <Input
              onBlur={handleOnBlurAddress}
              label="Province"
              containerStyle={{ flex: 0.32 }}
              onClick={() => handleOpenModal(PROVINCE_MODAL)}
              endInput={<LibraryIcons.ArrowDropDownIcon />}
              name={fieldNames.province}
              value={wordingLocation(formik.values.province)}
              readOnly
            />
            <Input
              onBlur={handleOnBlurAddress}
              label="City"
              containerStyle={{ flex: 0.32 }}
              endInput={<LibraryIcons.ArrowDropDownIcon />}
              readOnly
              name={fieldNames.regency}
              value={wordingLocation(formik.values.regency)}
              disabled={formik.values.province === '' ? true : false}
              onClick={
                formik.values.province !== '' ? () => handleOpenModal(REGENCY_MODAL) : () => {}
              }
            />

            <Input
              onBlur={handleOnBlurAddress}
              disabled={formik.values.regency === '' ? true : false}
              containerStyle={{ flex: 0.32 }}
              label="Postal Code"
              type="number"
              name={fieldNames.postalCode}
              onChange={handleOnChange}
              value={formik.values.postalCode}
              placeholder="171xxx"
            />
          </Box>
          {/* <Box sx={{ flex: 1, ...RootStyles.rowBetween, mt: '8px' }}>
            <Input
              onBlur={handleOnBlurAddress}
              label="District"
              containerStyle={{ flex: 0.49 }}
              endInput={<LibraryIcons.ArrowDropDownIcon />}
              readOnly
              name={fieldNames.district}
              value={wordingLocation(formik.values.district)}
              disabled={formik.values.regency === '' ? true : false}
              onClick={
                formik.values.regency !== '' ? () => handleOpenModal(DISTRICT_MODAL) : () => {}
              }
            />
            <Input
              onBlur={handleOnBlurAddress}
              label="village"
              containerStyle={{ flex: 0.49 }}
              endInput={<LibraryIcons.ArrowDropDownIcon />}
              readOnly
              name={fieldNames.village}
              value={wordingLocation(formik.values.village)}
              disabled={formik.values.district === '' ? true : false}
              onClick={
                formik.values.district !== '' ? () => handleOpenModal(VILLAGE_MODAL) : () => {}
              }
            />
          </Box> */}
        </>
      )}
      <AddressModal
        locationSaveData={locationSaveData}
        typeLocation="province"
        isVisibled={IS_PROVINCE_MODAL}
        searchPlaceholder="Search Province"
        onClose={() => handleClose(PROVINCE_MODAL)}
        onSaveClick={handleOnSaveLocation}
      />
      {/* City Modal */}
      <AddressModal
        locationSaveData={locationSaveData}
        typeLocation="regency"
        isVisibled={IS_REGENCY_MODAL}
        searchPlaceholder="Search City"
        onClose={() => handleClose(REGENCY_MODAL)}
        onSaveClick={handleOnSaveLocation}
      />
      {/* Postal Code Modal */}
      <AddressModal
        locationSaveData={locationSaveData}
        typeLocation="district"
        isVisibled={IS_DISTRICT_MODAL}
        searchPlaceholder="Search District"
        onClose={() => handleClose(DISTRICT_MODAL)}
        onSaveClick={handleOnSaveLocation}
      />
      {/* Postal Code Modal */}
      <AddressModal
        locationSaveData={locationSaveData}
        typeLocation="village"
        isVisibled={IS_VILLAGE_MODAL}
        searchPlaceholder="Search Village"
        onClose={() => handleClose(VILLAGE_MODAL)}
        onSaveClick={handleOnSaveLocation}
      />
    </div>
  );
};
