import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import validator from "validator";
import "react-phone-input-2/lib/style.css";
import {
  emailValidation,
  otpRequest,
  createTeacher,
  otpValidation,
} from "../../actions/Index";

const Signup = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [firstNameErr, setFirstNameErr] = useState({});
  const [lastNameErr, setLastNameErr] = useState({});
  const [passwordErr, setPasswordErr] = useState({});
  const [cnfPassword, setCnfPassword] = useState("");
  const [cnfPasswordErr, setCnfPasswordErr] = useState({});
  const [emailOne, setEmailOne] = useState("");
  const [emailErr, setEmailErr] = useState({});
  const [contactNum, setContactNum] = useState("");
  const [contactNumErr, setContactNumErr] = useState({});
  const [btnFlag,setBtnFlag]=useState(false);
  const [otpVal,setOtpVal] = useState('');
  const [otpFlag,setOtpFlag] = useState(false);
  const [otpStatus,setOtpStaus] = useState("Veriay Otp");
  const [emailFalseStatus,setFalseEmailStatus] = useState(false);
  const [emailTrueStatus,setTrueEmailStatus] = useState(false);



  const onSubmit = (e) => { 
    e.preventDefault();
    const isValid = formValidation();
    const teacherData ={
      email: emailOne,
      first_name:firstName,
      last_name:lastName,
      password: password,
      teacher_mobile: contactNum,
      teacher_referral_code: "Trial30",
      termsAndCondition: false,
      timezone: "Asia/Calcutta",
      type: "teacher",
  }
    if (isValid) {
       dispatch(createTeacher(teacherData, thirdCb));
    }
  };

  const thirdCb = (res) => {
    if (res.data.result) {
      history.push("/dashboard");
    } else {
      history.push("/dashboard");
    }
  };

  const handleOtp = (event) => {
    event.preventDefault();
    const connect = { mobile_number: contactNum };
    dispatch(otpRequest(connect,handleOtpCb));  
  };

  const handleOtpCb = (res) =>{
    if(res.data.result){
      setBtnFlag(true);
    }
  }

  const otpVali = (event) => {
    event.preventDefault();
    const otpObj = {mobile:contactNum,otp:otpVal}
    dispatch(otpValidation(otpObj, cbTwo));
  }

  const cbTwo = (res) => {
    if(res.data.result){
      setOtpFlag(true);
      setOtpStaus("Otp Verifyed");
    }
  }

  const emailCb = (res) =>{
    if(res.data.result){
      setTrueEmailStatus(true);
      setFalseEmailStatus(false);
    }
    else if(res.data.result===false){
      setTrueEmailStatus(false);
      setFalseEmailStatus(true);  
    }
  }
  const formValidation = () => {

    const firstNameErr = {};
    const lastNameErr = {};
    const passwordErr = {};
    const cnfPasswordErr = {};
    const emailErr = {};
    const contactNumErr = {};


    let isValid = true;

    if (firstName === "") {
      firstNameErr.firstNameNull = "First Name Requerd";
      isValid = false;
    }
    if (lastName === "") {
      lastNameErr.lastNameNull = "Last Name Requerd";
      isValid = false;
    }
    if (password === "") {
      passwordErr.passwordNull = "Password Requerd";
      isValid = false;
    }
    if (cnfPassword === "") {
      cnfPasswordErr.cnfPasswordNull = "Cnf Password Requerd";
      isValid = false;
    }
    if (emailOne === "") {
      emailErr.emailNull = "Email Address  Requerd";
      isValid = false;
    }
    if (!validator.isEmail(emailOne)) {
      emailErr.invalidFormate = "Invalid Email Formate";
      isValid = false;
    }
    if (contactNum === "") {
      contactNumErr.contactNumberNull = "Contact Number Requred";
      isValid = false;
    }
    if (contactNum.length !== 12) {
      contactNumErr.contactNumberLen = "12 Digit Requred";
      isValid = false;
    }

    setFirstNameErr(firstNameErr);
    setLastNameErr(lastNameErr);
    setPasswordErr(passwordErr);
    setCnfPasswordErr(cnfPasswordErr);
    setEmailErr(emailErr);
    setContactNumErr(contactNumErr);
    return isValid;
  };

  

  console.log(firstName);
  return (

    <div className="page-body">
      <div className="container-xl">
        <div className="page-header d-print-none">
          <div className="row align-items-center">
            <div className="col"></div>
          </div>
        </div>
      </div>

      <div style={{ marginLeft: "25%" }} className="page-body">
        <div className="container-xl">
          <div className="row row-cards">
            <div className="col-8">
              <form className="card">
                <div className="card-header">
                  <h4 className="card-title">Create new account</h4>
                </div>

                <div className="card-body">
                  <div className="row">
                    <div className="col-xs-12">
                      <div className="row">


                        <div className="col-md-6 col-xl-6">
                          <div className="mb-3">
                            <label className="form-label">First Name</label>
                            <input
                              type="text"
                              className="form-control"
                              name="first_name"
                              placeholder="Enter First Name"
                              value={firstName}
                              onChange={(e) => {
                                setFirstName(e.target.value);
                              }}
                            ></input>

                            {Object.keys(firstNameErr).map((key) => {
                              return (
                                <h6
                                  style={{ color: "red" }}
                                  className="form-label-description"
                                >
                                  {firstNameErr[key]}
                                </h6>
                              );
                            })}
                          </div>
                        </div>

                        <div className="col-md-6 col-xl-6">
                          <div className="mb-3">
                            <label className="form-label">Last Name</label>

                            <input
                              type="text"
                              className="form-control"
                              name="last_name"
                              placeholder="lastName"
                              value={lastName}
                              onChange={(e) => {
                                setLastName(e.target.value);
                              }}
                            ></input>

                            {Object.keys(lastNameErr).map((key) => {
                              return (
                                <h6
                                  style={{ color: "red" }}
                                  className="form-label-description"
                                >
                                  {lastNameErr[key]}
                                </h6>
                              );
                            })}
                          </div>
                        </div>

                        <div className="col-md-6 col-xl-6">
                          <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              placeholder="Enter Password"
                              value={password}
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                            ></input>

                            {Object.keys(passwordErr).map((key) => {
                              return (
                                <h6
                                  style={{ color: "red" }}
                                  className="form-label-description"
                                >
                                  {passwordErr[key]}
                                </h6>
                              );
                            })}
                          </div>
                        </div>

                        <div className="col-md-6 col-xl-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Conforim Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              name="cnf_password"
                              placeholder="Enter Password"
                              value={cnfPassword}
                              onChange={(e) => {
                                setCnfPassword(e.target.value);
                              }}
                            ></input>

                            {Object.keys(cnfPasswordErr).map((key) => {
                              return (
                                <h6
                                  style={{ color: "red" }}
                                  className="form-label-description"
                                >
                                  {cnfPasswordErr[key]}
                                </h6>
                              );
                            })}



                          </div>
                        </div>

                        <div className="col-md-6 col-xl-6">
                          <label className="form-label">Email address</label>
                          <div>
                            <input
                              // onChange={emailChange}
                              name="email"
                              type="email"
                              className="form-control"
                              aria-describedby="emailHelp"
                              placeholder="Enter email"
                              value={emailOne}
                              onChange={(e) => {
                                e.preventDefault();
                                setEmailOne(e.target.value);
                                const emailObj ={email:emailOne};
                                dispatch(emailValidation(emailObj, emailCb));
                              }}
                            />

                            {Object.keys(emailErr).map((key) => {
                              return (
                                <h6
                                  style={{ color: "red" }}
                                  className="form-label-description"
                                >
                                  {emailErr[key]}
                                </h6>
                              );
                            })}

                            
                            {emailTrueStatus ? (
                              <h5 style={{ color: "green" }}>
                                Sweet! that email id is available
                              </h5>
                            ) : null}
                            {emailFalseStatus ? (
                              <h5 style={{ color: "red" }}>
                                Opps! that email id is't available
                              </h5>
                            ) : null}
                          
                          </div>
                        </div>

                        <div className="col-md-6 col-xl-6 md-2">
                          <label className="form-label">Contact Number</label>
                          <input
                            disabled={btnFlag}
                            name="teacher_mobile"
                            type="number"
                            className="form-control"
                            aria-describedby="emailHelp"
                            placeholder="Enter Contact Number"
                            value={contactNum}
                        
                            onChange={(e) => {
                              setContactNum(e.target.value);
                            }}
                          />

                          {Object.keys(contactNumErr).map((key) => {
                            return (
                              <h6
                                style={{ color: "red" }}
                                className="form-label-description"
                              >
                                {contactNumErr[key]}
                              </h6>
                            );
                          })}

                         

                          <div
                            style={{ marginTop: "10px" }}
                            className="col-6 col-sm-6 col-md-6 col-xl mb-1"
                          >
                            <button
                              disabled={btnFlag}
                              onClick={handleOtp}
                              className="btn btn-info btn-pill w-100"
                            >
                              Get Otp
                            </button>
                          </div>
                        </div>

                        <div className="col-md-6 col-xl-6">
                          <div className="input-group mb-2">
                            <input
                              disabled={otpFlag}
                              type="text"
                              name="otp"
                              className="form-control"
                              placeholder="Search for…"
                              value={otpVal}
                              onChange={(e) => {
                                setOtpVal(e.target.value);
                              }}
                            ></input>

                            <button
                              disabled={otpFlag}
                              onClick={otpVali}
                              className="btn"
                              type="button"
                            >
                               {otpStatus}
                            </button>
                          </div>
                        </div>

                        <div
                          style={{ marginTop: "25px" }}
                          className="card-footer"
                        >
                          <div className="d-flex">
                            <button
                              onClick={onSubmit}
                              type="submit"
                              className="btn btn-primary ms-auto"
                            >
                              Create New account
                            </button>
                          </div>
                        </div>






                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Signup;
