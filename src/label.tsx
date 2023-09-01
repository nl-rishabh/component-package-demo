import React from "react";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = (props: LabelProps) => {
  return (
    <label
      className="text-gray-900 peer-disabled:cursor-not-allowed peer-disabled:text-gray-600 peer-disabled:opacity-75"
      {...props}
    >
      Label
    </label>
  );
};

export { Label };
