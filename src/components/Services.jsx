import ServicesCard from "./ServicesCard";
import image1 from "../assets/services/1.svg";
import image2 from "../assets/services/2.svg";
import image3 from "../assets/services/3.svg";
import image4 from "../assets/services/4.svg";

const Services = () => {
  return (
    <div className="px-[200px] py-8 flex flex-col items-center gap-[20px]">
      <span className="font-semibold font-poppins text-[18px] text-primary uppercase">
        Category
      </span>
      <h2 className="text-[#181E4B] font-volkhov font-bold text-[50px] capitalize leading-[50px]">
        We Offer Best Services
      </h2>
      <div className="flex items-center justify-between mt-5 w-full">
        <ServicesCard
          img={image1}
          title={"Guided Tours"}
          desc={"sunt qui repellat saepe quo velit aperiam id aliquam placeat."}
        />
        <ServicesCard
          img={image2}
          title={"Best Flights Options"}
          type={2}
          desc={"sunt qui repellat saepe quo velit aperiam id aliquam placeat."}
        />
        <ServicesCard
          img={image3}
          title={"Religious Tours"}
          desc={"sunt qui repellat saepe quo velit aperiam id aliquam placeat."}
        />
        <ServicesCard
          img={image4}
          title={"Medical Insurance"}
          desc={"sunt qui repellat saepe quo velit aperiam id aliquam placeat."}
        />
      </div>
    </div>
  );
};

export default Services;
