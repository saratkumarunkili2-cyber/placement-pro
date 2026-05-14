function SessionsSection({ sessions }) {

  return (

    <div className="container mt-4">

      <h3 className="mb-4">
        Upcoming Sessions
      </h3>

      <div className="row">

        {sessions.map((session, index) => (

          <div className="col-md-6 mb-4" key={index}>

            <div className="card shadow-sm p-3 h-100">

              <h5>{session.title}</h5>

              <p>
                <strong>Date:</strong> {session.date}
              </p>

              <p>
                <strong>Time:</strong> {session.time}
              </p>

              <p>
                <strong>Speaker:</strong> {session.speaker}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default SessionsSection;