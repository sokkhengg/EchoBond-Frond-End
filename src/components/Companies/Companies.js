import { useState, useEffect } from 'react';
import axios from 'axios'
import Company from './Company';

function Companies() {
    const [companies, setCompanies] = useState([])

    useEffect(() => {
      axios.get('http://localhost:3000/companies')
      .then( resp => setCompanies(resp.data.data))
      .catch( data => console.log('error', data))
    }, [])
    
    const grid = companies?.map( (company, index) => {
      const { name, image_url, average_score } = company.attributes
      return (
        <Company 
          key={index}
          name={name}
          image_url={image_url}
          average_score={average_score}
        />
      )
    })

    return (
        <div className="page-body">
          <ul>
      <li>{grid}</li>
          </ul>
        </div>
    )
}

export default Companies;