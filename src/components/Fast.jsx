import img1 from "../assets/fast/1.svg";
import img2 from "../assets/fast/2.svg";
import img3 from "../assets/fast/3.svg";
import heart from "../assets/fast/heart.svg";
import building from "../assets/fast/building.svg";
import leaf from "../assets/fast/leaf.svg";
import map from "../assets/fast/map.svg";
import send from "../assets/fast/send.svg";
import plane from "../assets/fast/plane.svg";
import img4 from "../assets/fast/img4.png";
import img5 from "../assets/fast/img5.jpg";
import bg from "../assets/packages/bg.svg";

const Fast = () => {
  return (
    <div className="px-[200px] py-20 grid grid-cols-2 w-full">
      <div className="col-span-1 flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <span className="font-semibold font-poppins text-[18px] text-primary uppercase">
            Category
          </span>
          <h2 className="text-[#181E4B] font-volkhov font-bold text-[50px] capitalize leading-[50px]">
            We Offer Best Services
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-start gap-3">
            <div className="bg-primary h-[48px] w-[60px] rounded-xl flex items-center justify-center">
              <img
                src={img1}
                alt=""
                className="w-[36px] h-[28px] object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h6 className="font-bold font-poppins text-[16px] text-[#5E6282]">
                Choose Destination
              </h6>
              <p className="font-poppins text-[16px] text-[#5E6282]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum eos dolores praesentium eaque alias?
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-[#F0BB1F] h-[48px] w-[60px] rounded-xl flex items-center justify-center">
              <img
                src={img2}
                alt=""
                className="w-[28px] h-[28px] object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h6 className="font-bold font-poppins text-[16px] text-[#5E6282]">
                Check Availability
              </h6>
              <p className="font-poppins text-[16px] text-[#5E6282]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum eos dolores praesentium eaque alias?
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-[#006380] h-[48px] w-[60px] rounded-xl flex items-center justify-center">
              <img
                src={img3}
                alt=""
                className="w-[28px] h-[28px] object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h6 className="font-bold font-poppins text-[16px] text-[#5E6282]">
                Let’s Go
              </h6>
              <p className="font-poppins text-[16px] text-[#5E6282]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum eos dolores praesentium eaque alias?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 h-ful flex items-center justify-center">
        <div className="relative">
          <div className="flex flex-col gap-3 py-4 px-5 bg-white shadow-2xl rounded-[26px] w-fit h-[400px] justify-between">
            <img
              src={img5}
              alt=""
              className="w-[320px] h-[160px] object-cover rounded-[26px]"
            />
            <h4 className="font-poppins text-[#080809] font-meedium text-[18px]">
              Trip to Hawaii
            </h4>
            <p className="text-[#84829A] font-poppins text-[16px]">
              14-29 June | by by JR Martinax
            </p>
            <div className="flex gap-3">
              <div className="flex items-center rounded-full h-[36px] w-[36px] bg-[#F5F5F5] justify-center">
                <img
                  src={leaf}
                  alt=""
                  className="w-[14px] h-[14px] object-contain"
                />
              </div>
              <div className="flex items-center rounded-full h-[36px] w-[36px] bg-[#F5F5F5] justify-center">
                <img
                  src={map}
                  alt=""
                  className="w-[14px] h-[14px] object-contain"
                />
              </div>
              <div className="flex items-center rounded-full h-[36px] w-[36px] bg-[#F5F5F5] justify-center">
                <img
                  src={send}
                  alt=""
                  className="w-[14px] h-[14px] object-contain"
                />
              </div>
            </div>
            <div className="flex w-full justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src={building}
                  alt=""
                  className="w-[16px] h-[16px] object-contain"
                />
                <span className="text-[#84829A] font-poppins text-[16px]">
                  60 people are interested
                </span>
              </div>
              <img
                src={heart}
                alt=""
                className="h-[18px] w-[18px] object-contain"
              />
            </div>
          </div>
          <div className="absolute -top-10 -z-10 w-[354px] h-[367px] bg-[#59B1E6] blur-[75px] rounded-[367px] opacity-80"></div>
          <img src={bg} alt="" className="absolute -bottom-10 -left-10 -z-10" />
          <img
            src={plane}
            alt=""
            className="-right-[500px] -top-[150px] absolute -z-20 max-w-none w-[700px]"
          />
          <div className="flex flex-col gap-3 px-5 py-4 absolute bottom-9 -right-36 bg-white w-[300px] rounded-[18px] shadow-xl">
            <div className="flex items-center w-full justify-start gap-3">
              <img
                src={img4}
                alt=""
                className="rounded-full w-[70px] h-[70px] object-cover"
              />
              <div className="flex flex-col gap-1">
                <p className="text-[#84829A] font-poppins text-[14px]">
                  Ongoing
                </p>
                <h4 className="font-poppins text-[#080809] font-meedium text-[18px]">
                  Trip to rome
                </h4>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-poppins font-medium text-[14px] text-[#080809]">
                <span className="text-primary">40%</span> completed
              </p>
              <div className="w-full h-2 bg-[#F5F5F5] rounded-full relative overflow-hidden">
                <div className="w-[40%] bg-primary h-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fast;
