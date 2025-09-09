import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import Login from "./Auth/Login";
import "./styles.css";
import SignUp from "./Auth/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Home from "./Home";
import Home from "./Home/Home";
import List from "./Courses/List";
import ProductList from "./Products/ProductList";
import ProfileUpdate from "./Profile/ProfileUpdate";
import UserList from "./Users/UserList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<List />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/profile-update" element={<ProfileUpdate />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
