import { useEffect, useRef, useState } from "react";

function CertificatesSection() {

  const [certificates, setCertificates] =
    useState([]);

  const fileInputRef = useRef();

  // LOAD FROM LOCALSTORAGE

  useEffect(() => {

    const savedCertificates =
      localStorage.getItem("certificates");

    if (savedCertificates) {

      setCertificates(
        JSON.parse(savedCertificates)
      );

    }

  }, []);

  // SAVE TO LOCALSTORAGE

  useEffect(() => {

    localStorage.setItem(
      "certificates",
      JSON.stringify(certificates)
    );

  }, [certificates]);

  function handleUploadClick() {

    fileInputRef.current.click();

  }

  function handleFileUpload(event) {

    const files = Array.from(
      event.target.files
    );

    files.forEach((file) => {

      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {

        const newCertificate = {

          name: file.name,

          size:
            (file.size / 1024).toFixed(2) +
            " KB",

          fileType: file.type,

          preview: reader.result

        };

        setCertificates((prev) => [

          ...prev,

          newCertificate

        ]);

      };

    });

  }

  function handleDelete(index) {

    const updatedCertificates =
      certificates.filter(
        (item, i) => i !== index
      );

    setCertificates(updatedCertificates);

  }

  return (

    <div className="container mt-4">

      <div className="card shadow p-4">

        <div
          className="d-flex justify-content-between align-items-center mb-4"
        >

          <h2>
            My Certificates
          </h2>

          <button
            className="btn btn-primary"
            onClick={handleUploadClick}
          >
            Upload Certificate
          </button>

        </div>

        <input
          type="file"
          multiple
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />

        {certificates.length === 0 ? (

          <div className="text-center mt-5">

            <h5>
              No Certificates Uploaded
            </h5>

          </div>

        ) : (

          <div className="row">

            {certificates.map(
              (certificate, index) => (

                <div
                  className="col-md-4 mb-4"
                  key={index}
                >

                  <div className="card shadow-sm p-3 h-100">

                    {certificate.fileType.startsWith(
                      "image"
                    ) ? (

                      <img
                        src={certificate.preview}
                        alt="certificate"
                        className="img-fluid rounded mb-3"
                        style={{
                          height: "200px",
                          objectFit: "cover"
                        }}
                      />

                    ) : (

                      <div
                        className="text-center p-5 border rounded mb-3"
                      >
                        PDF Preview
                      </div>

                    )}

                    <h5>
                      {certificate.name}
                    </h5>

                    <p>
                      Size:
                      {" "}
                      {certificate.size}
                    </p>

                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        handleDelete(index)
                      }
                    >
                      Delete
                    </button>

                  </div>

                </div>

              )
            )}

          </div>

        )}

      </div>

    </div>

  );

}

export default CertificatesSection;