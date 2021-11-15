import axios from "axios";


export const login = (user, cb) => (dispatch) => {
  
  const head = {
    Accept: "application/json",
  };

  dispatch({
    type: "NEWACTION_ALL_REQUEST",
    payload: { contact_loader: true },
  });

  axios
    .post(`${"https://backend.mymots.com/api/login"}`, user, cb, {
      headers: head,
    })
    .then((res) => {
      if (res.data.result) {
        dispatch({
          type: "NEWACTION_ALL_SUCCESS",
          payload: {
            name: res.data.name, 
            role: res.data.role,
            contact_loader: false,

          },
        });
        cb(res);
      } else {
        dispatch({
          type: "NEWACTION_ALL_FAILED",
          payload: {
            contact_loader: false,
          },
        });
      }
    })

    .catch((err) => {
      dispatch({
        type: "NEWACTION_ALL_FAILED",
        payload: {
          contact_loader: false,
        },
      });
    });
};

export const emailValidation = (email, emailCb) => (dispatch) => {
  
  const head = {
    Accept: "application/json",
  };

  axios
    .post(`${"https://backend.mymots.com/api/validateUserEmail"}`, email, emailCb, {
      headers: head,
    })

    .then((res) => {
      if (res.data.result){
        dispatch({
          type: "EMAIL_VALIDATION_SUCCES",
          payload: {
            email_veryfaid : res.data.result,
          },
        });
        emailCb(res);
      } else {
        dispatch({
          type: "EMAIL_VALIDATION_FAILED",
          payload: {
            email_veryfaid : false,
          },
        }); 
        emailCb(res);
      }
    })
    .catch((err) => {
      dispatch({
        type: "ACTION_FAILED",
        payload: {
          email_veryfaid : false,
        },
    });
    

    
      
  });
   

};

export const otpRequest = (connect ,handleOtpCb) => (dispatch) => {

  const head = {
    Accept: "application/json",
  };

  
  axios
    .post(`${"https://backend.mymots.com/api/requestOtp"}`,  connect ,{
      headers: head,
    })

    .then((res) => {
      if (res.data.result){
        dispatch({
          type: "OTP_SUCCES",
          payload: {
            otp_status : res.data.result,
          },
        });
        handleOtpCb(res); 
      } else {
        dispatch({
          type: "OTP_FAILED",
          payload: {
            otp_status : false,
          },
        }); 
      
      }
    })
    .catch((err) => {
      dispatch({
        type: "ACTION_FAILED",
        payload: {
          otp_status: false,
        },
    });   
  });
  
   

};


export const otpValidation = (otpObj,cbTwo) => (dispatch) => {
  
  const head = {
    Accept: "application/json",
  };

  
  axios
    .post(`${"https://backend.mymots.com/api/validateOtp"}`, otpObj , cbTwo ,{
      headers: head,
    })


    .then((res) => {
      if (res.data.result){
        dispatch({
          type: "OTP_VALIDATION_SUCCES",
          payload: {
            otp_validation : res.data.result,
          },
    
        });
        cbTwo(res)
       
      } else {
        dispatch({
          type: "OTP_VALIDATION_FAILED",
          payload: {
            otp_validation: false,
          },
        }); 
      
      }
    })
    .catch((err) => {
      dispatch({
        type: "ACTION_VALIDATION_FAILED",
        payload: {
          otp_validation: false,
        },
    });   
  });
  
   

};


export const createTeacher = (teacherData,thirdCb) => (dispatch) => {
  
  const head = {
    Accept: "application/json",
  };

  
  axios
    .post(`${"https://backend.mymots.com/api/register"}`, teacherData ,thirdCb,{
      headers: head,
    })

    .then((res) => {
      if (res.data.result){
        dispatch({
          type: "TEACHER_DATA_SUCCES",
          payload: {
            teacher_status : res.data.result,
          },
          
        });
        thirdCb(res);
       
      } else {
        dispatch({
          type: "TEACHER_DATA_FAILED",
          payload: {
            teacher_status : false,
          },
        }); 
      
      }
    })
    .catch((err) => {
      dispatch({
        type: "TEACHER_DATA_FAILED",
        payload: {
          teacher_status: false,
        },
    });   
  });
   

};

export const Register = (teacherData,thirdCb) => (dispatch) => {
  
  const head = {
    Accept: "application/json",
  };

  
  axios
    .post(`${"https://backend.mymots.com/api/register"}`, teacherData , thirdCb,{
      headers: head,
    })
    .then((res) => {
      if (res.data.result){
        dispatch({
          type: "REGISTER_SUCCES",
          payload: {
            teacher_status : res.data.result,
          },
        });
       
      } else {
        dispatch({
          type: "REGISTER_FAILED",
          payload: {
            teacher_status : false,
          },
        }); 
      
      }
    })

    .catch((err) => {
      dispatch({
        type: "REGISTER_DATA_FAILED",
        payload: {
          teacher_status: false,
        },
    });   
  });

};








