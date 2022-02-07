import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Search from './Search';

function Company({companies, viewCampgrounds, viewToDos}) {
    const [searchField, setSearchField] = useState("");

    const filteredCompanies = companies.filter(
        (company) => {
        return (
        company
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase())
        )}
    )
    
    function handleChange(e) {
        setSearchField(e.target.value)
        console.log(e.target.value)
    }
    
    return (
        <div className="page-body">
            <div className="search">
                <FaSearch />
                <input
                    type="search"
                    placeholder=" Search for a National Park"
                    onChange={handleChange}
                />
            </div>
            <div className="results">
                <Search filteredCompanies={filteredCompanies} viewCampgrounds={viewCampgrounds} viewToDos={viewToDos}/>    
            </div>
            <hr />

        {/* <div className="companies-page">
                {companies.map((company) => 
                    <CompanyCard key={company.id} company={company} viewCampgrounds={viewCampgrounds} viewToDos={viewToDos} />
                )}
                </div>     */}
        </div>
    )
}

export default Company;