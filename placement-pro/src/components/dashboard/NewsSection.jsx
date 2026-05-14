function NewsSection({ news }) {

  return (

    <div className="container mt-4">

      <h3 className="mb-4">
        Latest News
      </h3>

      <div className="row">

        {news.map((item, index) => (

          <div className="col-md-6 mb-4" key={index}>

            <div className="card shadow-sm p-3 h-100">

              <h5>{item.title}</h5>

              <p>{item.description}</p>

              <small className="text-muted">
                {item.date}
              </small>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default NewsSection;