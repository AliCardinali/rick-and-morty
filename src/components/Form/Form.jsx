import React from "react";
import { validation } from "./Validation";

export default function Form(props) {
  console.log(props);
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });

  const [errors, SetErrors] = React.useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    SetErrors(
      validation({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.Login(userData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>UserName:</label>
          <input
            name="username"
            type="text"
            value={userData.username}
            onChange={handleInputChange}
          />
          <p style={{ color: "red" }}>{errors.username}</p>
        </div>
        <div>
          <label>Password:</label>
          <input
            name="password"
            type="password"
            value={userData.password}
            onChange={handleInputChange}
          />
          <p style={{ color: "red" }}>{errors.password}</p>
        </div>
        <button>Login</button>
      </form>
    </>
  );
}
