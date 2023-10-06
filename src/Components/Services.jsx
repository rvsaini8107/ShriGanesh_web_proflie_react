import React from "react";
import CommonHeading from "../utils/CommonHeading";

const Services = () => {
    const ServiceBox = ({iconName="", title="", text=""}) => {
        return (
            <div className="service-box">
            <ion-icon
              name={iconName}
              className="service-icon"
            ></ion-icon>
            <h3>{title}</h3>
            <p>
              {text}
            </p>
          </div>
        )
    }
  return (
    <>
      <section className="section section-services">
        <div className="container">
          {/* <h2 className="common-heading">Services Offers</h2> */}
          <CommonHeading hText="Services Offers" />
          <p>
            I am a fresher front-end web developer with a passion for building
            beautiful and user-friendly websites. I am proficient in HTML, CSS,
            JavaScript, and ReactJS. I am also familiar with other front-end
            technologies, such as Redux Bootstrap, and jQuery.
          </p>
        </div>
        {/* <!-- services offer card --> */}
        <div className="container grid grid-three-column">
          
          <ServiceBox iconName="desktop-outline" title="Web Design" />
          <ServiceBox iconName="logo-react" title="Web Development" />
          <ServiceBox iconName="camera-outline" title="Photograph" />
          <ServiceBox iconName="phone-portrait-outline" title="Mobile Apps" />
          <ServiceBox iconName="globe-outline" title="Apps Interface" />
          <ServiceBox iconName="images-outline" title="Graphic design" />

          

          {/* <div className="service-box">
            <ion-icon name="images-outline" className="service-icon"></ion-icon>
            <h3>Graphic design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi, iusto!
            </p>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Services;
