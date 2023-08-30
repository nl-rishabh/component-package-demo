export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = () => {
  return (
    <button className="bg-red-600 text-white px-4 py-3 rounded-md flex items-center justify-center text-base">
      Button
    </button>
  );
};

export { Button };
