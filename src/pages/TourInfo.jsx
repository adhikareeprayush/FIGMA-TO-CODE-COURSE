import { useState } from "react";
import ReusableHero from "../components/ReusableHero";
import Information from "../components/Information";
import image from "../assets/hero2.jpg";
import person from "../assets/information/person.svg";
import Button from "../components/Button";
import TourPlan from "../components/TourPlan";
import Location from "../components/Location";

const tabs = [
  {
    id: 1,
    label: "Information",
  },
  {
    id: 2,
    label: "Tour Plan",
  },
  {
    id: 3,
    label: "Location",
  },
  {
    id: 4,
    label: "Gallery",
  },
];

const TourInfo = () => {
  const [activeMenu, setActiveMenu] = useState(1);
  const handleTabChange = (tabNumber) => {
    setActiveMenu(tabNumber);
  };
  return (
    <>
      <ReusableHero subTitle="Explore" title="Landscapes" />
      <div className="w-full px-[200px]">
        <div className="-mt-5 bg-white shadow-lg pb-6">
          <div className="grid grid-cols-4 font-poppins font-bold text-[#343434] text-[20px] h-[80px] mb-6">
            {tabs.map((tab) => (
              <button
                onClick={() => handleTabChange(tab.id)}
                key={tab.id}
                className={`h-full text-center ${
                  activeMenu == tab.id ? "bg-transparent" : "bg-[#F8F8F8]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="w-full grid grid-cols-5 px-10 gap-3">
            <div className="col-span-3 flex flex-col gap-5 relative">
              {activeMenu == 1 ? (
                <Information />
              ) : activeMenu == 2 ? (
                <TourPlan />
              ) : activeMenu == 3 ? (
                <Location />
              ) : (
                ""
              )}
            </div>
            <div className="col-span-2 flex flex-col gap-5">
              <div className="flex flex-col w-full bg-[#EDEDED] px-[50px] py-[40px] gap-4">
                <div className="flex flex-col gap-1">
                  <h4 className="text-[#181E4B] text-[42px] font-volkhov font-bold text-center">
                    Book This Tour
                  </h4>
                  <p className="font-poppins text-[16px] text-center">
                    Ex optio sequi et quos praesentium in nostrum labore nam
                    rerum iusto aut magni nesciunt? Quo quidem neque iste
                    expedita est dolo.
                  </p>
                </div>
                <form className="flex flex-col gap-3 items-center">
                  <div className="flex items-center bg-white w-full py-4 px-3 gap-3">
                    <img src={person} alt="" className="size-7" />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="bg-transparent text-[18px] font-poppins border-0 outline-0 flex-1 focus:border-0 text-black/50"
                    />
                  </div>
                  <div className="flex items-center bg-white w-full py-4 px-3 gap-3">
                    <img src={person} alt="" className="size-7" />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="bg-transparent text-[18px] font-poppins border-0 outline-0 flex-1 focus:border-0 text-black/50"
                    />
                  </div>
                  <div className="flex items-center bg-white w-full py-4 px-3 gap-3">
                    <img src={person} alt="" className="size-7" />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="bg-transparent text-[18px] font-poppins border-0 outline-0 flex-1 focus:border-0 text-black/50"
                    />
                  </div>
                  <div className="flex items-center bg-white w-full py-4 px-3 gap-3">
                    <img src={person} alt="" className="size-7" />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="bg-transparent text-[18px] font-poppins border-0 outline-0 flex-1 focus:border-0 text-black/50"
                    />
                  </div>
                  <div className="flex items-center bg-white w-full py-4 px-3 gap-3">
                    <img src={person} alt="" className="size-7" />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="bg-transparent text-[18px] font-poppins border-0 outline-0 flex-1 focus:border-0 text-black/50"
                    />
                  </div>
                  <Button name={"Check Availability"} classname="w-fit" />
                  <Button name={"Book Now"} classname="w-fit" />
                </form>
              </div>
              <img src={image} alt="" className="w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourInfo;
