import Iframe from "react-iframe";
import grass from "../assets/grass.png";

const Location = () => {
  return (
    <>
      <h3 className="text-[#181E4B] font-volkhov font-bold text-[32px]">
        Tour Plan
      </h3>
      <p>
        Qui tempore voluptate qui quia commodi rem praesentium alias et
        voluptates officia sed molestiae sint et voluptas quos. Qui harum
        repudiandae galisum dolorem Hic deleniti officiis est sapiente explicabo
        non eaque corporis aut voluptatum iusto At facere enim id voluptas
        reprehenderit. Ut voluptas laudantium
      </p>
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113965.16364630836!2d87.19370885984202!3d26.795027356630957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef419fc7271c1d%3A0x1d1300367590c002!2sDharan!5e0!3m2!1sen!2snp!4v1757864353350!5m2!1sen!2snp"
        className="w-full"
        height="540"
      />
      <p>
        Sit quasi soluta non temporibus voluptas non necessitatibus tempore sit
        deleniti praesentium aut velit nostrum ut itaque atque ad expedita
        veniam. Hic deleniti officiis est sapiente explicabo non eaque corporis
        aut voluptatum iusto At facere enim id voluptas reprehenderit.
        <br />
        Utvoluptas laudantium et molestias voluptatem ex doloremque omnis est
        ipsum nihil. Quo facere eveniet 33 sint rerum est internos impedit sed
        dignissimos quia. Et rerum deleniti et voluptates saepe qui labore
        quisquam non accusantium temporibus. Quo velit numquam hic excepturi
        sequi sed dicta doloribus! In quos possimus quo quibusdam aliquid est
        culpa porro sed molestiae libero At blanditiis minima a reiciendis
        fugiat.
      </p>
    </>
  );
};

export default Location;
