import { useState } from "react";

function SignUp() {
  var [name, setName] = useState("Ananth Sagar");

  var [email, setEmail] = useState("");
  var [mobile, setMobile] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleMobileChange(event) {
    setMobile(event.target.value);
  }

  function handleCreateAccount() {
    console.log(name, email, mobile);
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
          </div>

          <div className="mb-3 mt-3">
            <label>Email</label>
            <input
              onChange={(event) => handleEmailChange(event)}
              type="text"
              className="form-control"
              placeholder="Email"
            ></input>
          </div>

          <div className="mb-3 mt-3">
            <label>Mobile</label>
            <input
              onChange={(event) => handleMobileChange(event)}
              type="text"
              className="form-control"
              placeholder="Mobile"
            ></input>
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            ></input>
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
        </div>
      </div>

      {name}
      <br />
      {email}
      <br />
      {mobile}
    </div>
  );
}

export default SignUp;
