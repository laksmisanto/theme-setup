// Button.jsx
import React from "react";

const Button = ({ children, variant = "primary", onClick }) => {
  const baseStyles =
    "px-4 py-2 rounded-md font-medium transition-colors focus:outline-none";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    success: "bg-success text-white hover:bg-green-700",
    danger: "bg-danger text-white hover:bg-red-700",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
