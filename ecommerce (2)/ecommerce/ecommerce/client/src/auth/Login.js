import React, { useState } from "react";
import classes from "./Login.module.css";
import { useHistory } from "react-router-dom";
import api from "../api";
import axios from "axios"


export const Login = ({ setIsAuthenticated }) => {
  const history = useHistory();
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    console.log(inputs)
  };

  const handleLoginSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    await api
      .userAuthenticate(inputs)
      .then((res) => {
        console.log("user auth", res);
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("userId", res?.data?.id);
        setInputs({});
        setIsAuthenticated(true);
        history.push("/products");
      })
      .catch((err) => {
        setError(
          err?.response?.data?.message ||
            "The Authentication Service is under maintenance and it will be back soon!, Thanks for your patience!!"
        );
      })
      .finally(() => setIsLoading(false));
  };
  const handleRegisterSubmit=async(event)=>{
    event.preventDefault();
    await axios
      .post("http://localhost:5000/api/user/register", {
        username: inputs["username"],
        password: inputs["password"],
        email: inputs["Email"],
      })
      .then((response) => {
         console.log(response.data);
       setInputs({})
       setIsLogin(true)
       
        })

      .catch((err) => {
        setError(
          err?.response?.data?.message ||
            "The Authentication Service is under maintenance and it will be back soon!, Thanks for your patience!!"
        );
      })
      .finally(() => setIsLoading(false));
  
  }
  // const handleRegisterSubmit = async (event) => {
  //   setIsLoading(true);
  //   event.preventDefault();
  //   await api
  //     .userRegister(inputs)
  //     .then((res) => {
  //       console.log("user register", res);
  //       setInputs(null);
  //       setIsLogin(true);
  //     })
  //     .catch((err) => {
  //       setError(
  //         err?.response?.data?.message ||
  //           "User can't be registered at the moment, please try again later!"
  //       );
  //     })
  //     .finally(() => setIsLoading(false));
  // };

  return (
    <>
      {isLogin ? (
        <form className={classes.formContainer} onSubmit={handleLoginSubmit}>
          <label className={classes.labelogin}>Login</label>
          <label className={classes.label}>
            <span className={classes.labelText}>Username:</span>
            <input
              className={classes.input}
              value={inputs["username"]}
              type="text"
              name="username"
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </label>
          <label className={classes.label}>
            <span className={classes.labelText}>Password:</span>
            <input
              className={classes.input}
              value={inputs["password"]}
              type="password"
              name="password"
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </label>
          <div className={classes.firstreg}>

            <div> first time ??{" "}</div>

            <div >  
          <button className={classes.regr}
              onClick={() => {
                setIsLogin(false);
              }}
            >
             
              Register
            </button>
            </div>


          </div>
          <input className={classes.submit} type="submit" />
          {error && <p className={classes.errorMsg}>{error}</p>}
          {isLoading && <p>isLoading ... </p>}
        </form>
      ) : (
        <form className={classes.formContainer} onSubmit={handleRegisterSubmit}>
          <label className={classes.labelogin}>Register</label>
          <label className={classes.label}>
            <span className={classes.labelText}>Username:</span>
            <input
              className={classes.input}
              value={inputs["username"]}
              type="text"
              name="username"
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </label>
          <label className={classes.label}>
            <span className={classes.labelText}>Password:</span>
            <input
              className={classes.input}
              value={inputs["password"]}
              type="password"
              name="password"
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </label>
          <label className={classes.label}>
            <span className={classes.labelText}>Email:</span>
            <input
              className={classes.input}
              value={inputs["Email"]}
              type="Email"
              name="Email"
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </label>
          
          <div>
            <button className={classes.submit}
              onClick={() => {
                setIsLogin(true);
              }}
            >
              Login
            </button>
          </div>
          <br/>
          <br/>
          <br/>
          <input className={classes.submit} type="submit" />
          {error && <p className={classes.errorMsg}>{error}</p>}
          {isLoading && <p>isLoading ... </p>}
        </form>
      )}
    </>
  );
};
