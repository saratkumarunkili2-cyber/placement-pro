function Sidebar({

  setActiveSection

}) {

  return (

    <div
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#111827",
        color: "white",
        padding: "20px"
      }}
    >

      <h2>
        Dashboard
      </h2>

      <ul
        style={{
          listStyle: "none",
          padding: 0
        }}
      >

        <li>
          <button
            onClick={() =>
              setActiveSection(
                "profile"
              )
            }
          >
            Profile
          </button>
        </li>

        <li>
          <button
            onClick={() =>
              setActiveSection(
                "topics"
              )
            }
          >
            Topics
          </button>
        </li>

        <li>
          <button
            onClick={() =>
              setActiveSection(
                "companies"
              )
            }
          >
            Companies
          </button>
        </li>

        <li>
          <button
            onClick={() =>
              setActiveSection(
                "certificates"
              )
            }
          >
            Certificates
          </button>
        </li>

        <li>
          <button
            onClick={() =>
              setActiveSection(
                "news"
              )
            }
          >
            News
          </button>
        </li>

        <li>
          <button
            onClick={() =>
              setActiveSection(
                "session"
              )
            }
          >
            Session
          </button>
        </li>

      </ul>

    </div>

  );

}

export default Sidebar;