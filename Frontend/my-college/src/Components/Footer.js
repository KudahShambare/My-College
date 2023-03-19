//import npm Libraries
import { SocialIcon } from 'react-social-icons';

const Footer =()=>{
    return(
        <footer id="footer">

        <section>
    <h3>Contact Us</h3>
<div id="footer-icon-container">
    <SocialIcon  className="footer-icon" network="facebook"/>
        <SocialIcon  className="footer-icon" network="linkedin"/>
    <SocialIcon  className="footer-icon" network="twitter"/>
        <SocialIcon  className="footer-icon" network="instagram"/>

</div>

</section>


<section>
<h3>Academic Announcements</h3>
</section>


<section>
   <h3>Global Education Info</h3> 
</section>

        </footer>
    )
}

export default Footer;