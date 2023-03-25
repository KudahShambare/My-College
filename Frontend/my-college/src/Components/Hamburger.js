// the hamburger icon to show and hide nav links

import Hamburger  from 'hamburger-react'
import {useState,useRef} from "react";

//import local modules

import NavBar from "./NavBar.js";


const HamburgerIcon = () =>{

	//keep track of the state for the toggle status of the Hamburger

	const [open,setOpen] = useState(true);

	//ref variable for the navbar

	const navRef = useRef();

	//show nav function

	const showNav = ()=>{
		console.log("Showing")
	navRef.current.style.display="block";
	}
	//hide nav function

	const hideNav = ()=>{
		console.log("Hidden")
		navRef.current.style.display="none";
		console.log(navRef.current.style)

	}
	const toggleShowingNav = (status)=>{
		if(status == true){
			showNav();
		}
		else{
			hideNav();
		}
	}




	return <section>

<Hamburger  onToggle={()=>{
	setOpen(!open);
	toggleShowingNav(open);
}} />

<div ref={navRef} id="nav-links">

<NavBar />
</div>



	</section>
}
export default HamburgerIcon;