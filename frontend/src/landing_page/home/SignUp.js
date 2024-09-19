import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/signup`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container">
      <h2   className="mt-5 mb-3"  style={{textAlign:"center"}} >Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-lable" htmlFor="email">Email</label>
          <input
          className="form-control"
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-lable" htmlFor="email">Username</label>
          <input
          className="form-control"
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-lable" htmlFor="password">Password</label>
          <input
          className="form-control"
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button  className="btn btn-success" type="submit">Submit</button>
        <span>
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;