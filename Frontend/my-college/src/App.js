import './App.css';
import Home from "../src/Pages/Home.js"
import {Switch,Route,BrowserRouter} from "react-router-dom";
import Courses from '../src/Pages/Courses';
import Enrollments from "../src/Pages/Enrollments"
import LogIn from "../src/Pages/LogIn"
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/courses" component={Courses}/>
        <Route  path="/enrollments" component={Enrollments}/>
        <Route  path="/login" component={LogIn}/>


      </Switch>
    </div>
  );
}

export default App;
