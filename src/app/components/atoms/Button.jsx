const Button = ({ text, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 md:w-[10rem] text-sm md:text-md cursor-pointer h-12 rounded-xl  hover:bg-yellow-300 text-black font-bold ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
