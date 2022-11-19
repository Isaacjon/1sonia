// import './App.scss';
import wow from "./assets/images/introSection/Frame46.svg";
// import wtf from "./assets/images/howToUse/wtf.svg";

import Navbar from "./components/Navbar";
import IntroSection from "./components/introSection";
import StepsLine from "./components/stepsLine";
import HowToUse from "./components/HowToUse";
import DepartmentsSection from "./components/DepartmentsSection";
import AboutSection from "./components/AboutSection";
import SuggestionsSection from "./components/SuggestionsSection";
import well from "./assets/images/well.svg";
import Footer from "./components/Footer";
import Vacancy from "./components/Vacancy";
import vacancyShape from "./assets/images/vacancySection/bgShape.svg";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        {/* <div className="vacancyBg contactBg">
          <Contact />
          <img src={vacancyShape} alt="vacancyShape" />
        </div> */}

        {/* <div className="vacancyBg">
          <Vacancy />
          <img src={vacancyShape} alt="vacancyShape" />
        </div> */}

        {/* <div className="helpme">
        <IntroSection />
        <img src={wow} alt="wow" />
      </div>
      <StepsLine />

      <div className="helpme">
        <HowToUse />
      </div>

      <div className="help">
        <img src={well} alt="well" />
        <div className="bgDiv">
          <DepartmentsSection />
        </div>
        <div className="bgDiv about">
          <AboutSection />
        </div>
        <div className="bgDiv suggestions">
          <SuggestionsSection />
        </div>
      </div> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
