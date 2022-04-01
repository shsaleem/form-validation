import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

import "./Form.scss";

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    confirmEmail: "",
    passport: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let result = await fetch("http://localhost:5000/users/signup", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="icon-box">
        <FaUserPlus size={50} className="icon" />
      </div>
      <h2>Registration</h2>
      <hr />
      <p>
        Create an account to register yourself in Pak-Visa System.
        <br />
        Or Signin with your existing account
      </p>
      <label>Given Name</label>
      <input
        type="text"
        name="name"
        id="name-input"
        value={user.name}
        onChange={handleChange}
        required
        pattern="^[a-zA-Z][A-Za-z0-9_@./#&+-]{3,15}$"
      />
      <label>Surname</label>
      <input
        type="text"
        name="surname"
        id="surname-input"
        value={user.surname}
        onChange={handleChange}
        required
        pattern="^[a-zA-Z][A-Za-z0-9_@./#&+-]{3,15}$"
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        id="email-input"
        value={user.email}
        onChange={handleChange}
        required
        pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
      />
      <label>Re-type your email</label>
      <input
        type="email"
        name="confirmEmail"
        value={user.confirmEmail}
        onChange={handleChange}
        required
        pattern={user.email}
      />
      <label>Passport Number</label>
      <input
        type="text"
        name="passport"
        value={user.passport}
        onChange={handleChange}
        required
        pattern="^[A-Za-z0-9]{3,15}$"
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        id="password-input"
        value={user.password}
        onChange={handleChange}
        required
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
      />
      <label>Re-type your Password</label>
      <input
        type="password"
        name="confirmPassword"
        value={user.confirmPassword}
        onChange={handleChange}
        required
        pattern={user.password}
      />
      <hr />
      <button type="submit">Save</button>
    </form>
  );
};

export default Form;
