import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import validator from "validator";
import Loader from "react-loader-spinner";
import { login } from "../../actions/Index";

const Signup = () => {
  const [emailField, setEmail] = useState("");
  const [passwordField, setPassword] = useState("");
  const [loading, setLoading] = useState("");

  const userApi = useSelector((state) =>
    state.currentReducer.contact_loader
      ? state.currentReducer.contact_loader
      : false
  );

  // const contact_loader const state = useSelector(state => state.state)
  const [inputType, inputTypeSet] = useState("password");

  const [user, setUser] = useState({
    device_type: "web",
    email: "",
    enterprise_id: "",
    password: "",
    timezone: "Asia/Calcutta",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const cb = () => {
    history.push("/dashboard");
  };

  const iconClick = () => {
    if (inputType === "password") {
      inputTypeSet("text");
    } else {
      inputTypeSet("password");
    }
  };

  const signUpNav = () => {
    history.push("/register_teacher");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validator.isEmpty(user.email)) {
      setEmail("Required");
    } else if (validator.isEmpty(user.password)) {
      setPassword("Required");
    } else {
      if (validator.isEmail(user.email)) {
        dispatch(login(user, cb));
        setLoading(true);
      } else {
        alert("Enter valid Email!");
      }
    }
  };

  return (
    <div>
      <div className="page page-center">
        <div className="container-tight py-4">
          <div className="text-center mb-4"></div>
          <form
            className="card card-md"
            onSubmit={handleSubmit}
            action="."
            method="get"
            autoComplete="off"
          >
            <div className="card-body">
              <h2 className="card-title text-center mb-4">
                Login to your account
              </h2>

              <div className="mb-3">
                <label className="form-label"> </label>

                <input
                  tabIndex="1"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={user.email}
                  className="form-control"
                  placeholder="Enter email"
                ></input>


                <h6 style={{ color: "red" }} className="form-label-description">
                  <a href="/#">{emailField}</a>
                </h6>


              </div>

              <div className="mb-2">
                <label className="form-label">{/* Password */}</label>

                <div className="input-group input-group-flat">
                  <input
                    type={inputType}
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Password"
                    autoComplete="off"
                    tabIndex="2"
                  ></input>

                  <span onClick={iconClick} className="input-group-text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-eye"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="12" r="2"></circle>
                      <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path>
                    </svg>
                  </span>


                </div>



                <div style={{ marginTop: "15px" }} className="row">
                  <span className="form-label-description">
                    <a href="./forgot-password.html">I forgot password</a>
                  </span>
                </div>
                <h6 style={{ color: "red" }} className="form-label-description">
                  <a href="./forgot-password.html">{passwordField}</a>
                </h6>
              </div>

              <div className="form-footer">
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={loading}
                >
                  Sign in
                </button>
                <div style={{ marginTop: "20px" }} disable={true}>
                  {userApi ? (
                    <Loader
                      className="center"
                      type="TailSpin"
                      color="#00BFFF"
                      height={40}
                      width={30}
                    />
                  ) : null}

                  {userApi ? (
                    <h5 style={{ color: "red" }}>Invalid Credential</h5>
                  ) : null}

                  
                </div>
              </div>
            </div>

            <div className="hr-text">or</div>
            <div className="card-body"></div>

          </form>

          <div onClick={signUpNav} className="text-center text-muted mt-3">
            Don't have account yet? <a href="/register_teacher">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
