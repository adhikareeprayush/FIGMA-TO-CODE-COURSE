const Button = ({ name, classname = "", variant = "primary" }) => {
  const buttonStyle =
    variant === "primary"
      ? "bg-primary border-primary"
      : variant === "outline"
      ? "bg-transparent border-white"
      : "";
  return (
    <button
      className={`border-[2px] text-white px-3 py-2 rounded-[10px] cursor-pointer text-[17px] font-medium ${buttonStyle} ${classname}`}
    >
      {name}
    </button>
  );
};

export default Button;
