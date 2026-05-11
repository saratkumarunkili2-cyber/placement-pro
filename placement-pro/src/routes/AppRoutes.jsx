import {
  
  Routes,
  Route
} from "react-router-dom";

import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/Register";
import StudentDashboard from "../pages/StudentDashboard";

function AppRoutes() {

  return (

    

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/student-dashboard"
          element={<StudentDashboard />}
        />

      </Routes>

    

  );
}

export default AppRoutes;