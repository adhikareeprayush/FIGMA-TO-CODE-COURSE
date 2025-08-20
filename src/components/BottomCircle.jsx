const BottomCircle = () => {
  return (
    <div className="flex items-center justify-center border-[1px] border-dashed border-white rounded-full w-[392px] h-[392px] absolute -bottom-[196px]">
      <div className="flex items-center justify-center border-[1px] border-dashed border-white rounded-full w-[200px] h-[200px] text-white relative">
        <p className="absolute transform top-[50px] left-1/2 -translate-x-1/2">
          Scroll
        </p>
      </div>
    </div>
  );
};

export default BottomCircle;
