import React from "react";
import folio1 from "../images/folio/1.jpg";
import folio3 from "../images/folio/3.jpg";
import folio4 from "../images/folio/4.jpg";
import folio5 from "../images/folio/5.jpg";
import Button from "../utils/Button";
import CommonHeading from "../utils/CommonHeading";
const OurPortfolio = () => {
  const DivProjectsImage = ({ classes, imageLink, projectLink="#", aText="Project" }) => {
    return (
      <div className={classes}>
        {imageLink && <img src={imageLink} alt="myworks" />}
        <div className="overlay">
          <a
            href={projectLink ? projectLink : "#"}
            target="_blank"
            className="common-heading"
          >
            {aText ? aText : "Project"}{" "}
          </a>
        </div>
      </div>
    );
  };
  return (
    <>
      <section className="section section-portfolio" id="portfolio-section">
        <div className="container">
          
          <CommonHeading hText="Latest Works"/>
          <p>
            Built are <b>Contacts Ratannagar,</b>Website{" "}
            <b>Personal Portfolio</b> website &{" "}
            <b>Personal Finance Transactional</b> website using ReactJS. The
            website is responsive and mobile-friendly, and it showcases your
            skills and experience in a professional way.
          </p>
        </div>
        <div className="p-btns">
          
          <Button btnClasses="btn p-btn" dataBtnNum="1" btnText="Project" />
          <Button btnClasses="btn p-btn" dataBtnNum="2" btnText="Github Repositories" />
          <Button btnClasses="btn p-btn" dataBtnNum="3" btnText="Website Demo" />
        </div>
        <div className="container grid grid-three-column portfolio-images">
          
          <DivProjectsImage
            classes="img-overlay p-btn--1 p-btn--2"
            imageLink={folio1}
            projectLink="https://personal-finance-tracker-app-three.vercel.app/"
            aText="Personal Finance Transactional"
          />
          <DivProjectsImage
            classes="img-overlay p-btn--1 p-btn--3"
            imageLink={folio3}
            projectLink="https://contacts-ratannagar-react.vercel.app/"
            aText="Contacts Ratannagar"
          />
          
          <DivProjectsImage
            classes="img-overlay  p-btn--2"
            imageLink={folio4}
            projectLink="#"
            aText="Project 3"
          />
          <DivProjectsImage
            classes="img-overlay p-btn--1 p-btn--3"
            imageLink={folio5}
            projectLink="#"
            aText="Project 4"
          />
          <DivProjectsImage
            classes="img-overlay  p-btn--2"
            imageLink={folio4}
            projectLink="#"
            aText="Project 5"
          />
          <DivProjectsImage
            classes="img-overlay p-btn--1 p-btn--3"
            imageLink={folio3}
            projectLink="#"
            aText="Project 6"
          />
          
        </div>
      </section>
    </>
  );
};

export default OurPortfolio;
