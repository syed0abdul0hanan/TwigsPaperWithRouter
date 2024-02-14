import React from 'react'

function SignUp() {

  return (
    <div className={LoginStyle.LoginContainer}>
      <div className={LoginStyle.logincontainer}>
        <h2>Login</h2>
        <form onSubmit={formHandler}>
          <div className={LoginStyle.inputgroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className={LoginStyle.inputgroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className={LoginStyle.btn}>
            Login
          </button>
        </form>
        <div className={LoginStyle.formfooter}>
          <a href="#">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}

export default SignUp