import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Input({ id, type = "text", placeholder, value, onChange, hasError }) {
  const inputClass = `peer w-full px-4 pt-4 pb-2 text-sm border rounded-md outline-none ${
    hasError
      ? "border-red-500 focus:ring-red-500"
      : "border-[#CBCBCB] focus:border-[#6C25FF] focus:ring-[#6C25FF]"
  }`;

  const labelClass = `absolute text-xs left-2 -top-2 px-1 bg-[#F7F8F9] ${
    hasError ? "text-red-500" : "text-[#6C25FF]"
  }`;

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        className={inputClass}
      />
      <label htmlFor={id} className={labelClass}>
        {placeholder}
      </label>
    </div>
  );
}

export default function Signup() {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({ ...prev, agency: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const { username, phone, email, password, company } = formData;
    if (
      !username.trim() ||
      !phone.trim() ||
      !email.trim() ||
      !password.trim() ||
      !company.trim()
    )
      return;

    localStorage.setItem("user", JSON.stringify(formData));
    navigate("/user");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F8F9] font-sans">
      <div className="w-[375px] border p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-[#1D2226] leading-9">
          Create your <br/> PopX account
        </h1>

        <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
          <Input
            id="username"
            placeholder="Full Name *"
            value={formData.username}
            onChange={handleChange}
            hasError={isSubmitted && !formData.username.trim()}
          />
          <Input
            id="phone"
            type="tel"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={handleChange}
            hasError={isSubmitted && !formData.phone.trim()}
          />
          <Input
            id="email"
            type="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
            hasError={isSubmitted && !formData.email.trim()}
          />
          <Input
            id="password"
            type="password"
            placeholder="Password *"
            value={formData.password}
            onChange={handleChange}
            hasError={isSubmitted && !formData.password.trim()}
          />
          <Input
            id="company"
            placeholder="Company Name *"
            value={formData.company}
            onChange={handleChange}
            hasError={isSubmitted && !formData.company.trim()}
          />

          <div>
            <span className="text-sm text-[#1D2226]">
              Are you an Agency?<span className="text-red-500 ml-1">*</span>
            </span>
            <div className="flex gap-6 mt-2">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="agency"
                  value="Yes"
                  checked={formData.agency === "Yes"}
                  onChange={handleRadioChange}
                  className="accent-[#6C25FF] size-4 cursor-pointer"
                />
                Yes
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="agency"
                  value="No"
                  checked={formData.agency === "No"}
                  onChange={handleRadioChange}
                  className="accent-[#6C25FF] size-4 cursor-pointer"
                />
                No
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#6C25FF] hover:bg-[#5A1EDB] text-white w-full h-[46px] rounded-md text-base font-medium mt-8"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
