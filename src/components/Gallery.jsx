import image from "../assets/hero2.jpg";

const Gallery = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Grid */}
      <div className="grid grid-cols-3 w-full gap-3">
        <div className="col-span-1">
          <img src={image} alt="" className="w-full h-[244px] object-cover" />
        </div>
        <div className="col-span-2 row-span-3">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 h-[244px]">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 h-[244px]">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-2 h-[244px]">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 h-[244px]">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-3 h-[244px]">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
