import AskImage from "../../images/home/potential.png";
import PeopleImage from "../../images/home/chart.png";
import ProgrammerImage from "../../images/home/answering-questions.png";
import "./about.css";

const About = () => {
  return (
    <div className="aboutSectionFlex">
      <div className="aboutImage">
        <img src={ProgrammerImage} alt="An icon of a person with a computer." />
        <div className="aboutTitle">Find questions topics that you like.</div>
        <div>
          Answering a few questions to see how you like working in the company.
        </div>
      </div>
      <div className="aboutImage">
        <img
          src={AskImage}
          alt="An icon of a speech bubble with a question mark."
        />
        <div className="aboutTitle">Potential candidates</div>
        <div>Company can see your scores after answering their questions.</div>
      </div>
      {/* <div className="aboutImage">
                <img src={PeopleImage} alt="An icon of 3 people, with the one in front in more detail."/>
                <div className="aboutTitle">Score chart.</div>
                <div>Your scores will be rank with other users.</div>
            </div> */}
    </div>
  );
};

export default About;
