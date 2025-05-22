import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (!email.trim() || !password.trim()) return;

    localStorage.setItem("user", JSON.stringify({ email, password }));
    navigate("/user");
  };

  const inputClass = (hasError) =>
    `peer w-full px-4 pt-4 pb-2 text-sm border rounded-md outline-none ${
      hasError
        ? "border-red-500 focus:ring-red-500"
        : "border-[#CBCBCB] focus:border-[#6C25FF] focus:ring-[#6C25FF]"
    }`;

  const labelClass = (hasError) =>
    `absolute text-xs left-2 -top-2 px-1 bg-[#F7F8F9] ${
      hasError ? "text-red-500" : "text-[#6C25FF]"
    }`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F8F9] font-sans">
      <div className="w-[375px] border p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-[#1D2226]">
          Sign in to your PopX account
        </h1>
        <p className="text-sm text-[#1D2226] opacity-60 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
              className={inputClass(isSubmitted && !email.trim())}
            />
            <label className={labelClass(isSubmitted && !email.trim())}>
              Email address
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              className={inputClass(isSubmitted && !password.trim())}
            />
            <label className={labelClass(isSubmitted && !password.trim())}>
              Password
            </label>
          </div>

          <button
            type="submit"
            className="bg-[#6C25FF] hover:bg-[#5A1EDB] text-white w-full h-[46px] rounded-md text-base font-medium"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
