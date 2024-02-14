import React, { useCallback, useEffect, useState } from "react";

// let logoutTime;
const AuthContext = React.createContext({
  token: "",
  user: null,
  isLoggedIn: false,
  login(token, user) {},
  logout() {},
});

// const calculateRemainingTime = (expirationTime) => {
//   const currentTime = new Date().getTime();
//   const transformExpirationTime = new Date(expirationTime).getTime();

//   const remainingDuration = transformExpirationTime - currentTime;

//   return remainingDuration;
// };

const receivesStoredToken = () => {
  const storedToken = localStorage.getItem("AuthToken");
  const storedUser = localStorage.getItem("user");
  // const storedExpirationTime = localStorage.getItem("ExpirationTime");

  // const remainingTime = calculateRemainingTime(storedExpirationTime);

  // if (remainingTime <= 60000) {
  //   localStorage.removeItem("AuthToken");
  //   localStorage.removeItem("ExpirationTime");
  //   return null;
  // }

  // return { token: storedToken, expiresIn: remainingTime };
  return { token: storedToken, user: storedUser };
};
export const AuthContextProvider = (props) => {
  const tokenData = receivesStoredToken();
  let initState;
  let initUser;
  if (tokenData) {
    initState = tokenData.token;
    initUser = tokenData.user;
  }
  const [token, setToken] = useState(initState);
  const [user, setUser] = useState(initUser);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("AuthToken");
    localStorage.removeItem("user");
    // localStorage.removeItem("ExpirationTime");

    // if (logoutTime) {
    //   clearTimeout(logoutTime);
    // }
  }, []);

  const loginHandler = (token, user) => {
    setToken(token);
    setUser(user);
    localStorage.setItem("AuthToken", token);
    localStorage.setItem("user", JSON.stringify(user));
    // localStorage.setItem("ExpirationTime", expirationTime);
    // const logoutTimer = calculateRemainingTime(expirationTime);
    // logoutTime = setTimeout(logoutHandler, logoutTimer);
  };

  // useEffect(() => {
  //   if (tokenData) {
  //     console.log(tokenData.expiresIn);
  //     logoutTime = setTimeout(logoutHandler, tokenData.expiresIn);
  //   }
  // }, [tokenData, logoutHandler]);

  const contextValue = {
    user: user,
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
