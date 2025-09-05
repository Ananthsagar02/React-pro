import { valiDation } from "../Utils/Utiles";
import axios from "axios";
import { useState } from "react";

function Login() {
  var [email, setEmail] = useState("");
  var [pwd, setPwd] = useState("");

  // Validate email and password
  const { emailValid, pwdValid } = valiDation(email, pwd);

  //error name
  var [emailError, setEmailError] = useState("");
  var [pwdError, setPwdError] = useState("");

  const [errorCount, setErrorCount] = useState();

  //api msg
  var [apiErrorMsg, setApiErrorMsg] = useState("");
  var [apiSucessMsg, setApiSucessMsg] = useState("");

  function handleEmailChanges(event) {
    setEmail(event.target.value);
  }

  function handlePwdChanges(event) {
    setPwd(event.target.value);
  }

  async function handleLogin() {
    var noOfError = 0;

    if (emailValid) {
      setEmailError("");
    } else {
      setEmailError("Email is not orrect Formatt");
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
      var emailData = {
        email: email,
        password: pwd,
      };

      try {
        var res = await axios.post(
          "https://api.softwareschool.co/auth/login",
          emailData
        );
        console.log(res)
        if (res.data.result == "SUCCESS") {
          setApiSucessMsg(res.data.message);
          setApiErrorMsg("");
          console.log(res.data.data.userId)
          console.log(res.data.data.token)
          localStorage.setItem('LoginUserID', res.data.data.userId)
          window.location = '/';
        } else {
          setApiErrorMsg(res.data.message);
          setApiSucessMsg("");
        }
      } catch (ex) { // This is Important to develop
        console.log(ex.message);
        setApiErrorMsg(ex.message)
        setApiSucessMsg("");
      }
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1>Login</h1>
          <div className="mb-3">
            <label>Email</label>
            <input
              onChange={(event) => handleEmailChanges(event)}
              type="text"
              className="form-control"
              placeholder="Email"
            ></input>
            <div className="text-danger">{emailError}</div>
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              onChange={(event) => handlePwdChanges(event)}
              type="password"
              className="form-control"
              placeholder="Password"
            ></input>
            <div className="text-danger">{pwdError}</div>
          </div>
          <p className="text-danger">{errorCount}</p>
          <div>
            <button className="btn btn-primary" onClick={(e) => handleLogin()}>
              Login
            </button>
          </div>

          <div className="mt-4">
            <a href="/">Home</a>
            <br />
            <a href="/create-account">SignUp</a>
          </div>

          <div className="mt-3 ">
            <div className="alert alert-danger">{apiErrorMsg}</div>
            <div className="alert alert-success">{apiSucessMsg}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
