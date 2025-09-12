const ServicesCard = ({ img, title, desc, type = 1 }) => {
  return (
    <div
      className={`col-span-1 flex flex-col gap-4 w-[220px] h-[260px] items-center justify-center relative ${
        type == 2 ? "rounded-[36px] services-dropShadow bg-white" : ""
      }`}
    >
      {type == 2 && (
        <div className="absolute -bottom-[30px] -left-[30px] bg-primary rounded-[20px] h-[60px] w-[60px] -z-10"></div>
      )}
      <img src={img} alt="" className="w-[80px] h-[100px] object-fit" />
      <h6 className="text-[20px] font-semibold font-poppins text-[#1E1D4C]">
        {title}
      </h6>
      <p className="text-[#5E6282] font-medium text-[16px] text-center">
        {desc}
      </p>
    </div>
  );
};

export default ServicesCard;
