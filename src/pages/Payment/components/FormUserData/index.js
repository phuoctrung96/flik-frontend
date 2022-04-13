import { Box } from '@mui/material';
import React from 'react';
import { Input, InputMask } from '../../../../components';
import { Icons, Images, RootStyles } from '../../../../utils';
import { fieldNames } from '../../Payment.data';

export const FormUserData = ({ handleOnBlur, formik }) => {
  const handleOnChange = e => {
    formik.handleChange(e);
  };

  return (
    <div className='payment__formInfor-personal'>
      <Box className='custom-input'>
        <Box sx={{ ...RootStyles.row }}>
          <img src={Images.flat} width={24} height={24} alt='' />
          <img src={Icons.chevronDown} width={18} height={18} alt='' />
        </Box>
        <Input
          label='Phone Number'
          type='phone'
          name={fieldNames.phone}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          value={formik.values.phone}
          placeholder='0821 2345 6789'
          inputComponent={InputMask}
        />
      </Box>
      <Input
        label='Email'
        inputClass='payment__mt-16'
        sx={{ mt: '8px' }}
        name={fieldNames.email}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        value={formik.values.email}
      />

      <Box sx={{ mt: '8px', ...RootStyles.rowBetween }}>
        <Input
          label='First Name'
          name={fieldNames.firstName}
          onChange={formik.handleChange}
          value={formik.values.firstName}
          className='payment__mr-8'
          onBlur={handleOnBlur}
          containerStyle={{ flex: 0.5 }}
        />
        <Input
          label='Last Name'
          name={fieldNames.lastName}
          onChange={formik.handleChange}
          onBlur={handleOnBlur}
          value={formik.values.lastName}
          containerStyle={{ flex: 0.5 }}
        />
      </Box>
    </div>
  );
};
