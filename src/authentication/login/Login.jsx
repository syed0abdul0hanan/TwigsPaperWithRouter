import React, { useContext, useEffect, useState } from "react";
import LoginStyle from "./LoginStyle.module.css";
import AuthContext from "../../store/context/auth-context";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userEmail, setUserEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("pass123");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const ctxAuth = useContext(AuthContext);
  const history = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDrITPiYBvR2QhZK47eJSDmKqr48ORWkrY";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDrITPiYBvR2QhZK47eJSDmKqr48ORWkrY";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: userEmail,
        password: password,
        displayName: "Hannan",
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            // show an error modal
            let errorMessage = "Authentication failed!";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }

            throw new Error(errorMessage);
            // alert(errorMessage);
          });
        }
      })
      .then((data) => {
        // const expirationTime = new Date(
        //   new Date().getTime() + +data.expiresIn * 100
        // );

        ctxAuth.login(data.idToken, {email:data.email,username :data.displayName});
        
        history("/profile");
      })
      .catch((err) => {
        toast.error('Here is your toast.');
      });
  };

  const loginSwitchHandler = () => {
    setIsLogin(true);
  };
  const signUpSwitchHandler = () => {
    setIsLogin(false);
  };

  return (
    <div className={LoginStyle.LoginContainer}>
      <div className={LoginStyle.logincontainer}>
        <div className={LoginStyle.AuthButtons}>
          <div
            onClick={loginSwitchHandler}
            className={`${LoginStyle.AuthLogin} ${
              isLogin ? LoginStyle["active-btn"] : ""
            } `}
          >
            <h2>Login</h2>
          </div>
          <div
            onClick={signUpSwitchHandler}
            className={`${LoginStyle.AuthLogin} ${
              !isLogin ? LoginStyle["active-btn"] : ""
            } `}
          >
            <h2>Signup</h2>
          </div>
        </div>

        <form onSubmit={submitHandler}>
          <div className={LoginStyle.inputgroup}>
            <input
              type="text"
              id="username"
              placeholder="Email Address"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className={LoginStyle.inputgroup}>
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {isLogin ? (
            ""
          ) : (
            <div className={LoginStyle.inputgroup}>
              <input
                type="password"
                placeholder="Confirm Password"
                id="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          )}

          {isLogin && (
            <div className={LoginStyle.formfooter}>
              <a href="#">Forgot password?</a>
            </div>
          )}
          <button type="submit" className={LoginStyle.btn}>
            {!isLogin ? "SignUp" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
