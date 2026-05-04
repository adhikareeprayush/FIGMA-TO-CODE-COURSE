import { galleryMosaic } from "../data/siteContent";

const Gallery = () => {
  const [a, b, c, d, e, f, g] = galleryMosaic;
  return (
    <div className="flex flex-col gap-4">
      <div className="grid w-full grid-cols-3 gap-3">
        <div className="col-span-1">
          <img src={a} alt="" className="h-[244px] w-full object-cover" />
        </div>
        <div className="col-span-2 row-span-3">
          <img src={b} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="col-span-1 h-[244px]">
          <img src={c} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="col-span-1 h-[244px]">
          <img src={d} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="col-span-2 h-[244px]">
          <img src={e} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="col-span-1 h-[244px]">
          <img src={f} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="col-span-3 h-[244px]">
          <img src={g} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
