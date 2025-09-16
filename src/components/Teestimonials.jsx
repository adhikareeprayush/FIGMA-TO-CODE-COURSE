import bg from "../assets/testimonials/testimonials.svg";
import doublequote from "../assets/testimonials/doubleq.svg";
import left from "../assets/testimonials/left.svg";
import right from "../assets/testimonials/right.svg";
import photo from "../assets/testimonials/photo.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

const Teestimonials = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center h-[620px] overflow-hidden">
      <img
        src={bg}
        alt=""
        className="absolute w-full -z-10 h-full object-cover"
      />
      <div className="flex flex-col items-center gap-2 mt-[60px]">
        <span className="text-center font-semibold font-poppins text-[18px] text-primary uppercase">
          PROMOTION
        </span>
        <h2 className="text-center text-[#181E4B] font-volkhov font-bold text-[50px] capitalize leading-[50px]">
          See What Our Clients Say <br /> About Us
        </h2>
      </div>
      <div className="w-full">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          slidesPerGroup={1}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
        >
          <SwiperSlide>
            <div className="mx-auto flex flex-col items-center gap-2 relative bg-white rounded-[17px] w-[600px] pt-[60px] pb-[30px] px-[40px] mt-[100px]">
              <img
                src={photo}
                className="absolute border-6 border-white shadow-md w-[120px] h-[120px] transform -top-[60px] left-1/2 -translate-x-1/2 rounded-full object-cover bg-center "
                alt=""
              />
              <div className="flex flex-col items-center mt-5 gap-3 relative">
                <p className="text-center text-black text-[13px] font-poppins tracking-wider max-w-[400px]">
                  Vel officiis dolor ea illo aut eligendi ullam non laudantium
                  magnam et recusandae molestiae sit iure unde aut voluptate
                  quaerat. Id sunt provident quo possimus impedit vel doloremque
                  obcaecati qui ullam consectetur et ipsum omnis.
                  <span className="font-bold font-poppins">"</span>
                </p>
                <h6 className="text-center font-poppins text-black font-bold text-[13px] tracking-wider">
                  Christine Beckam - Designer
                </h6>
                <img
                  src={doublequote}
                  alt=""
                  className="w-[60px] absolute -top-[30px] left-0"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mx-auto flex flex-col items-center gap-2 relative bg-white rounded-[17px] w-[600px] pt-[60px] pb-[30px] px-[40px] mt-[100px]">
              <img
                src={photo}
                className="absolute border-6 border-white shadow-md w-[120px] h-[120px] transform -top-[60px] left-1/2 -translate-x-1/2 rounded-full object-cover bg-center "
                alt=""
              />
              <div className="flex flex-col items-center mt-5 gap-3 relative">
                <p className="text-center text-black text-[13px] font-poppins tracking-wider max-w-[400px]">
                  Vel officiis dolor ea illo aut eligendi ullam non laudantium
                  magnam et recusandae molestiae sit iure unde aut voluptate
                  quaerat. Id sunt provident quo possimus impedit vel doloremque
                  obcaecati qui ullam consectetur et ipsum omnis.
                  <span className="font-bold font-poppins">"</span>
                </p>
                <h6 className="text-center font-poppins text-black font-bold text-[13px] tracking-wider">
                  Christine Beckam - Designer
                </h6>
                <img
                  src={doublequote}
                  alt=""
                  className="w-[60px] absolute -top-[30px] left-0"
                />
              </div>
            </div>
          </SwiperSlide>
          <div className="absolute w-[600px] h-full top-[70px] z-50 transform  left-1/2 -translate-x-1/2 ">
            <img
              src={left}
              alt=""
              className="prev absolute width-[100px] h-[100px] object-fit transform top-1/2 -translate-y-1/2 -left-[50px]"
            />
            <img
              src={right}
              alt=""
              className="next absolute width-[100px] h-[100px] object-fit transform top-1/2 -translate-y-1/2 -right-[50px]"
            />
          </div>
        </Swiper>
      </div>
      <div className="flex items-center gap-4 mt-[30px]">
        <div className="h-1 w-8 bg-white rounded-full"></div>
        <div className="h-1 w-8 bg-primary rounded-full"></div>
        <div className="h-1 w-8 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default Teestimonials;
