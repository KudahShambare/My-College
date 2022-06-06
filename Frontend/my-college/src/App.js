import "./App.css";
import Home from "../src/Pages/Home.js";
import { Switch, Route } from "react-router-dom";
import Courses from "../src/Pages/Courses";
import Enrollments from "../src/Pages/Enrollments";
import LogIn from "../src/Pages/LogIn";
import StudentLogin from "../src/Pages/StudentLogin";
import StaffLogin from "../src/Pages/StaffLogin";
import CreateAccount from "./Pages/CreateAccount";
import Applicants from "../src/Pages/Applicants";
import StudentDashboard from "./Components/StudentDashboard";

function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/courses" component={Courses} />
        <Route path="/enrollments" component={Enrollments} />
        <Route path="/login" component={LogIn} />
        <Route path="/Studentlogin" component={StudentLogin} />
        <Route path="/Stafflogin" component={StaffLogin} />
        <Route path="/courses" component={Courses} />
        <Route path="/create-account" component={CreateAccount} />
        <Route path="/applicants" component={Applicants} />
        <Route path="/StudentDashboard" component={StudentDashboard} />
      </Switch>
    </div>
  );
}

export default App;
