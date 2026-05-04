import Button from "./Button";
import img1 from "../assets/views/1.jpg";
import innerImage from "../assets/packages/inner.jpg";
import Section from "./Section";

const Views = () => {
  return (
    <Section classname="relative flex w-full flex-col gap-12 overflow-x-hidden xl:flex-row xl:justify-between xl:gap-8">
      <div className="flex w-full min-w-0 flex-1 flex-col gap-8">
        <div className="flex flex-col gap-5">
          <span className="font-semibold font-poppins text-[18px] text-primary uppercase">
            Promotion
          </span>
          <h2 className="font-volkhov text-3xl font-bold capitalize leading-tight text-[#181E4B] sm:text-4xl md:text-5xl md:leading-tight lg:text-[50px] lg:leading-[50px]">
            We Provide You Best <br className="hidden sm:block" /> Europe
            Sightseeing Tours
          </h2>
          <p className="max-w-full font-poppins text-[16px] text-black lg:max-w-xl">
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            praesentium a laudantium internos. Non quis eius quo eligendi
            corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
            ducimus illum aut optio quibusdam!
          </p>
          <Button name={"View Packages"} classname="w-fit" />
        </div>
        <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="relative col-span-1 aspect-[4/3] overflow-hidden rounded-[10px]"
            >
              <img
                src={img1}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="button-gradient absolute right-2 top-4 flex items-center justify-center rounded-full px-2 py-1 font-poppins text-sm font-light text-white sm:text-[16px]">
                <p>$700</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative mx-auto hidden shrink-0 xl:block xl:w-[min(40%,420px)]">
        <div className="relative w-full max-w-[350px]">
          <div className="absolute bottom-0 left-[10px] -z-10 h-[min(75vh,610px)] w-[min(100%,350px)] rounded-t-full border-2 border-[#a7327a]" />
          <img
            src={innerImage}
            alt=""
            className="h-[min(75vh,600px)] w-full max-w-[350px] rounded-t-full object-cover"
          />
          <h3 className="pointer-events-none absolute bottom-[25%] right-0 hidden origin-bottom-right -rotate-90 transform font-poppins text-3xl font-bold text-black/10 xl:block 2xl:text-[40px]">
            Honeymoon Packages
          </h3>
        </div>
      </div>
    </Section>
  );
};

export default Views;
