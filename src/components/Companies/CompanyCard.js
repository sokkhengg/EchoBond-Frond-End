import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ImageSlider from './ImageSlider';
import { FaGlobeAmericas } from 'react-icons/fa';
import { FaCampground } from 'react-icons/fa';
import { FaWalking } from 'react-icons/fa';
import { FaTree } from 'react-icons/fa';

function CompanyCard({park, viewCampgrounds, viewToDos}) {
    return (
        <div className="card">
            <ImageSlider images={park.images} />
            {/* <img width="200" src={park.images[0].url}/> */}
            <div className="content">
                <h2>{park.fullName}</h2>
                <h3><FaGlobeAmericas /> {park.addresses[0].city}, {park.addresses[0].stateCode}</h3>
                <p>{park.description.toUpperCase()}</p>
                <div className="links">
                    <a href={park.url} target="_blank"> <h5><FaTree /> Visit Park Site</h5></a>
                    <Link to="/campgrounds-page">
                        <h5 id={park.parkCode} onClick={(e) => viewCampgrounds(e.target.id)}><FaCampground /> View Campgrounds</h5>
                    </Link>
                    <Link to="/todos-page">
                        <h5 id={park.parkCode} onClick={(e) => viewToDos(e.target.id)}> <FaWalking /> View Activities</h5>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CompanyCard;