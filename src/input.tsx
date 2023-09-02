import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return (
    <input
      className="flex w-full h-10 px-3 py-2 border rounded appearance-none focus-ring-primary invalid:focus:focus-ring-danger border-primary-default bg-primary-default text-primary-default placeholder:text-primary-muted disabled:cursor-not-allowed disabled:bg-component-primary-default disabled:opacity-75"
      {...props}
    />
  );
};

export { Input };
