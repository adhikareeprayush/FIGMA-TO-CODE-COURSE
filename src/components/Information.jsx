import star from "../assets/trendy/star_fill.svg";
import image from "../assets/hero2.jpg";
const Information = () => {
  return (
    <>
      <div className="flex items-start gap-3">
        <div className="flex flex-col gap-1">
          <h3 className="text-[#181E4B] font-volkhov font-bold text-[32px]">
            Switzerland
          </h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <img src={star} alt="" width={24} />
              <img src={star} alt="" width={24} />
              <img src={star} alt="" width={24} />
              <img src={star} alt="" width={24} />
              <img src={star} alt="" width={24} />
            </div>
            <span className="text-[#5E6282] text-[16px] font-medium font-poppins">
              (2.3k review)
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-[29px] text-primary font-poppins font-medium">
            1,000 $
          </span>
          <span className="text-[29px] font-poppins font-medium text-[#7D7D7D]">
            /
          </span>
          <span className="text-[#7D7D7D] text-[16px] font-normal font-poppins">
            Per Couple
          </span>
        </div>
      </div>
      <p className="font-poppins text-[16px]">
        Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut
        magni nesciunt? Quo quidem neque iste expedita est dolor similique ut
        quasi maxime ut deserunt autem At praesentium voluptatem aut libero
        nisi. Et eligendi sint ab cumque veritatis aut provident aliquam. Aut
        aspernatur consequuntur eum quaerat distinctio ut inventore aliquid et
        quasi alias ut rerum suscipit et nihil deleniti. Ex optio sequi et quos
        praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo
        quidem neque iste expedita est dolor similique ut quasi maxime ut
        deserunt autem At praesentium voluptatem aut libero nisi. Et eligendi
        sint ab cumque veritatis aut provident aliquam. Aut aspernatur
        consequuntur eum quaerat distinctio ut inventore aliquid et quasi alias
        ut rerum suscipit et nihil deleniti.
      </p>
      <table className="border-separate border-spacing-8 ">
        <tr>
          <td className="font-poppins text-[20px] font-bold text-primary">
            Destination
          </td>
          <td className="text-[16px] font-poppins text-black">
            : Zurich, Switzerland
          </td>
        </tr>
        <tr>
          <td className="font-poppins text-[20px] font-bold text-primary">
            Destination
          </td>
          <td className="text-[16px] font-poppins text-black">
            : Zurich, Switzerland
          </td>
        </tr>
        <tr>
          <td className="font-poppins text-[20px] font-bold text-primary">
            Destination
          </td>
          <td className="text-[16px] font-poppins text-black">
            : Zurich, Switzerland
          </td>
        </tr>
        <tr>
          <td className="font-poppins text-[20px] font-bold text-primary">
            Destination
          </td>
          <td className="text-[16px] font-poppins text-black">
            : Zurich, Switzerland
          </td>
        </tr>
        <tr>
          <td className="font-poppins text-[20px] font-bold text-primary">
            Destination
          </td>
          <td className="text-[16px] font-poppins text-black">
            : Zurich, Switzerland
          </td>
        </tr>
        <tr>
          <td className="font-poppins text-[20px] font-bold text-primary">
            Destination
          </td>
          <td className="text-[16px] font-poppins text-black">
            : Zurich, Switzerland
          </td>
        </tr>
      </table>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <h4 className="text-[#181E4B] text-[50px] font-volkhov font-bold">
            From our gallery
          </h4>
          <p className="font-poppins text-[16px]">
            Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto
            aut magni nesciunt? Quo quidem neque iste expedita est dolor
            similique ut quasi maxime ut deserunt autem At praesentium
            voluptatem aut libero nisi.{" "}
          </p>
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-1 h-[160px]">
              <img src={image} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="col-span-1 h-[160px]">
              <img src={image} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="col-span-1 h-[160px]">
              <img src={image} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="col-span-1 h-[160px]">
              <img src={image} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="col-span-1 h-[160px]">
              <img src={image} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="col-span-1 h-[160px]">
              <img src={image} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
