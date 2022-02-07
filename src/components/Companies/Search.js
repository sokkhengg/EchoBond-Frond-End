import CompanyCard from './CompanyCard'

function Search({filteredParks}) {
    return (
        <>
            {filteredParks.map((company) => <CompanyCard key={company.id} company={company} />)}
        </>
    )
}

export default Search; 