import React from "react";
import { useState } from "react";
import { createUser } from "../../store/usersReducer";
import { useDispatch } from "react-redux";

const SignUpForm = ({ closeModal, onClickOutside }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (field) => {
    return (event) => {
      event.preventDefault();

      if (field === "email") {
        setEmail(event.target.value);
      } else {
        setPassword(event.target.value);
      }
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createUser(email, password));
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input type="text" value={email} onChange={handleOnChange("email")} />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={handleOnChange("password")}
        />
      </label>
    </form>
  );
};

export default SignUpForm;
