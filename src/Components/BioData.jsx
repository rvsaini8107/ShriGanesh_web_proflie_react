import React from "react";
import bioDataImage from "../images/biodata.jpg";
import CommonHeading from "../utils/CommonHeading";
const BioData = () => {
  const DivTextBio = ({
    classesBio = "",
    heading,
    per,
    inlineCss = { left: "" },
  }) => {
    return (
      <div className="bio-stats">
        <h3>{heading}</h3>
        <div className={classesBio + " bio-progress-bar"}>
          <span style={inlineCss}>{per}%</span>
        </div>
      </div>
    );
  };
  return (
    <>
      <section className="section-biodata section">
        <div className="container grid grid-two-column">
          <div className="bio-image">
            {bioDataImage && (
              <img
                src={bioDataImage}
                className="bio-data-img"
                alt="our bio image"
              />
            )}
          </div>
          {/* <!-- bio right side data  --> */}
          <div className="bio-data">
            <CommonHeading hText="My bio-data" />

            <p>
              I am confident that I have the skills and dedication to be a
              valuable asset to your team. I am eager to learn from more
              experienced developers and to contribute to the success of your
              company.
            </p>
            <br />
            <p>
              Please feel free to contact me to discuss my qualifications in
              more detail.
            </p>

            <div className="bio-data-stats">
              <DivTextBio
                heading="Design"
                inlineCss={{ left: "75%" }}
                per="80"
              />
              <DivTextBio
                classesBio="bio-progress-2"
                inlineCss={{ left: "94%" }}
                heading="HTML"
                per="99"
              />
              <DivTextBio
                classesBio="bio-progress-3"
                inlineCss={{ left: "85%" }}
                heading="CSS"
                per="90"
              />
              <DivTextBio
                classesBio="bio-progress-4"
                inlineCss={{ left: "70%" }}
                heading="JavaScript"
                per="75"
              />
              <DivTextBio
                classesBio="bio-progress-5"
                inlineCss={{ left: "65%" }}
                heading="Java"
                per="70"
              />
              <DivTextBio
                classesBio="bio-progress-6"
                inlineCss={{ left: "45%" }}
                heading="MySQL"
                per="50"
              />
              <DivTextBio
                classesBio="bio-progress-7"
                inlineCss={{ left: "35%" }}
                heading="Firebase"
                per="40"
              />
              {/* <div className="bio-stats">
                        <h3>Design</h3>
                        <div className="bio-progress-bar">
                            <span>80%</span>
                        </div>
                    </div> */}
              {/* <div className="bio-stats">
                        <h3>HTML</h3>
                        <div className="bio-progress-bar bio-progress-2">
                            <span>99%</span>
                        </div>
                    </div> */}
              {/* <div className="bio-stats">
                        <h3>CSS</h3>
                        <div className="bio-progress-bar bio-progress-3">
                            <span>90%</span>
                        </div>
                    </div> */}
              {/* <div className="bio-stats">
                        <h3>JavaScript</h3>
                        <div className="bio-progress-bar bio-progress-4">
                            <span>80%</span>
                        </div>
                    </div> */}
              {/* <div className="bio-stats">
                        <h3>Java</h3>
                        <div className="bio-progress-bar bio-progress-5">
                            <span>75%</span>
                        </div>
                    </div> */}
            </div>
            <div className="bio-data-btn">
              <a href="#" className="btn">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BioData;
