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
import { aboutDestinationGrid } from "../data/siteContent";

const About = () => {
  return (
    <>
      <ReusableHero subTitle="Read" title="About Us" />
      <Section classname="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-5">
          <span className="font-semibold font-poppins text-[18px] text-primary uppercase">
            Promotion
          </span>
          <h2 className="font-volkhov text-3xl font-bold capitalize leading-tight text-[#181E4B] sm:text-4xl md:text-5xl md:leading-tight lg:text-[50px] lg:leading-[50px]">
            We Provide You Best <br /> Europe Sightseeing Tours
          </h2>
          <p className="max-w-full font-poppins text-[15px] leading-relaxed text-black sm:text-[16px] lg:max-w-xl">
            Wanderlust curates small-group departures across Europe, Asia, and
            the Americas. We negotiate directly with boutique hotels, mountain
            guides, and local hosts so every itinerary feels personal—not
            pulled from a template.
          </p>
          <Button name={"View Packages"} classname="w-fit" />
        </div>
        <img
          src={section2Img}
          alt=""
          className="w-full max-w-full shrink-0 object-contain sm:max-w-lg lg:max-w-[800px] lg:flex-1"
        />
      </Section>
      <Section classname="relative flex min-h-[280px] w-full items-center justify-center overflow-hidden py-16 sm:min-h-[400px] md:min-h-[500px] md:py-0">
        <div className="absolute -z-10 h-full w-full">
          <img
            src={section3Img}
            alt=""
            className="h-full w-full object-cover brightness-70"
          />
        </div>
        <h1 className="font-Yesteryear px-2 text-center text-5xl font-normal leading-tight text-white sm:text-7xl md:text-8xl md:leading-[1.1] lg:text-[158px] lg:leading-[223px]">
          Wanderlust
        </h1>
        <img
          src={play}
          alt=""
          className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform object-contain sm:h-20 sm:w-20 md:h-[92px] md:w-[92px]"
        />
      </Section>
      <Section classname="relative flex w-full flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
        <img
          src={about2}
          alt=""
          className="order-2 w-full max-w-md object-contain lg:order-1 lg:w-[min(100%,400px)] lg:max-w-none lg:shrink-0"
        />
        <div className="order-1 flex min-w-0 flex-1 flex-col gap-6 lg:order-2">
          <div className="flex flex-col gap-5">
            <span className="font-semibold font-poppins text-[18px] text-primary uppercase">
              Promotion
            </span>
            <h2 className="font-volkhov text-3xl font-bold capitalize leading-tight text-[#181E4B] sm:text-4xl md:text-5xl md:leading-tight lg:text-[50px] lg:leading-[50px]">
              We Provide You Best <br /> Europe Sightseeing Tours
            </h2>
            <p className="max-w-full font-poppins text-[15px] leading-relaxed text-black sm:text-[16px] lg:max-w-xl">
              Et labore harum non nobis ipsum eum molestias mollitia et corporis
              praesentium a laudantium internos. Non quis eius quo eligendi
              corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
              ducimus illum aut optio quibusdam!
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-start gap-6 sm:gap-8">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="relative flex items-center justify-center">
                <img src={one} alt="" className="w-[100px] sm:w-[120px]" />
                <h4 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform font-poppins text-[28px] text-[#525252] sm:text-[32px]">
                  78%
                </h4>
              </div>
              <span className="font-poppins text-[16px] font-bold uppercase text-[#181E4B] sm:text-[18px]">
                Vacations
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="relative flex items-center justify-center">
                <img src={two} alt="" className="w-[100px] sm:w-[120px]" />
                <h4 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform font-poppins text-[28px] text-[#525252] sm:text-[32px]">
                  55%
                </h4>
              </div>
              <span className="font-poppins text-[16px] font-bold uppercase text-[#181E4B] sm:text-[18px]">
                Honeymoon
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="relative flex items-center justify-center">
                <img src={three} alt="" className="w-[100px] sm:w-[120px]" />
                <h4 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform font-poppins text-[28px] text-[#525252] sm:text-[32px]">
                  30%
                </h4>
              </div>
              <span className="font-poppins text-[16px] font-bold uppercase text-[#181E4B] sm:text-[18px]">
                Musical Events
              </span>
            </div>
          </div>
        </div>
        <img
          src={about1}
          className="pointer-events-none absolute right-2 top-2 hidden w-[120px] opacity-90 sm:block md:top-5 md:w-[160px] lg:w-[200px]"
          alt=""
        />
      </Section>
      <Section classname="flex w-full flex-col items-center gap-8 sm:gap-[32px]">
        <div className="flex flex-col items-center justify-center gap-3 px-2 text-center">
          <span className="font-semibold font-poppins text-[18px] text-primary uppercase">
            Explore more
          </span>
          <h2 className="font-volkhov text-3xl font-bold capitalize leading-tight text-[#181E4B] sm:text-4xl md:text-5xl md:leading-tight lg:text-[50px] lg:leading-[50px]">
            Our International Packages
          </h2>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-5">
          {aboutDestinationGrid.map((cell, idx) => (
            <div
              key={`${cell.city}-${idx}`}
              className="relative h-[240px] overflow-hidden rounded-lg sm:h-[280px] lg:h-[363px]"
            >
              <img
                src={cell.image}
                alt=""
                className="h-full w-full object-cover brightness-75 transition duration-300 hover:brightness-90"
              />
              <div className="absolute bottom-0 flex w-full items-center justify-between bg-gradient-to-t from-black/70 to-transparent px-3 py-4 sm:px-4">
                <h6 className="font-poppins text-lg font-semibold text-white sm:text-[22px]">
                  {cell.city}
                </h6>
                <h6 className="font-poppins text-lg font-semibold text-white sm:text-[22px]">
                  {cell.price}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Teestimonials />
    </>
  );
};

export default About;
