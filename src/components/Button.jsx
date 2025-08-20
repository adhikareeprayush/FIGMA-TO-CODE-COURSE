const Button = ({ name, classname = "" }) => {
  return (
    <button
      className={`bg-primary text-white px-3 py-2 m-3 rounded-[10px] cursor-pointer text-[17px] font-medium ${classname}`}
    >
      {name}
    </button>
  );
};

export default Button;
