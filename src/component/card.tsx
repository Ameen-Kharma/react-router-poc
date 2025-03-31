import React from "react";

// Define the types for the props
interface ButtonProps {
  text: string;
  onClick: () => void; // Function type with no parameters and no return value
  disabled?: boolean; // Optional prop
}

// Functional component using the props type
const Button: React.FC<ButtonProps> = ({ text, onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
