const ServicesCard = ({ img, title, desc, type = 1 }) => {
  return (
    <div
      className={`relative col-span-1 flex h-auto min-h-[240px] w-full max-w-[240px] flex-col items-center justify-center gap-4 px-3 py-6 sm:min-h-[260px] ${
        type == 2 ? "services-dropShadow rounded-[36px] bg-white" : ""
      }`}
    >
      {type == 2 && (
        <div className="absolute -bottom-4 -left-4 -z-10 h-12 w-12 rounded-[20px] bg-primary sm:-bottom-[30px] sm:-left-[30px] sm:h-[60px] sm:w-[60px]" />
      )}
      <img src={img} alt="" className="h-[80px] w-[80px] object-contain sm:h-[100px]" />
      <h6 className="text-center font-poppins text-lg font-semibold text-[#1E1D4C] sm:text-[20px]">
        {title}
      </h6>
      <p className="text-center font-poppins text-sm font-medium text-[#5E6282] sm:text-[16px]">
        {desc}
      </p>
    </div>
  );
};

export default ServicesCard;
