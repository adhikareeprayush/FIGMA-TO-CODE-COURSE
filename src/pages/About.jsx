import ReusableHero from "../components/ReusableHero";
import Section from "../components/Section";
import Button from "../components/Button";
import section2Img from "../assets/about/sec2.svg";
import section3Img from "../assets/about/sec3.jpg";
import play from "../assets/about/play.svg";
import about1 from "../assets/about/about1.svg";
import about2 from "../assets/about/about2.svg";
import one from "../assets/about/1.svg";
import two from "../assets/about/2.svg";
import three from "../assets/about/3.svg";
import Teestimonials from "../components/Teestimonials";
const About = () => {
  return (
    <>
      <ReusableHero subTitle="Read" title="About Us" />
      <Section classname="w-full flex items-center justify-between">
        <div className="flex flex-col gap-[20px] justify-center h-full">
          <span className="font-semibold font-poppins text-[18px] text-primary uppercase">
            Promotion
          </span>
          <h2 className="text-[#181E4B] font-volkhov font-bold text-[50px] capitalize leading-[50px]">
            We Provide You Best <br /> Europe Sightseeing Tours
          </h2>
          <p className="text-[16px] text-black font-poppins w-[580px]">
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            praesentium a laudantium internos. Non quis eius quo eligendi
            corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
            ducimus illum aut optio quibusdam!
          </p>
          <Button name={"View Packages"} classname="w-fit" />
        </div>
        <img src={section2Img} alt="" className="max-w-[800px] flex-1" />
      </Section>
      <Section classname="w-full flex items-center justify-center h-[500px] relative">
        <div className="absolute h-full w-full -z-10">
          <img
            src={section3Img}
            alt=""
            className="h-full w-full object-cover  brightness-70"
          />
        </div>
        <h1 className="font-Yesteryear text-white text-[158px] leading-[223px] font-normal">
          Wanderlust
        </h1>
        <img
          src={play}
          alt=""
          className="absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92px] h-[92px] object-contain"
        />
      </Section>
      <Section classname="w-full flex justify-between items-center relative">
        <img src={about2} alt="" className="w-[400px]" />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-[20px] justify-center h-full">
            <span className="font-semibold font-poppins text-[18px] text-primary uppercase">
              Promotion
            </span>
            <h2 className="text-[#181E4B] font-volkhov font-bold text-[50px] capitalize leading-[50px]">
              We Provide You Best <br /> Europe Sightseeing Tours
            </h2>
            <p className="text-[16px] text-black font-poppins w-[580px]">
              Et labore harum non nobis ipsum eum molestias mollitia et corporis
              praesentium a laudantium internos. Non quis eius quo eligendi
              corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
              ducimus illum aut optio quibusdam!
            </p>
          </div>
          <div className="flex items-center justify-start gap-6">
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="flex items-center justify-center relative">
                <img src={one} alt="" className="w-[120px]" />
                <h4 className="font-poppins text-[32px] text-[#525252] absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  78%
                </h4>
              </div>
              <span className="font-poppins text-[#181E4B] text-[18px] font-bold uppercase">
                Vacations
              </span>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="flex items-center justify-center relative">
                <img src={two} alt="" className="w-[120px]" />
                <h4 className="font-poppins text-[32px] text-[#525252] absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  55%
                </h4>
              </div>
              <span className="font-poppins text-[#181E4B] text-[18px] font-bold uppercase">
                Honeymoon
              </span>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="flex items-center justify-center relative">
                <img src={three} alt="" className="w-[120px]" />
                <h4 className="font-poppins text-[32px] text-[#525252] absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  30%
                </h4>
              </div>
              <span className="font-poppins text-[#181E4B] text-[18px] font-bold uppercase">
                Musical Events
              </span>
            </div>
          </div>
        </div>
        <img src={about1} className="absolute top-5 right-2 w-[200px]" alt="" />
      </Section>
      <Section classname="flex flex-col w-full items-center gap-[32px]">
        <div className="flex flex-col gap-3 items-center justify-center">
          <span className="font-semibold font-poppins text-[18px] text-primary uppercase">
            Explore more
          </span>
          <h2 className="text-[#181E4B] font-volkhov font-bold text-[50px] capitalize leading-[50px]">
            Our International Packages
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-[20px]">
          <div className="col-span-1 h-[363px] relative">
            <img
              src={section3Img}
              alt=""
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute bottom-0 flex items-center justify-between w-full px-4">
              <h6 className="text-white font-poppins font-semibold text-[22px]">
                Barcelona
              </h6>
              <h6 className="text-white font-poppins font-semibold text-[22px]">
                $840
              </h6>
            </div>
          </div>
          <div className="col-span-1 h-[363px] relative">
            <img
              src={section3Img}
              alt=""
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute bottom-0 flex items-center justify-between w-full px-4">
              <h6 className="text-white font-poppins font-semibold text-[22px]">
                Barcelona
              </h6>
              <h6 className="text-white font-poppins font-semibold text-[22px]">
                $840
              </h6>
            </div>
          </div>
          <div className="col-span-1 row-span-2 relative h-[]">
            <img
              src={section3Img}
              alt=""
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute bottom-0 flex items-center justify-between w-full px-4">
              <h6 className="text-white font-poppins font-semibold text-[22px]">
                Barcelona
              </h6>
              <h6 className="text-white font-poppins font-semibold text-[22px]">
                $840
              </h6>
            </div>
          </div>
          <div className="col-span-1 h-[363px] relative">
            <img
              src={section3Img}
              alt=""
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute bottom-0 flex items-center justify-between w-full px-4">
              <h6 className="text-white font-poppins font-semibold text-[22px]">
                Barcelona
              </h6>
              <h6 className="text-white font-poppins font-semibold text-[22px]">
                $840
              </h6>
            </div>
          </div>
          <div className="col-span-1 h-[363px] relative">
            <img
              src={section3Img}
              alt=""
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute bottom-0 flex items-center justify-between w-full px-4">
              <h6 className="text-white font-poppins font-semibold text-[22px]">
                Barcelona
              </h6>
              <h6 className="text-white font-poppins font-semibold text-[22px]">
                $840
              </h6>
            </div>
          </div>
          <div className="col-span-1 h-[363px] relative">
            <img
              src={section3Img}
              alt=""
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute bottom-0 flex items-center justify-between w-full px-4">
              <h6 className="text-white font-poppins font-semibold text-[22px]">
                Barcelona
              </h6>
              <h6 className="text-white font-poppins font-semibold text-[22px]">
                $840
              </h6>
            </div>
          </div>
          <div className="col-span-1 h-[363px] relative">
            <img
              src={section3Img}
              alt=""
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute bottom-0 flex items-center justify-between w-full px-4">
              <h6 className="text-white font-poppins font-semibold text-[22px]">
                Barcelona
              </h6>
              <h6 className="text-white font-poppins font-semibold text-[22px]">
                $840
              </h6>
            </div>
          </div>
          <div className="col-span-1 h-[363px] relative">
            <img
              src={section3Img}
              alt=""
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute bottom-0 flex items-center justify-between w-full px-4">
              <h6 className="text-white font-poppins font-semibold text-[22px]">
                Barcelona
              </h6>
              <h6 className="text-white font-poppins font-semibold text-[22px]">
                $840
              </h6>
            </div>
          </div>
          <div className="col-span-1 h-[363px] relative">
            <img
              src={section3Img}
              alt=""
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute bottom-0 flex items-center justify-between w-full px-4">
              <h6 className="text-white font-poppins font-semibold text-[22px]">
                Barcelona
              </h6>
              <h6 className="text-white font-poppins font-semibold text-[22px]">
                $840
              </h6>
            </div>
          </div>
          <div className="col-span-1 h-[363px] relative">
            <img
              src={section3Img}
              alt=""
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute bottom-0 flex items-center justify-between w-full px-4">
              <h6 className="text-white font-poppins font-semibold text-[22px]">
                Barcelona
              </h6>
              <h6 className="text-white font-poppins font-semibold text-[22px]">
                $840
              </h6>
            </div>
          </div>
          <div className="col-span-1 h-[363px] relative">
            <img
              src={section3Img}
              alt=""
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute bottom-0 flex items-center justify-between w-full px-4">
              <h6 className="text-white font-poppins font-semibold text-[22px]">
                Barcelona
              </h6>
              <h6 className="text-white font-poppins font-semibold text-[22px]">
                $840
              </h6>
            </div>
          </div>
        </div>
      </Section>
      <Teestimonials />
    </>
  );
};

export default About;
