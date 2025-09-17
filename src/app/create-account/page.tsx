"use client"

import { useState } from "react";

const CreateAccountPage = () => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [userPasswordConfirm, setUserPasswordConfirm] = useState<string>("");
  const [formError, setFormError] = useState<string>("");

  const handleUserEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value);
  };

  const handleUserPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(event.target.value);
  };

  const handleUserPasswordConfirmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserPasswordConfirm(event.target.value);
  };

  const handleCreateAccount = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError("");
    if (userPassword !== userPasswordConfirm) {
      setFormError("Passwords Must Match");
    };
  };

  return (
    <div className="login-container justify-center">
      <h2>Create Account</h2>
      <form onSubmit={handleCreateAccount}>
        {formError && formError}
        <input
          type="email"
          placeholder="Email"
          value={userEmail}
          onChange={handleUserEmailChange}
          required
          />
        <input
          type="password"
          placeholder="Password"
          value={userPassword}
          onChange={handleUserPasswordChange}
          required
          minLength={8}
          />
        <input
          type="password"
          placeholder="Confirm Password"
          value={userPasswordConfirm}
          onChange={handleUserPasswordConfirmChange}
          required
          minLength={8}
          />
        <button type="submit">Create Account</button>
      </form>
    </div>
  )
}

export default CreateAccountPage;