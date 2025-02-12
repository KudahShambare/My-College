import { Link } from "react-router-dom";

const Faculties =()=>{
 
    let faculties = [
        {
            name:"Natural Sciences",
            url:""
        },
        {
            name:"Economic Management Sciences",
            url:""
        },
        {
            name: "Law",
            url:""
        },
        {
            name:"Community Health Sciences",
            url:""
        },
        {
            name:"Social Sciences",
            url:""
        },
        {
            name:"Education",
            url:""
        },
        {
            name:"Medical Sciences",
            url:""
        },
        {
            name:"Engineering",
            url:""
        },
    ]
    

    return <>
    <h2>Faculties</h2>
    <p>This will be a description of the university structure</p>

    <ul>
      {faculties.map((val,id) =>{
        return <li key={id}>
            <Link to={`/${val.url}`}>
{val.name}
            </Link>
        </li>
      })}
    </ul>
    </>
}
export default Faculties;