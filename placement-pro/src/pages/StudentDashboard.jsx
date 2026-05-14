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
const news=[];
const session=[];

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
        {activeSection=="session"&&(
          <SessionSection session={session}/>
      )}

      {activeSection=="news"&&(<NewsSection news={news}/>
      )}
      

      </div>

    </div>

  );
}

export default StudentDashboard;