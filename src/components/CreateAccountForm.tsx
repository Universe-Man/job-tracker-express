"use client"

import { useState } from "react";

const CreateAccountForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");



  const handleCreateAccountSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(false);
    setMessage("");

    if (password !== passwordConfirm) {
      setMessage("Password Must Match");
      return;
    };

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, firstName, lastName }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to Create Account");
      };

      setMessage("Account Created"); // do i need this with the redirect?

      setEmail("");
      setFirstName("");
      setLastName("");

      // redirect to new user's dashboard
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    };
  };

  return (
    <form onSubmit={handleCreateAccountSubmit} className="create-account-form space-y-2 max-w-sm">
      <input
        className="border p-2 rounded w-full"
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        className="border p-2 rounded w-full"
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <input
        className="border p-2 rounded w-full"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="border p-2 rounded w-full"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        minLength={8}
      />
      <input
        className="border p-2 rounded w-full"
        type="password"
        placeholder="Confirm Password"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        required
        minLength={8}
      />
      {message && <p className="mt-2 text-red-400">{message}</p>}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        type="submit"
        disabled={loading}
      >
        {loading ? "Creating Account..." : "Create Account" }
      </button>
    </form>
  );
};

export default CreateAccountForm;