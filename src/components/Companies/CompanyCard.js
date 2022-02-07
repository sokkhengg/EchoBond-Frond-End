
function CompanyCard({company}) {
    return (
        <div className="card">
            <div className="content">
                <h2>{company.name}</h2>
                <h2>{company.image_url}</h2>
            </div>
        </div>
    )
}

export default CompanyCard;