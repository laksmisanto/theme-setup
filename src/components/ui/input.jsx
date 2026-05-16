// Input.jsx
import React from "react";

const Input = ({ label, type = "text", placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col mb-4">
      {label && <label className="mb-2 text-sm font-medium">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
};

export default Input;
