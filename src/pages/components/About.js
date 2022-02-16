import AskImage from "../../images/home/answering-questions.png";
import ProgrammerImage from "../../images/home/user.png";
import "../components/AboutStyle/about.css";

const About = () => {
  return (
    <div className="aboutSectionFlex">
      <div className="aboutImage">
        <img src={ProgrammerImage} alt="An icon of a person with a computer." />
        <div className="aboutTitle">User</div>
        <div>
          Pick quiz topic you like and answer to see how you like working in the company.
        </div>
      </div>
      <div className="aboutImage">
        <img
          src={AskImage}
          alt="An icon of a speech bubble with a question mark."
        />
        <div className="aboutTitle">Company</div>
        <div>Create customize quiz questions answers choice for the users.</div>
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
