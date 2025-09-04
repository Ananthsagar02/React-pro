function Login() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
            <h1>Login</h1>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
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
            <button className="btn btn-primary">Login</button>
          </div>

           <div className="mt-4">
            <a href="/">Home</a><br/>
            <a href="/create-account">SignUp</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
