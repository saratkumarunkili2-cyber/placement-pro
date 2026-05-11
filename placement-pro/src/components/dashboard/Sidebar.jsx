function Sidebar({ setActiveSection }) {

  return (

    <div
      style={{
        width: "250px",
        padding: "20px",
        borderRight: "1px solid gray"
      }}
    >

      <h2>Student Dashboard</h2>

      <ul>

        <li>
          <button
            onClick={() => setActiveSection("profile")}
          >
            Profile
          </button>
        </li>

        <li>
          <button
            onClick={() => setActiveSection("topics")}
          >
            Topics
          </button>
        </li>

        <li>
          <button
            onClick={() => setActiveSection("companies")}
          >
            Companies
          </button>
        </li>

        <li>
          <button
            onClick={() => setActiveSection("certificates")}
          >
            Certificates
          </button>
        </li>

      </ul>

    </div>

  );
}

export default Sidebar;