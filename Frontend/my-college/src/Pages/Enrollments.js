import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Faculties from "../Components/EnrollmentsComponents/Facuties";
import Fees from "../Components/EnrollmentsComponents/Fees";

const Enrollments=()=>{
    return(
        <>
        <NavBar/>
<div className="pages">
    <h1>Enrollments</h1>
    <Faculties/>
    <Fees/>
</div>
<Footer/>
</>
    )
}
export default Enrollments;

/// Bug report

/***
 * Navbar is displaying in a funny way
 */