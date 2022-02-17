import About from "./components/About";
import Footer from "./components/Footer";
import "./home.css";

export const HomeLoggedOut = () => {
  return (
    <div className="gridContainer">
      <div className="firstSection">
      </div>

      <div className="secondSection"></div>
      <div className="secondSectionOverlap">
        <About />
      </div>

      <div className="thirdSection">
        {/* <p>Bring the world together and work in a place where you feel value.</p> */}
      </div>

      <div className="fourthSection">
        <Footer />
      </div>
    </div>
  );
};
