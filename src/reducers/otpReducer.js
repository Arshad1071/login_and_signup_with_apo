export default function otp_status(otpStatus = {}, action) {
    switch (action.type) {
        case "OTP_NEWACTION_DATA": {
            return { ...otpStatus , ...action.payload };
        }
        case "OTP_ALL_REQUEST": {
          return { ...otpStatus  , ...action.payload, }
        }
        case "OTP_ALL_SUCCESS": {
          return { ...otpStatus  ,  ...action.payload }
        }
        case "OTP_ALL_FAILED": {
          return { ...otpStatus  ,...action.payload }
        }
      default: {
        return { ...otpStatus }
      }
    }
}
    