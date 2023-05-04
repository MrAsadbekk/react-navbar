import React, { useContext } from "react";
import { useState } from "react";
import "../Login/Login.scss";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setToken } = useContext(AuthContext);

  const navigete = useNavigate();

  const hadnleUserName = (e) => {
    return setUserName(e.target.value);
  };

  const hadnlePassword = (e) => {
    return setPassword(e.target.value);
  };

  const data = {
    email: userName,
    password: password,
  };

  const handleSubit = (e) => {
    e.preventDefault();
    // console.log(userName, password);

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status !== 200) {
          alert("Foydalanuvchi Topilmadi");
        }

        return response.json();
      })
      .then((data) => {
        console.log(data);

        if (data.token) {
          setToken(data.token);
          localStorage.setItem("token", data.token);
          navigete("/");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="wrapper">
      <div className="logo">
        <img
          src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
          alt=""
        />
      </div>
      <div className="text-center mt-4 name">Twitter</div>
      <form className="p-3 mt-3" onSubmit={handleSubit}>
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            value={userName}
            onChange={hadnleUserName}
            type="text"
            name="userName"
            id="userName"
            placeholder="Username"
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            value={password}
            onChange={hadnlePassword}
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
          />
        </div>
        <button className="btn mt-3" type="submit">
          Login
        </button>
      </form>
      <div className="text-center fs-6">
        <a href="#">Forget password?</a> or <a href="#">Sign up</a>
      </div>
    </div>
  );
};

export default Login;
