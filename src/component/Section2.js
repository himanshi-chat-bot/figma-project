import './Section2.css';
import  logo12 from '../img/slash.png';

function Section2() {
    return (
       <>
            
           <h1 className="head2">Diane Cooper</h1>
           <p className='email2'>diane.cooper@example.com</p>
           <p className='gen2'>Gender</p>
           <p className='fe2'>Female</p>
           <p className='birth2'> Birthday </p>
           <p className='date2'>Feb 24th, 1997</p> 
           <p className='phone2'> Phone Number</p>
           <p className='no2'> (239) 555 -0108</p>
            <p className='status2'>Member Status</p>
            <p className='statusa2'>Active Member</p>
            <p className='five2'>15</p>
            <p className='two2'>02</p>
            <p className='past2'>Past</p>
            <p className='up2'>Upcoming</p>
            <p className='view2'>VIEW ECG REPORT DOCUMENTS</p>
            <img src={logo12} className="logo32" alt="true"/>
            <img src={logo12} className="logo33" alt="true"/>
            <img src={logo12} className="logo34" alt="true"/>
            <img src={logo12} className="logo35" alt="true"/>
            <hr className='line3'/>
            
        </>
      
    );
  }
  
  export default Section2;
  