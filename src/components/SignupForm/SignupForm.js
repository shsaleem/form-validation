import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

import "./SignupForm.scss";
import Label from "../common/Label/Label";
import InputField from "../common/InputField/InputField";
import Button from "../common/Button/Button";

const SignupForm = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    confirmEmail: "",
    passport: "",
    password: "",
    confirmPassword: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let result = await fetch("http://localhost:5000/users/signup", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      setIsSubmitted(true);
    } catch (error) {
      console.log(error);
    }
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
      <div className="form-group">
        <Label text="Given name" />
        <InputField
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          required
          pattern="^[a-zA-Z][A-Za-z0-9_@./#&+-]{3,15}$"
        />
      </div>
      <div className="form-group">
        <Label text="Surname" />
        <InputField
          type="text"
          name="surname"
          value={user.surname}
          onChange={handleChange}
          required
          pattern="^[a-zA-Z][A-Za-z0-9_@./#&+-]{3,15}$"
        />
      </div>
      <div className="form-group">
        <Label text="Email" />
        <InputField
          type="email"
          name="email"
          id="email-input"
          value={user.email}
          onChange={handleChange}
          required
          pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
        />
      </div>
      <div className="form-group">
        <Label text="Re-type your email" />
        <InputField
          type="email"
          name="confirmEmail"
          value={user.confirmEmail}
          onChange={handleChange}
          required
          pattern={user.email}
        />
      </div>
      <div className="form-group">
        <Label text="Passport Number" />
        <InputField
          type="text"
          name="passport"
          value={user.passport}
          onChange={handleChange}
          required
          pattern="^[A-Za-z0-9]{3,15}$"
        />
      </div>
      <div className="form-group">
        <Label text="Password" />
        <InputField
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
        />
      </div>
      <div className="form-group">
        <Label text="Re-type your Password" />
        <InputField
          type="password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          required
          pattern={user.password}
        />
      </div>
      <hr />
      <Button type="submit" text={isSubmitted ? "User Registered" : "Save"} />
    </form>
  );
};

export default SignupForm;
