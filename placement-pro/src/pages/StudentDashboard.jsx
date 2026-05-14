import { useEffect,useState } from "react";

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
  useEffect(() => {

  const savedTopics =

    localStorage.getItem(
      "completedTopics"
    );

  if (savedTopics) {

    setCompletedTopics(
      JSON.parse(savedTopics)
    );

  }

}, []);


useEffect(() => {

  localStorage.setItem(

    "completedTopics",

    JSON.stringify(
      completedTopics
    )

  );

}, [completedTopics]);
   
  const courses = [

  {
    courseName: "React JS",

    modules: [
      "Introduction",
      "Components",
      "Props",
      "State"
    ]
  },

  {
    courseName: "Java",

    modules: [
      "OOP",
      "Collections",
      "Streams"
    ]
  },

  {
    courseName: "DSA",

    modules: [
      "Arrays",
      "Linked List",
      "Trees"
    ]
  }

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
        display: "flex",
        
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
  <TopicsSection courses={ courses}
  
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