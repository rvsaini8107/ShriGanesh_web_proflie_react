import BioData from "./Components/BioData";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Freelance from "./Components/Freelance";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import OurPortfolio from "./Components/OurPortfolio";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import Work from "./Components/Work";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <BioData />
      <OurPortfolio />
      <Work />
      <Services />
      <Testimonial />
      <Freelance />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
