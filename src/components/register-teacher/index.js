import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import validator from "validator";
import "react-phone-input-2/lib/style.css";

import {
  emailValidation,
  otpRequest,
  createTeacher,
  otpValidation,
} from "../../actions/Index";

const Signup = () => {
  const [teacherData, setData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    teacher_mobile: "",
    teacher_referral_code: "Trial30",
    termsAndCondition: false,
    timezone: "Asia/Calcutta",
    type: "teacher",
  });

  const [otp, setOtp] = useState();

  const history = useHistory();
  const dispatch = useDispatch();

  const [flag, setflag] = useState(false);
  const [cnfPass, setPass] = useState({ cnf_password: "" });

  const [otpStatus, setOtpStatus] = useState("Verify Otp");
  const [btnFlag, setFlag] = useState(false);

  const [flags, setFlags] = useState({
    first_name_flag: false,
    last_name_flag: false,
    password_1_flag: false,
    password_2_flag: false,
    emailw_flag: false,
    contact_flag: false,
  });

  const email = { email: teacherData.email };
  const otpObj = { mobile: teacherData.teacher_mobile, otp };

  const thirdCb = (res) => {
    if (res.data.result) {
      history.push("/dashboard");
    } else {
      history.push("/dashboard");
      console.log("sumthing went rong");
    }
  };

  const cbTwo = (res) => {
    setOtpStatus("Otp Verifyed");
    setFlag(true);
  };

  const cb = (res) => {
    setflag(res.data.result);
  };

  console.log(otpObj);

  const otpValidation1 = () => {
    dispatch(otpValidation(otpObj, cbTwo));
  };

  const handleChange = (event) => {
    setData({ ...teacherData, [event.target.name]: event.target.value });
  };
  const handleCnfPassChenge = (event) => {
    setPass({ ...cnfPass, [event.target.name]: event.target.value });
    console.log(cnfPass);
  };

  const otpChenge = (event) => {
    setOtp({ otp: event.target.value });
  };

  // const connect = { mobile_number: teacherData.mobile_number };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (teacherData.first_name === "") {
      if (teacherData.last_name === "") {
        if (teacherData.password === "") {
          if (cnfPass.cnf_password === "") {
            if (teacherData.email === "") {
              if (teacherData.teacher_mobile === "") {
                setFlags({
                  ...flags,
                  first_name_flag: true,
                  last_name_flag: true,
                  password_1_flag: true,
                  password_2_flag: true,
                  emailw_flag: true,
                  contact_flag: true,
                });
              }
            } else {
              setFlags({
                ...flags,
                first_name_flag: true,
                last_name_flag: true,
                password_1_flag: true,
                password_2_flag: true,
              });
            }
          } else {
            setFlags({
              ...flags,
              first_name_flag: true,
              last_name_flag: true,
              password_1_flag: true,
            });
          }
        } else {
          setFlags({
            ...flags,
            first_name_flag: true,
            last_name_flag: true,
          });
        }
      } else {
        setFlags({
          ...flags,
          first_name_flag: true,
        });
      }
    } else if (teacherData.last_name === "") {
      if (teacherData.password === "") {
        if (cnfPass.cnf_password === "") {
          if (teacherData.email === "") {
            if (teacherData.teacher_mobile === "") {
              setFlags({
                ...flags,

                last_name_flag: true,
                password_1_flag: true,
                password_2_flag: true,
                emailw_flag: true,
                contact_flag: true,
              });
            } else {
              setFlags({
                ...flags,

                last_name_flag: true,
                password_1_flag: true,
                password_2_flag: true,
                emailw_flag: true,
              });
            }
          } else {
            setFlags({
              ...flags,

              last_name_flag: true,
              password_1_flag: true,
              password_2_flag: true,
            });
          }
        } else {
          setFlags({
            ...flags,

            last_name_flag: true,
            password_1_flag: true,
          });
        }
      } else {
        setFlags({
          ...flags,
          last_name_flag: true,
        });
      }
    } else if (teacherData.password === "") {
      if (cnfPass.cnf_password === "") {
        if (teacherData.email === "") {
          if (teacherData.teacher_mobile === "") {
            setFlags({
              ...flags,

              password_1_flag: true,
              password_2_flag: true,
              emailw_flag: true,
              contact_flag: true,
            });
          } else {
            setFlags({
              ...flags,
              password_1_flag: true,
              password_2_flag: true,
              emailw_flag: true,
            });
          }
        } else {
          setFlags({
            ...flags,
            password_1_flag: true,
            password_2_flag: true,
          });
        }
      } else {
        setFlags({
          ...flags,

          password_1_flag: true,
        });
      }
    } else if (cnfPass.cnf_password === "") {
      if (teacherData.email === "") {
        if (teacherData.teacher_mobile === "") {
          setFlags({
            ...flags,

            password_2_flag: true,
            emailw_flag: true,
            contact_flag: true,
          });
        } else {
          setFlags({
            ...flags,
            password_2_flag: true,
            emailw_flag: true,
          });
        }
      } else {
        setFlags({
          ...flags,

          password_2_flag: true,
        });
      }
    }
    else if (teacherData.email === "") {
      if (teacherData.teacher_mobile === "") {
        setFlags({
          ...flags,
          emailw_flag: true,
          contact_flag: true,
        });
      } else {
        setFlags({
          ...flags,
          contact_flag: true,
        });
      }
    } 
    else if (teacherData.teacher_mobile === "") {
      setFlags({
        ...flags,
      
        contact_flag: true,
      });
    }
    else {
      dispatch(createTeacher(teacherData, thirdCb));
    }

    
   
    
  };

  const emailChange = (event) => {
    event.preventDefault();
    setData({ ...teacherData, [event.target.name]: event.target.value });
    dispatch(emailValidation(email, cb));
  };

  const connect = { mobile_number: teacherData.teacher_mobile };

  console.log(teacherData);

  const handleOtp = (event) => {
    event.preventDefault();
    dispatch(otpRequest(connect));
  };

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
                              onChange={handleChange}
                              type="text"
                              className="form-control"
                              name="first_name"
                              placeholder="Enter First Name"
                            ></input>

                            {flags.first_name_flag ? (
                              <h6
                                style={{ color: "red" }}
                                className="form-label-description"
                              >
                                Required
                              </h6>
                            ) : null}
                          </div>
                        </div>

                        <div className="col-md-6 col-xl-6">
                          <div className="mb-3">
                            <label className="form-label">Last Name</label>

                            <input
                              onChange={handleChange}
                              type="text"
                              className="form-control"
                              name="last_name"
                              placeholder="lastName"
                            ></input>
                            {flags.last_name_flag ? (
                              <h6
                                style={{ color: "red" }}
                                className="form-label-description"
                              >
                                Required
                              </h6>
                            ) : null}
                          </div>
                        </div>

                        <div className="col-md-6 col-xl-6">
                          <div className="mb-3">
                            <label className="form-label">Password</label>

                            <input
                              onChange={handleChange}
                              type="password"
                              className="form-control"
                              name="password"
                              placeholder="Enter Password"
                            ></input>
                            {flags.password_1_flag ? (
                              <h6
                                style={{ color: "red" }}
                                className="form-label-description"
                              >
                                Required
                              </h6>
                            ) : null}
                          </div>
                        </div>

                        <div className="col-md-6 col-xl-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Conforim Password
                            </label>
                            <input
                              onChange={handleCnfPassChenge}
                              type="password"
                              className="form-control"
                              name="cnf_password"
                              placeholder="Enter Password"
                            ></input>

                            {flags.password_2_flag ? (
                              <h6
                                style={{ color: "red" }}
                                className="form-label-description"
                              >
                                Required
                              </h6>
                            ) : null}
                          </div>
                        </div>

                        <div className="col-md-6 col-xl-6">
                          <label className="form-label">Email address</label>
                          <div>
                            <input
                              onChange={emailChange}
                              name="email"
                              type="email"
                              className="form-control"
                              aria-describedby="emailHelp"
                              placeholder="Enter email"
                            />
                            {flags.emailw_flag ? (
                              <h6
                                style={{ color: "red" }}
                                className="form-label-description"
                              >
                                Required
                              </h6>
                            ) : null}

                            {flag ? (
                              <h5 style={{ color: "green" }}>
                                Sweet! that email id is available
                              </h5>
                            ) : null}
                          </div>
                        </div>

                        <div className="col-md-6 col-xl-6">
                          <label className="form-label">Contact Number</label>
                          <input
                            disabled={btnFlag}
                            onChange={handleChange}
                            name="teacher_mobile"
                            type="number"
                            className="form-control"
                            aria-describedby="emailHelp"
                            placeholder="Enter Contact Number"
                          />
                          {flags.contact_flag ? (
                            <h6
                              style={{ color: "red" }}
                              className="form-label-description"
                            >
                              Required
                            </h6>
                          ) : null}

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
                          <div className="input-group mb-1">
                            <input
                              disabled={btnFlag}
                              onChange={otpChenge}
                              type="text"
                              name="otp"
                              className="form-control"
                              placeholder="Search for…"
                            ></input>

                            <button
                              disabled={btnFlag}
                              onClick={otpValidation1}
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
                              onClick={handleSubmit}
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
