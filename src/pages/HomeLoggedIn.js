import CompanyHome from './signedin/CompanyHome';
import JobSeekersHome from './signedin/JobSeekersHome'


const HomeLoggedIn = ({userType}) => {
    return (
        /**
         * Renders the correct home page based on the user type.
         */
      <>
        {userType === "job_seeker" ? (
          <JobSeekersHome />
        ) : (
          <CompanyHome />
        )}
      </>
      )
}

export default HomeLoggedIn;
