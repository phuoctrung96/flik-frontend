import { Box, Link } from '@mui/material';
import React, { useRef, useState } from 'react';
import { RootStyles } from '../../utils';
import { Modal } from '../Modal';
import './styles.scss';

export const OtpModal = ({
  isVisibled,
  onClose,
  title,
  label = 'phone',
  value,
  onChange,
  timer,
  timeClock,
  onResendOTP,
  ...rest
}) => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const otp0 = useRef(null);
  const otp1 = useRef(null);
  const otp2 = useRef(null);
  const otp3 = useRef(null);
  const otp4 = useRef(null);
  const otp5 = useRef(null);

  const OtpInputArr = [
    { id: 0, ref: otp0 },
    { id: 1, ref: otp1 },
    { id: 2, ref: otp2 },
    { id: 3, ref: otp3 },
    { id: 4, ref: otp4 },
    { id: 5, ref: otp5 },
  ];
  const handleChangeOtp = (e, field) => {
    if ((e.key === 'Delete' || e.key === 'Backspace') && e.target.value === '') {
      field?.current?.previousSibling?.focus();
    }
    if (e.target.value !== '') {
      field?.current?.nextSibling?.focus();
    }
  };

  const handleChangeText = (e, index) => {
    if (e.target.value.length >= 2) return;
    otp[index] = e.target.value;
    setOtp([...otp]);
    onChange?.(otp);
  };

  const handleOnClickResentOtp = (e) => {
    e.preventDefault();
    onResendOTP();
    setOtp(new Array(6).fill(''));
  };

  return (
    <Modal isVisibled={isVisibled} onClose={onClose} isBack fullScreen {...rest}>
      <Box className="otpModal">
        <h4 className="otpModal__title">Confirm OTP</h4>
        <p className="otpModal__description">
          This is the first time you have authorized this device. Please confirm the OTP we sent to
          your {label} <span>{value}</span>
        </p>
        <Box sx={{ ...RootStyles.rowBetween, mt: '24px', mb: '16px' }}>
          {OtpInputArr.map((otpItem, index) => (
            <input
              key={otpItem.id.toString()}
              name={`otp${index}`}
              ref={otpItem.ref}
              value={otp[index]}
              type="number"
              onChange={(e) => handleChangeText(e, index)}
              onKeyUp={(e) => handleChangeOtp(e, otpItem.ref)}
              variant="outlined"
              className="otpModal__input"
            />
          ))}
        </Box>

        <Box className="otpModal__footer">
          <p className="otpModal__text" style={{ margin: 0 }}>
            {timer === 0 || timer === null ? (
              <>
                {' '}
                Didn't get it?{' '}
                <Link onClick={handleOnClickResentOtp} className="otpModal__link with-click">
                  Resend OTP
                </Link>
              </>
            ) : (
              <>
                Didn't get it?
                <span className="otpModal__link"> Resend OTP in {timeClock}</span>
              </>
            )}
          </p>
        </Box>
      </Box>
    </Modal>
  );
};
