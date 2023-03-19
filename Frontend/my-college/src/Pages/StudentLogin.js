import React from "react";
import Footer from "../Components/Footer.js";
import { Link} from "react-router-dom";
import FormCard from "../Components/FormCard"

const StudentLogin=()=>{
    return(
        <><div className="pages">
            <Link to="/">
                <img src={Logo} alt="logo" className="logo" height="400" />
            </Link>
            <FormCard status="Student" videoUrl="https://www.youtube.com/watch?v=AGKftaUwJh4"/>

        </div><Footer /></>
    )
}
export default StudentLogin;