import { useState } from "react";

function TopicsSection({

  courses,

  completedTopics,

  setCompletedTopics

}) {

  const [openCourse, setOpenCourse] =
    useState(null);

  function handleCheckboxChange(module) {

    if (
      completedTopics.includes(module)
    ) {

      const updatedTopics =
        completedTopics.filter(
          (item) => item !== module
        );

      setCompletedTopics(updatedTopics);

    }

    else {

      setCompletedTopics([
        ...completedTopics,
        module
      ]);

    }

  }

  return (

    <div
      style={{
        width: "100%",
        padding: "20px",
        backgroundColor: "#f3f4f6",
        minHeight: "100vh"
      }}
    >

      <h1
        style={{
          fontSize: "32px",
          marginBottom: "30px",
          color: "#111827"
        }}
      >
        Learning Dashboard
      </h1>

      {courses.map((course, index) => {

        const completedCount =

          course.modules.filter(
            (module) =>
              completedTopics.includes(
                module
              )
          ).length;

        const progressPercentage =

          (
            completedCount /
            course.modules.length
          ) * 100;

        return (

          <div
            key={index}

            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "20px",
              marginBottom: "25px",
              boxShadow:
                "0 4px 10px rgba(0,0,0,0.08)"
            }}
          >

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center"
              }}
            >

              <div>

                <h2
                  style={{
                    margin: 0,
                    color: "#111827"
                  }}
                >

                  {course.courseName}

                </h2>

                <p
                  style={{
                    color: "#6b7280",
                    marginTop: "5px"
                  }}
                >

                  {completedCount}

                  /

                  {course.modules.length}

                  Modules Completed

                </p>

              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >

                <button

                  onClick={() =>

                    setOpenCourse(

                      openCourse ===
                      course.courseName

                        ? null

                        : course.courseName

                    )

                  }

                  style={{

                    backgroundColor:
                      "#2563eb",

                    color: "white",

                    border: "none",

                    padding: "6px 12px",

                    borderRadius: "6px",

                    marginBottom: "10px",

                    cursor: "pointer"

                  }}

                >

                  {

                    openCourse ===
                    course.courseName

                      ? "Close"

                      : "Open"

                  }

                </button>

                <svg
                  width="90"
                  height="90"
                >

                  <circle

                    cx="45"

                    cy="45"

                    r="35"

                    stroke="#e5e7eb"

                    strokeWidth="8"

                    fill="none"

                  />

                  <circle

                    cx="45"

                    cy="45"

                    r="35"

                    stroke="#2563eb"

                    strokeWidth="8"

                    fill="none"

                    strokeDasharray={220}

                    strokeDashoffset={
                      220 -
                      (
                        220 *
                        progressPercentage
                      ) / 100
                    }

                    strokeLinecap="round"

                    transform="rotate(-90 45 45)"

                  />

                  <text

                    x="50%"

                    y="50%"

                    dominantBaseline="middle"

                    textAnchor="middle"

                    fontSize="16"

                    fontWeight="bold"

                    fill="#111827"

                  >

                    {Math.round(
                      progressPercentage
                    )}%

                  </text>

                </svg>

              </div>

            </div>

            {openCourse ===
              course.courseName && (

              <div
                style={{
                  marginTop: "25px"
                }}
              >

                {course.modules.map(
                  (
                    module,
                    moduleIndex
                  ) => (

                    <div
                      key={moduleIndex}

                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent:
                          "space-between",
                        backgroundColor:
                          "#f9fafb",
                        padding: "14px",
                        borderRadius: "10px",
                        marginBottom: "12px",
                        border:
                          "1px solid #e5e7eb"
                      }}
                    >

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px"
                        }}
                      >

                        <input

                          type="checkbox"

                          checked={
                            completedTopics.includes(
                              module
                            )
                          }

                          onChange={() =>
                            handleCheckboxChange(
                              module
                            )
                          }

                          style={{
                            width: "18px",
                            height: "18px"
                          }}

                        />

                        <span
                          style={{
                            fontSize: "16px",
                            color: "#111827"
                          }}
                        >
                          {module}
                        </span>

                      </div>

                      <button
                        style={{
                          backgroundColor:
                            "#2563eb",
                          color: "white",
                          border: "none",
                          padding:
                            "8px 14px",
                          borderRadius: "8px",
                          cursor: "pointer"
                        }}
                      >
                        Start
                      </button>

                    </div>

                  )
                )}

              </div>

            )}

          </div>

        );

      })}

    </div>

  );
}

export default TopicsSection;