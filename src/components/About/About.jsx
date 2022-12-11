import React ,{useState}from 'react'
import '../About/About.css';
import data from '../About/data'

const About = () => {
  const [aboutCard , setAboutCard]= useState(data);
  return (
    <section id='about'>
        <div className="about-us">
        <h1 >About Us</h1>
        
        </div>

        <div className="barr"><div className="bar"></div></div>
        
        <div className="about-container">
          {aboutCard.map((item,index)=>{
            return(
             <div className="card" key={index}>
            <h1>{item.title}</h1>
            <p>
            {item.desc}
            </p>
        </div>)
          })}
                
           
        </div>
    </section>
  )
}

export default About