import React, { useState, useEffect } from "react";
import { getActiveUser, loginUser } from "../../store/usersReducer";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button } from "@chakra-ui/react";
import FollowButtonLinks from "./FollowButtonLinks";

import "./LoginForm.scss";

const LoginForm = ({ closeModal }) => {
  const dispatch = useDispatch();

  const activeUser = useSelector(getActiveUser());

  // automatically close modal if user is logged in by
  // either clicking the demo user button or the sign in button
  if (activeUser) {
    closeModal();
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  // Login in the user when the sign in button is clicked
  // if credential are valid
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    dispatch(loginUser({ email, password })).catch(async (res) => {
      if (res?.message) {
        setErrors([res.message]);
      } else if (res) {
        setErrors([res]);
      } else {
        setErrors([res.statusText]);
      }
    });
  };

  // Sign in as a demo user
  const demoUserHandleOnClick = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email: "mlkz@gmail.com", password: "Password123!" }));

    closeModal();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="login_form">
        <ul className="errors">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <label className="login_form__label form_first_element">
          Email
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
        </label>
        <label className="login_form__label">
          Password
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />
        </label>
        <div className="button_group">
          <Button className="sign-in-btn" type="submit">
            Sign in
          </Button>
          <Button className="demo-user-btn" onClick={demoUserHandleOnClick}>
            Demo User
          </Button>
          <FollowButtonLinks />
        </div>
      </form>
    </>
  );
};

export default LoginForm;
