import { useEffect,useState } from "react";

import Sidebar from "../components/dashboard/Sidebar";
import TopicsSection from "../components/dashboard/TopicsSection";
import ProfileSection from "../components/dashboard/ProfileSection";
import CompaniesSection from "../components/dashboard/CompaniesSection";
import CertificatesSection from "../components/dashboard/CertificatesSection";
import SessionSection from "../components/dashboard/SessionSection";
import NewsSection from "../components/dashboard/NewsSection";

function StudentDashboard() 
{
  const [activeSection, setActiveSection] =
    useState("profile");
    const [

  completedTopics,

  setCompletedTopics

] = useState(() => {

  const savedTopics =

    localStorage.getItem(
      "completedTopics"
    );

  return savedTopics

    ? JSON.parse(savedTopics)

    : [];

});
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
const newsData = [

  {
    title: "TCS Hiring Drive",
    description: "TCS hiring for 2026 batch students.",
    date: "12 May 2026"
  },

  {
    title: "Infosys Registration",
    description: "Last date for Infosys registration extended.",
    date: "13 May 2026"
  }

];

const sessionsData = [

  {
    title: "Resume Building",
    date: "15 May 2026",
    time: "10:00 AM",
    speaker: "Placement Officer"
  },

  {
    title: "Mock Interview",
    date: "18 May 2026",
    time: "2:00 PM",
    speaker: "HR Team"
  }

];

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

          <CertificatesSection />
        )}
        {activeSection==="session"&&(
          <SessionSection sessions={sessionsData}/>
      )}

      {activeSection==="news"&&(<NewsSection news={newsData}/>
      )}
      

      </div>

    </div>

  );
}

export default StudentDashboard;