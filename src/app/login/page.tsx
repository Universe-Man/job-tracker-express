"use client"

import { useState } from "react";

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const handleUserEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value);
  };

  const handleUserPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(event.target.value);
  };

  return (
    <div className="login-container justify-center">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={userEmail}
        onChange={handleUserEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={userPassword}
        onChange={handleUserPasswordChange}
      />
    </div>
  )
}

export default LoginPage;