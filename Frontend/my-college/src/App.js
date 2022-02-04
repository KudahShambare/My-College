import './App.css';
import Home from "../src/Pages/Home.js"
import {Switch,Route,BrowserRouter} from "react-router-dom";
import Courses from '../src/Pages/Courses';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route  path="/" component={Home}/>
        <Route  path="/courses" component={Courses}/>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
