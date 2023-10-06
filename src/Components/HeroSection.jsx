import React from 'react'
import ourHero from "../images/hero.jpg"
const HeroSection = () => {
  return (
    <>
      <main className="main" id="main"> 
        <section className="section-hero section">
            <div className="container grid grid-two-column">
                <div className="section-hero-data">
                    <p className="hero-top-data">
                        This is me
                    </p>
                    <h1 className="hero-heading"> ShriGanesh</h1>
                    <p className="hero-para">
                        I'm ShriGanesh. A Full Stack Developer,Freelancer.
                    </p>
                    <div><a href="tel:+918107775019" className="btn hireme-btn">Hire Me</a></div>
                </div>
                {/* <!-- hero section right side --> */}
                <div className="section-hero-image">
                     {ourHero&&<img src={ourHero} alt="our hero" className="hero-img"/>}
                </div>
            </div>
        </section>
    </main> 
    </>
  )
}

export default HeroSection
