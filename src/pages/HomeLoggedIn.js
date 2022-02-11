import CompanyHome from './signedin/CompanyHome';
import JobSeekersHome from './signedin/JobSeekersHome'


const HomeLoggedIn = ({userType}) => {
    return (
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
