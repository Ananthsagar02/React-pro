import Form from "./Form";

function Home() {
  var getUserID = localStorage.getItem("LoginUserID");
  console.log(getUserID);

  function handleLogout() {
    localStorage.clear();
    window.location.reload() // '/'
  }
  return (
    <div className="">
      <div className="">
        <h3>Coding Homepage</h3>

        {getUserID === null && (
          <div>
            <a href="/login">Login</a>
            <br />
            <a href="/create-account">SignUp</a>
          </div>
        )}

        {getUserID != null && (
          <div>
            <button onClick={e => handleLogout()}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
