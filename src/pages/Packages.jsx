import { useState } from "react";
import ReusableHero from "../components/ReusableHero";
import image from "../assets/hero2.jpg";
import person from "../assets/information/person.svg";
import Button from "../components/Button";
import TourPlan from "../components/TourPlan";
import Location from "../components/Location";
import Gallery from "../components/Gallery";
import PackagesContainer from "../components/PackagesContainer";

const tabs = [
  { id: 1, label: "Date" },
  { id: 2, label: "Price Low To High" },
  { id: 3, label: "Price High to Low" },
  { id: 4, label: "Name (A-Z)" },
];

const Packages = () => {
  const [activeMenu, setActiveMenu] = useState(1);
  const handleTabChange = (tabNumber) => {
    setActiveMenu(tabNumber);
  };
  return (
    <>
      <ReusableHero subTitle="Explore" title="Landscapes" />
      <div className="relative z-10 w-full px-4 pb-12 sm:px-6 lg:px-10 xl:px-16 2xl:px-[200px]">
        <div className="-mt-5 bg-white pb-6 shadow-lg">
          <div className="grid grid-cols-2 font-poppins text-sm font-bold text-[#343434] sm:grid-cols-4 sm:text-lg lg:text-[20px]">
            {tabs.map((tab) => (
              <button
                type="button"
                onClick={() => handleTabChange(tab.id)}
                key={tab.id}
                className={`min-h-[64px] px-2 py-3 text-center leading-snug sm:h-20 sm:px-4 ${
                  activeMenu == tab.id ? "bg-transparent" : "bg-[#F8F8F8]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="grid w-full grid-cols-1 gap-6 px-4 py-4 lg:grid-cols-5 lg:gap-3 lg:px-10">
            <div className="relative flex flex-col gap-5 lg:col-span-3">
              {activeMenu == 1 ? (
                <PackagesContainer />
              ) : activeMenu == 2 ? (
                <TourPlan />
              ) : activeMenu == 3 ? (
                <Location />
              ) : (
                <Gallery />
              )}
            </div>
            <div className="flex flex-col gap-5 lg:col-span-2">
              <div className="flex w-full flex-col gap-4 bg-[#EDEDED] px-6 py-8 sm:px-10 sm:py-10 lg:px-[50px] lg:py-[40px]">
                <div className="flex flex-col gap-1">
                  <h4 className="text-center font-volkhov text-3xl font-bold text-[#181E4B] sm:text-[42px]">
                    Book This Tour
                  </h4>
                  <p className="text-center font-poppins text-[16px]">
                    Ex optio sequi et quos praesentium in nostrum labore nam
                    rerum iusto aut magni nesciunt? Quo quidem neque iste
                    expedita est dolo.
                  </p>
                </div>
                <form className="flex flex-col items-center gap-3">
                  <div className="flex w-full items-center gap-3 bg-white px-3 py-4">
                    <img src={person} alt="" className="size-7 shrink-0" />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="flex-1 border-0 bg-transparent font-poppins text-[18px] text-black/50 outline-0 focus:border-0"
                    />
                  </div>
                  <div className="flex w-full items-center gap-3 bg-white px-3 py-4">
                    <img src={person} alt="" className="size-7 shrink-0" />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="flex-1 border-0 bg-transparent font-poppins text-[18px] text-black/50 outline-0 focus:border-0"
                    />
                  </div>
                  <div className="flex w-full items-center gap-3 bg-white px-3 py-4">
                    <img src={person} alt="" className="size-7 shrink-0" />
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Phone"
                      className="flex-1 border-0 bg-transparent font-poppins text-[18px] text-black/50 outline-0 focus:border-0"
                    />
                  </div>
                  <div className="flex w-full items-center gap-3 bg-white px-3 py-4">
                    <img src={person} alt="" className="size-7 shrink-0" />
                    <input
                      type="text"
                      name="guests"
                      id="guests"
                      placeholder="Guests"
                      className="flex-1 border-0 bg-transparent font-poppins text-[18px] text-black/50 outline-0 focus:border-0"
                    />
                  </div>
                  <div className="flex w-full items-center gap-3 bg-white px-3 py-4">
                    <img src={person} alt="" className="size-7 shrink-0" />
                    <input
                      type="text"
                      name="notes"
                      id="notes"
                      placeholder="Notes"
                      className="flex-1 border-0 bg-transparent font-poppins text-[18px] text-black/50 outline-0 focus:border-0"
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

export default Packages;
