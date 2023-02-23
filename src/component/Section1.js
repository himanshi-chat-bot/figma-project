import './Section1.css';
import  logo12 from '../img/slash.png';

function Section1() {
    return (
       <>
            
           <h1 className="head1">Diane Cooper</h1>
           <p className='email1'>diane.cooper@example.com</p>
           <p className='gen1'>Gender</p>
           <p className='fe1'>Female</p>
           <p className='birth1'> Birthday </p>
           <p className='date1'>Feb 24th, 1997</p> 
           <p className='phone1'> Phone Number</p>
           <p className='no1'> (239) 555 -0108</p>
            <p className='status1'>Member Status</p>
            <p className='statusa1'>Active Member</p>
            <p className='five1'>15</p>
            <p className='two1'>02</p>
            <p className='past1'>Past</p>
            <p className='up1'>Upcoming</p>
            <p className='view1'>VIEW ECG REPORT DOCUMENTS</p>
            <img src={logo12} className="logo22" alt="true"/>
            <img src={logo12} className="logo23" alt="true"/>
            <img src={logo12} className="logo24" alt="true"/>
            <img src={logo12} className="logo25" alt="true"/>
            <hr className='line2'/>
            
        </>
      
    );
  }
  
  export default Section1;
  