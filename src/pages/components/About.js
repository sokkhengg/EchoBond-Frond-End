import AskImage from "../../images/home/answering-questions.png";
import ProgrammerImage from "../../images/home/user.png";
import logo from "../../images/home/1.png";
import "../components/AboutStyle/about.css";

const About = () => {
  return (
    <div className="aboutSectionFlex">
      <div className="aboutImage">
        <img src={ProgrammerImage} alt="An icon of a person with a computer." />
        <div className="aboutTitle">User</div>
        <div>
          Pick any quiz topic you like and answer to see how you like working in the company.
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
          alt="An icon of a speech bubble with a question mark."
        />
        <div className="aboutTitle">Company</div>
        <div>Create customize quiz questions answers choice for the users.</div>
      </div>

      
    </div>
  );
};

export default About;
