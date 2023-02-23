import './Section.css';
import  logo12 from '../img/slash.png';

function Section() {
    return (
       <>
             <hr className='line'/>
           <h1 className="head">Diane Cooper</h1>
           <p className='email'>diane.cooper@example.com</p>
           <p className='gen'>Gender</p>
           <p className='fe'>Female</p>
           <p className='birth'> Birthday </p>
           <p className='date'>Feb 24th, 1997</p> 
           <p className='phone'> Phone Number</p>
           <p className='no'> (239) 555 -0108</p>
            <p className='status'>Member Status</p>
            <p className='statusa'>Active Member</p>
            <p className='five'>15</p>
            <p className='two'>02</p>
            <p className='past'>Past</p>
            <p className='up'>Upcoming</p>
            <p className='view'>VIEW ECG REPORT DOCUMENTS</p>
            <img src={logo12} className="logo12" alt="true"/>
            <img src={logo12} className="logo13" alt="true"/>
            <img src={logo12} className="logo14" alt="true"/>
            <img src={logo12} className="logo15" alt="true"/>
            <hr className='line1'/>
            
        </>
      
    );
  }
  
  export default Section;
  