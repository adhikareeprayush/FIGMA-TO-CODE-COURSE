import Iframe from "react-iframe";
import { mapEmbed } from "../data/siteContent";

const Location = () => {
  return (
    <>
      <h3 className="font-volkhov text-[32px] font-bold text-[#181E4B]">
        Location
      </h3>
      <p>
        Meet your Wanderlust host in Zürich before the alpine segment begins.
        The map below shows the main rendezvous area near the lake—detailed
        platform numbers and a downloadable PDF are emailed seven days before
        departure.
      </p>
      <Iframe
        src={mapEmbed.src}
        title={mapEmbed.title}
        className="w-full"
        height="540"
      />
      <p>
        Prefer a private transfer from ZRH? Add it during checkout and we
        coordinate a bilingual driver who tracks your flight in real time.
        Self-drivers can leave vehicles at the hotel’s partner garage two
        blocks north of the station.
        <br />
        Still deciding? Request a short video walkthrough of the meeting point
        from our concierge team—we reply within one business day.
      </p>
    </>
  );
};

export default Location;
