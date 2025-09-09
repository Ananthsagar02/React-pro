import React, { useEffect, useState } from "react";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import axios from "axios";

function UserList() {
  let [users, setUsers] = useState([]); // 30 users
  let [userData, setUserData] = useState([]); // filter data to search. // 30 users

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [gender, setGender] = useState("");
  let [age, setAge] = useState("");

  function handleEditBtn(user) {
    setName(user.firstName);
    setEmail(user.email);
    setGender(user.gender);
    setAge(user.age);
  }

  let searchText = "";

  function handleSearchTextChange(e) {
    searchText = e.target.value;
    console.log(searchText);
    let searchData = userData.filter((user) => {
      let isContains = user.firstName
        .toLowerCase()
        .includes(searchText.toLowerCase());
      return isContains;
    });
    setUsers(searchData); // to display
  }
  useEffect(() => {
    async function getUsers() {
      let usersResponse = await axios.get("https://dummyjson.com/users");
      setUsers([...usersResponse.data.users]); // 30
      setUserData([...usersResponse.data.users]); // 30
    }
    getUsers();
  }, []);

  //   let a = [1, 2, 3, 4];
  //   let b = [...a];
  //   console.log(a, "a");
  //   console.log(b, "b");
  //   b[1] = 5;
  //   a[1] = 6;
  //   console.log(a, "a");
  //   console.log(b, "b");

  function handleNameSort() {
    let nameSort = users.sort((user1, user2) => {
      if (user1.firstName.toLowerCase() > user2.firstName.toLowerCase()) {
        return -1;
      } else {
        return 1;
      }
    });
    console.log(nameSort);
    setUsers([...nameSort]); // You use setUsers([...nameSort]); when you want to update the state with a new array that is a copy of the sorted array, rather than the original (possibly mutated) array.
    //Use setUsers([...array]) whenever you want to update state with a new array, especially after mutating operations like sort(). This keeps React state predictable and ensures UI updates.
  }

  function handleEmailSort() {
    console.log("2");
    let emailSort = users.sort((email1, email2) => {
      if (email1.email.toLowerCase() > email2.email.toLowerCase()) {
        return -1;
      } else {
        return 1;
      }
    });
    setUsers([...emailSort]); // best practices
  }

  const handleDelete = async (user) => {
    let apiResponse = await axios.delete(
      "https://dummyjson.com/users/" + user.id
    );
    let tempData = users.filter((tempUser) => tempUser.id !== user.id); //This line removes the user you want to delete from the users array, creating a new array without that user.
    setUsers([...tempData]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Header />
        </div>
      </div>

      <div className="row mt-5 mb-5">
        <div className="col-5">
          <input
            type="text"
            className="form-control mb-2"
            onChange={(e) => handleSearchTextChange(e)}
            placeholder="Search By Name"
          />
        </div>
        <div className="col-8">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>User ID</th>
                <th onClick={(e) => handleNameSort()}>Name</th>
                <th onClick={(e) => handleEmailSort()}>Email</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.age}</td>
                  <td>
                    <button
                      className="btn btn-primary me-2"
                      onClick={(e) => handleEditBtn(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handleDelete(user)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-4">
          <div className="mb-2">
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Email</label>
            <input
              type="text"
              placeholder="Email"
              className="form-control"
              value={email}
            />
          </div>

          <div className="mb-2">
            <label>Gender</label>
            <input
              type="text"
              placeholder="Gender"
              className="form-control"
              value={gender}
            />
          </div>

          <div className="mb-2">
            <label>Age</label>
            <input
              type="text"
              placeholder="Age"
              className="form-control"
              value={age}
            />
          </div>

          <div>
            <button className="btn btn-warning">Update</button>
          </div>
        </div>
      </div>

      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default UserList;
