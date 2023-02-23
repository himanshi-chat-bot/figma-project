import './Navbar.css';
import  logo1 from '../img/logo1.png';
import  logo2 from '../img/logo2.png';
import  logo3 from '../img/plus.png';
import  logo4 from '../img/contact.png';
import  logo5 from '../img/folder.png';
import  logo6 from '../img/upload.png';
import  logo7 from '../img/report.png';
import  logo8 from '../img/setting.png';
import  logo9 from '../img/logout.png';


function Navbar() {
    return (
       <>
            <div className='nav'>
             <img src={logo1} className="logo1" alt="true"/>
             <img src={logo2} className="logo2" alt="true"/>
             <img src={logo3} className="logo3" alt="true"/>
             <img src={logo4} className="logo4" alt="true"/>
             <img src={logo5} className="logo5" alt="true"/>
             <img src={logo6} className="logo6" alt="true"/>
             <img src={logo7} className="logo7" alt="true"/>
             <img src={logo8} className="logo8" alt="true"/>
             <img src={logo9} className="logo9" alt="true"/>
            </div>

       </>
      
    );
  }
  
  export default Navbar;
  