import './Section3.css';
import  logo12 from '../img/slash.png';

function Section3() {
    return (
       <>
            
           <h1 className="head3">Diane Cooper</h1>
           <p className='email3'>diane.cooper@example.com</p>
           <p className='gen3'>Gender</p>
           <p className='fe3'>Female</p>
           <p className='birth3'> Birthday </p>
           <p className='date3'>Feb 24th, 1997</p> 
           <p className='phone3'> Phone Number</p>
           <p className='no3'> (239) 555 -0108</p>
            <p className='status3'>Member Status</p>
            <p className='statusa3'>Active Member</p>
            <p className='five3'>15</p>
            <p className='two3'>02</p>
            <p className='past3'>Past</p>
            <p className='up3'>Upcoming</p>
            <p className='view3'>VIEW ECG REPORT DOCUMENTS</p>
            <img src={logo12} className="logo42" alt="true"/>
            <img src={logo12} className="logo43" alt="true"/>
            <img src={logo12} className="logo44" alt="true"/>
            <img src={logo12} className="logo45" alt="true"/>
            <hr className='line4'/>
            
        </>
      
    );
  }
  
  export default Section3;
  