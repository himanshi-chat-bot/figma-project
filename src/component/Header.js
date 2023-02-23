import './Header.css';
import  logo10 from '../img/arrow.png';

function Header() {

    return (
       <>
       <div>
        <h1 className='header'> Find by Name or phone number</h1>
        <p className='gender'>Gender</p>
        <p className='female'>Female</p>
        <img src={logo10} className="logo10" alt="true"/>
            <p className='member'>Member Status</p>
            <p className='active'>Active Member</p>
            <img src={logo10} className="logo11" alt="true"/>
      
      
       </div> 
       </>
      
    );
  }
  
  export default Header;
  