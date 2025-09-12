import innerImage from "../assets/packages/inner.jpg";
import bg from "../assets/packages/bg.svg";
import image0 from "../assets/packages/0.jpg";
import image1 from "../assets/packages/1.jpg";
import image2 from "../assets/packages/2.jpg";
import Button from "./Button";
import Section from "./Section";

const ViewPackages = () => {
  return (
    <Section classname="grid grid-cols-1 lg:flex w-full justify-start gap-20 items-center">
      <div className="relative w-[400px] col-span-1">
        <div className="-z-10 left-[15px] h-[610px] w-[350px] rounded-t-full border-2 border-[#a7327a] absolute bottom-0 "></div>
        <img
          src={innerImage}
          alt=""
          className="h-[600px] w-[350px] rounded-t-full object-cover"
        />
        <h3 className="font-poppins text-[40px] font-bold text-black opacity-10 absolute w-fit -left-[261px] bottom-[200px] transform -rotate-90">
          Honeymoon Packages
        </h3>
        <img
          src={bg}
          alt=""
          className="w-[120px] h-[160px] object-fit absolute -z-10 -right-[50px] -bottom-[50px]"
        />
        <img
          src={image1}
          alt=""
          className=" h-[90px] w-[90px] rounded-full absolute object-cover top-[200px] -left-[100px]"
        />
        <img
          src={image0}
          alt=""
          className=" h-[140px] w-[140px] rounded-full absolute object-cover top-[0px] -left-[30px]"
        />
        <img
          src={image2}
          alt=""
          className=" h-[50px] w-[50px] rounded-full absolute object-cover -top-[20px] left-[120px]"
        />
      </div>
      <div className="col-span-1 flex flex-col gap-[20px] w-[500px] jutify-center h-full jsutify-center">
        <span className="font-semibold font-poppins text-[18px] text-primary uppercase">
          Honeymoon Specials
        </span>
        <h2 className="text-[#181E4B] font-volkhov font-bold text-[50px] capitalize leading-[50px]">
          Our Romantic Tropical Destinations
        </h2>
        <p className="text-[16px] text-black font-poppins">
          Et labore harum non nobis ipsum eum molestias mollitia et corporis
          praesentium a laudantium internos. Non quis eius quo eligendi corrupti
          et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus
          illum aut optio quibusdam!
        </p>
        <Button name={"View Packages"} classname="w-fit" />
      </div>
    </Section>
  );
};

export default ViewPackages;
