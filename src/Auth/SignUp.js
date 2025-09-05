import axios from "axios";
import { useState } from "react";
import { valiDation } from "../Utils/Utiles";

function SignUp() {
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [mobile, setMobile] = useState("");
  var [pwd, setPwd] = useState("");

  // Validate email and password
  const { emailValid, pwdValid } = valiDation(email, pwd);

  //error name
  var [nameError, setNameError] = useState("");
  var [emailError, setEmailError] = useState("");
  var [mobileError, setMobileError] = useState("");
  var [pwdError, setPwdError] = useState("");
  const [errorCount, setErrorCount] = useState();

  //api msg
  var [apiErrorMsg, setApiErrorMsg] = useState("");
  var [apiSucessMsg, setApiSucessMsg] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleMobileChange(event) {
    setMobile(event.target.value);
  }

  function handlePwdChange(event) {
    setPwd(event.target.value);
  }

  async function handleCreateAccount() {
    var noOfError = 0;

    if (name.length < 4) {
      setNameError("min 4 character");
      noOfError++;
    } else {
      setNameError("");
    }

    if (emailValid) {
      setEmailError("");
    } else {
      setEmailError("Email is not Formatt");
      noOfError++;
    }

    if (mobile.length === 10) {
      setMobileError("");
    } else {
      setMobileError("mobile number is invalid");
      noOfError++;
    }

    if (pwdValid) {
      setPwdError("");
    } else {
      setPwdError("min 8 character and Correct formatt");
      noOfError++;
    }
    setErrorCount(noOfError);

    if (noOfError == 0) {
      console.log("Calling API", noOfError);
      var apiInputData = {
        email: email,
        name: name,
        password: pwd,
        mobile: mobile,
      };
      try {
        var apiResponse = await axios.post(
          "https://api.softwareschool.co/auth/signup",
          apiInputData
        );
        console.log(apiResponse.data.result);
        if (apiResponse.data.result == "SUCCESS") {
          setApiSucessMsg(apiResponse.data.message);
          setApiErrorMsg("");
        } else {
          setApiErrorMsg(apiResponse.data.message);
          setApiSucessMsg("");
        }
      } catch (ex) {
        // This is Important to develop
        console.log(ex.message);
        setApiErrorMsg(ex.message);
        setApiSucessMsg("");
      }
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1>Create Account</h1>
          <div className="mb-3 mt-3">
            <label>Name</label>
            <input
              onChange={(event) => handleNameChange(event)}
              type="text"
              className="form-control"
              placeholder="Name"
            ></input>
            <div className="text-danger">{nameError}</div>
          </div>

          <div className="mb-3 mt-3">
            <label>Email</label>
            <input
              onChange={(event) => handleEmailChange(event)}
              type="text"
              className="form-control"
              placeholder="Email"
            ></input>
            <div className="text-danger">{emailError}</div>
          </div>

          <div className="mb-3 mt-3">
            <label>Mobile</label>
            <input
              onChange={(event) => handleMobileChange(event)}
              type="text"
              className="form-control"
              placeholder="Mobile"
            ></input>
            <div className="text-danger">{mobileError}</div>
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              onChange={(event) => handlePwdChange(event)}
              type="password"
              className="form-control"
              placeholder="Password"
            ></input>
            <div className="text-danger">{pwdError}</div>
            <p className="text-danger">{errorCount}</p>
          </div>

          <div>
            <button
              onClick={(e) => handleCreateAccount()}
              className="btn btn-warning"
            >
              Create Account
            </button>
          </div>

          <div className="mt-4">
            <a href="/">Home</a>
            <br />
            <a href="/login">Login</a>
          </div>
          <div className="mt-3 ">
            <div className="alert alert-danger">{apiErrorMsg}</div>

            <div className="alert alert-success">{apiSucessMsg}</div>
          </div>
        </div>
      </div>

      {name}
      <br />
      {email}
      <br />
      {mobile}
      <br />
      {pwd}
      <br />
    </div>
  );
}

export default SignUp;
