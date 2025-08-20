const Circle = ({ classname, variant = "image" }) => {
  return (
    <div
      className={`h-[36px] w-[36px] bg-white rounded-full border-[2px] border-white flex items-center justify-center shrink-0 absolute transform top-1/2 -translate-y-1/2 ${classname}`}
    >
      {variant === "image" ? (
        <img
          src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover rounded-full"
        />
      ) : (
        <div className="flex w-full bg-primary items-center justify-center text-white h-full rounded-full">
          +
        </div>
      )}
    </div>
  );
};

export default Circle;
