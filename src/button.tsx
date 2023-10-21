import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: ButtonProps) => {
  return (
    <button
      className="flex items-center justify-center px-4 py-3 text-base text-white bg-blue-600 rounded-md"
      {...props}
    >
      Button
    </button>
  );
};

export { Button };
