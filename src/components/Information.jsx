import star from "../assets/trendy/star_fill.svg";
import { tourInformation } from "../data/siteContent";

const Information = () => {
  const d = tourInformation;
  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
        <div className="min-w-0 flex flex-col gap-1">
          <h3 className="font-volkhov text-2xl font-bold text-[#181E4B] sm:text-[28px] md:text-[32px]">
            {d.title}
          </h3>
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-0.5 sm:gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <img key={i} src={star} alt="" className="h-5 w-5 sm:h-6 sm:w-6" />
              ))}
            </div>
            <span className="font-poppins text-sm font-medium text-[#5E6282] sm:text-[16px]">
              ({d.reviewCount})
            </span>
          </div>
        </div>
        <div className="flex shrink-0 flex-wrap items-baseline gap-1">
          <span className="font-poppins text-2xl font-medium text-primary sm:text-[29px]">
            {d.priceMain}
          </span>
          <span className="font-poppins text-xl font-medium text-[#7D7D7D] sm:text-[29px]">
            /
          </span>
          <span className="font-poppins text-sm font-normal text-[#7D7D7D] sm:text-[16px]">
            {d.priceUnit}
          </span>
        </div>
      </div>
      <p className="font-poppins text-[15px] leading-relaxed sm:text-[16px]">
        {d.body}
      </p>
      <div className="-mx-1 overflow-x-auto sm:mx-0">
        <table className="min-w-[520px] border-separate border-spacing-4 sm:min-w-0 sm:border-spacing-6 md:border-spacing-8">
          <tbody>
            {d.facts.map((row) => (
              <tr key={row.label}>
                <td className="whitespace-nowrap font-poppins text-base font-bold text-primary sm:text-[18px] md:text-[20px]">
                  {row.label}
                </td>
                <td className="max-w-[55vw] font-poppins text-sm text-black sm:max-w-none sm:text-[16px]">
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <h4 className="font-volkhov text-3xl font-bold text-[#181E4B] sm:text-4xl md:text-[50px]">
            {d.galleryTitle}
          </h4>
          <p className="font-poppins text-[15px] sm:text-[16px]">{d.galleryIntro}</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {d.galleryImages.map((img, i) => (
              <div key={i} className="col-span-1 h-40 sm:h-44 md:h-[160px]">
                <img src={img} alt="" className="h-full w-full rounded-lg object-cover sm:rounded-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
