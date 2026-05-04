import star from "../assets/trendy/star_fill.svg";
import { tourInformation } from "../data/siteContent";

const Information = () => {
  const d = tourInformation;
  return (
    <>
      <div className="flex items-start gap-3">
        <div className="flex flex-col gap-1">
          <h3 className="font-volkhov text-[32px] font-bold text-[#181E4B]">
            {d.title}
          </h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <img key={i} src={star} alt="" width={24} />
              ))}
            </div>
            <span className="font-poppins text-[16px] font-medium text-[#5E6282]">
              ({d.reviewCount})
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <span className="font-poppins text-[29px] font-medium text-primary">
            {d.priceMain}
          </span>
          <span className="font-poppins text-[29px] font-medium text-[#7D7D7D]">
            /
          </span>
          <span className="font-poppins text-[16px] font-normal text-[#7D7D7D]">
            {d.priceUnit}
          </span>
        </div>
      </div>
      <p className="font-poppins text-[16px]">{d.body}</p>
      <table className="border-separate border-spacing-8">
        <tbody>
          {d.facts.map((row) => (
            <tr key={row.label}>
              <td className="font-poppins text-[20px] font-bold text-primary">
                {row.label}
              </td>
              <td className="font-poppins text-[16px] text-black">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <h4 className="font-volkhov text-[50px] font-bold text-[#181E4B]">
            {d.galleryTitle}
          </h4>
          <p className="font-poppins text-[16px]">{d.galleryIntro}</p>
          <div className="grid grid-cols-3 gap-6">
            {d.galleryImages.map((img, i) => (
              <div key={i} className="col-span-1 h-[160px]">
                <img src={img} alt="" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
