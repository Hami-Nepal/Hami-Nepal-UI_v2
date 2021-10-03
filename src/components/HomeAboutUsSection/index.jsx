import React from "react";
import "./style.scss";
const index = () => {
  return (
    <section className="AboutSection">
      <div className="Landing">
        <div className=" aboutVideo">
          <iframe
            width="619"
            height="348"
            src="https://www.youtube.com/embed/bPny2PNWFxc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="aboutText">
          <h3> Hami Nepal Youth Organisation is a non-profit organisation, established in 2015 A.D. and registered in 2020 A.D.</h3>
          <p>
            Hami Nepal Youth Organisation is a non-profit organisation,
            established in 2015 A.D. and registered in 2020 A.D. (Regd.no.
            609789065), which directly connects the donors and the recipients.
            record of producing tangible and effective assistance during the
            public crisis in Nepal through volunteer work and donations; our
            efforts and assistance were widely lauded during the crisis arising
            in the aftermath of the earthquake in 2015. On 25 April, 2015 an
            earthquake with a magnitude of 7.8 Richter scale struck Nepal along
            with continued aftershocks occurring throughout the nation at the
            intervals of 15–20 minutes. The earthquake affected a huge
            population of the nation with about 9,000 fatalities and nearly
            22,000 injured people.
          </p>
        </div>
      </div>
    </section>
  );
};

export default index;
