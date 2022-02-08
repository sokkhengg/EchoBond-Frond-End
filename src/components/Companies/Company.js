import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Company = ({ name, image_url, average_score, ...props }) => {
  return (
    <>
      <div>
        <img src={image_url} alt={name} width="50"/>
      </div>
      <div>
        {name}
      </div>
      <div>
        <Link to="companies" >View Airline</Link>
      </div>
    </>
  )
}

export default Company
