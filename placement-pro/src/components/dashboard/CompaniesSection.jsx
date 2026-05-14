function CompaniesSection({ companies }) {

  return (

    <div>

      <h1>Companies Section</h1>

      {companies.map((company, index) => (

        <div key={index}>

          <h3>{company}</h3>

        </div>

      ))}

    </div>

  );
}

export default CompaniesSection;