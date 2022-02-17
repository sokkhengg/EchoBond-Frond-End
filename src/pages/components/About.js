import AskImage from "../../images/home/answering-questions.png";
import ProgrammerImage from "../../images/home/user.png";
import logo from "../../images/home/1.png";
import "../components/AboutStyle/about.css";

const About = () => {
  return (
    <div className="aboutSectionFlex">
      <div className="aboutImage">
        <img src={ProgrammerImage} alt="questions mark." />
        <div className="aboutTitle">User</div>
        <div>
          Pick any quiz topic and answer to see how you will like working in the company.
        </div>
      </div>

      <div className="aboutImage">
                <img src={logo} alt="A logo detail."/>
                {/* <div className="aboutTitle">Score chart.</div>
                <div>Your scores will be rank with other users.</div> */}
      </div>

      <div className="aboutImage">
        <img
          src={AskImage}
          alt="people mark."
        />
        <div className="aboutTitle">Company</div>
        <div>Create quiz questions and answer choices for the users.</div>
      </div>

      
    </div>
  );
};

export default About;
