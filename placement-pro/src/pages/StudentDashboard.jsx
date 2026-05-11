import { useState } from "react";

import Sidebar from "../components/dashboard/Sidebar";
import TopicsSection from "../components/dashboard/TopicsSection";
import ProfileSection from "../components/dashboard/ProfileSection";
import CompaniesSection from "../components/dashboard/CompaniesSection";
import CertificatesSection from "../components/dashboard/CertificatesSection";

function StudentDashboard() {

  const [activeSection, setActiveSection] =
    useState("profile");
    const [completedTopics, setCompletedTopics] =
  useState([]);

  const topics = [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS"
  ];
  const profile = {
    name: "Suresh",
    branch: "CSE"
  };
  const companies = [
  "TCS",
  "Infosys",
  "Wipro"
];

const certificates = [];

  return (

    <div
      style={{
        display: "flex"
      }}
    >

      <Sidebar
        setActiveSection={setActiveSection}
      />

      <div
        style={{
          padding: "20px"
        }}
      >

        {activeSection === "profile" && 
        (
          <ProfileSection profile={profile}/>
      )}


        {activeSection === "topics" && (
  <TopicsSection topics={  topics}
    completedTopics={completedTopics}
  setCompletedTopics={setCompletedTopics}
   />
)}

        {activeSection === "companies" && (

         <CompaniesSection companies={companies}/>

        )}

        {activeSection === "certificates" && (

          <CertificatesSection certificates={certificates}/>
        )}

      </div>

    </div>

  );
}

export default StudentDashboard;