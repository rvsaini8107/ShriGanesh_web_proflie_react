import React from "react";

const Footer = () => {
  const List = ({ aLink, aText }) => {
    return (
      <li>
        <span>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </span>
        <a href={aLink}>{aText}</a>
      </li>
    );
  };
  const PList = ({ iconName, aLink, aText }) => {
    return (
      <div>
        <p>
          <span>
            <ion-icon name={iconName}></ion-icon>
          </span>
          <a href={aLink}>{aText}</a>
        </p>
      </div>
    );
  };
  const SocialLink = ({ aLink, iconName }) => {
      return (
        <a href={aLink}> 
        
        <ion-icon className="icons" name={iconName}></ion-icon>
      </a>
      )
  }
  return (
    <>
      <footer className="section-footer section" id="footer">
        <div className="container grid grid-four-column">
          <div className="f-about">
            <h3>About</h3>
            <p>
              I am a fresher front-end web developer with a passion for building
              beautiful and user-friendly websites. I am proficient in HTML,
              CSS, JavaScript, and ReactJS. I am also familiar with other
              front-end technologies, such as Redux, Bootstrap, and jQuery.
            </p>
          </div>
          {/* <!-- end --> */}
          <div className="f-links">
            <h3>Links</h3>
            <ul>
              <List aLink="#" aText="Home" />
              <List aLink="#" aText="About" />
              <List aLink="#" aText="Services" />
              <List aLink="#" aText="Portfolio" />
              <List aLink="#" aText="Contact" />
            </ul>
          </div>
          {/* <!-- end --> */}
          <div className="f-services">
            <h3>Services</h3>
            <ul>
              <List aLink="#" aText="Web Design" />
              <List aLink="#" aText="Web Development" />
              <List aLink="#" aText="App Development" />
              <List aLink="#" aText="Logo Making" />
              <List aLink="#" aText="Online Classes" />
            </ul>
          </div>
          {/* <!-- end --> */}
          <div className="f-address">
            <h3>Have a Question?</h3>
            <address>
              <PList
                iconName="location-outline"
                aLink="#"
                aText="Rajasthan,India"
              />
              <PList
                iconName="call-outline"
                aLink="tel:+918107775019"
                aText="+91 8107775019"
              />
              <PList
                iconName="mail-outline"
                aLink="mailto:rvsaini8107@gmail.com"
                aText="rvsaini8107@gmail.com"
              />
            </address>
          </div>

          {/* <!-- end --> */}
        </div>
        <div className="container">
          <div className="f-social-icons ">
            <a href="#">
              {" "}
              <ion-icon className="icons" name="logo-instagram"></ion-icon>
            </a>
            <a href="#">
              {" "}
              <ion-icon className="icons" name="logo-discord"></ion-icon>
            </a>
            <a href="#">
              {" "}
              <ion-icon className="icons" name="logo-facebook"></ion-icon>
            </a>
          </div>
          <div className="f-credits">
            <p>
              Copyright @2023 All Right reserved | This template is made with ♥
              by ShriGanesh Saini
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
