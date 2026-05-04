import ServicesCard from "./ServicesCard";
import image1 from "../assets/services/1.svg";
import image2 from "../assets/services/2.svg";
import image3 from "../assets/services/3.svg";
import image4 from "../assets/services/4.svg";
import Section from "./Section";

const Services = () => {
  return (
    <Section classname="flex flex-col items-center gap-[20px] overflow-hidden w-full">
      <span className="font-semibold font-poppins text-[18px] text-primary uppercase">
        Category
      </span>
      <h2 className="text-center font-volkhov text-3xl font-bold capitalize leading-tight text-[#181E4B] sm:text-4xl md:text-5xl lg:text-left lg:text-[50px] lg:leading-[50px]">
        We Offer Best Services
      </h2>
      <div className="mt-5 grid w-full grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:flex lg:flex-row lg:items-start lg:justify-between lg:gap-5">
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
    </Section>
  );
};

export default Services;
