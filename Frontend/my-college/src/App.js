import "./App.css";
import Home from "../src/Pages/Home.js";
import { Routes, Route } from "react-router-dom";
import Courses from "../src/Pages/Courses";
import Enrollments from "../src/Pages/Enrollments";
import StudentLogin from "../src/Pages/StudentLogin";
import StaffLogin from "../src/Pages/StaffLogin";
import CreateAccount from "./Pages/CreateAccount";
import Applicants from "../src/Pages/Applicants";
import NotFound from "./Pages/NotFound";

function App() {


  return (
    <div >
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/courses" element={<Courses/>} />
        <Route exact path="/enrollments" element={<Enrollments/>} />
        <Route exact path="/account/student" element={<StudentLogin/>} />
        <Route exact path="/account/staff" element={<StaffLogin/>} />
        <Route exact path="/account/new" element={<CreateAccount/>} />
        <Route exact path="/join" element={<Applicants/>} />
        <Route path="*" element={<NotFound/>} />

      </Routes>
    </div>
  );
}

export default App;
