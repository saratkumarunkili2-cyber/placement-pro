function CertificatesSection({ certificates }) {

  return (

    <div>

      <h1>Certificates Section</h1>

      {certificates.length === 0 ? (

        <p>No certificates uploaded</p>

      ) : (

        certificates.map((certificate, index) => (

          <div key={index}>

            <p>{certificate}</p>

          </div>

        ))

      )}

    </div>

  );
}

export default CertificatesSection;