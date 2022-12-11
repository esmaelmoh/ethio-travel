import React,{useState} from 'react'
// import '../City/City.css'
import data from "../City/data"
import City from './City';
const Cities = () => {
const [cities, setCities] = useState(data);

  return (
    < div id='tours'>
    <section >
         <div className="about-us">
        <h1 >Our Tours</h1>
        
        </div>

        <div className="barr"><div className="bar"></div></div>
    <article>
    {cities.map((city)=>{
        
        
        return(
            <City key={city.id} image={city.image} desc={city.desc} name= {city.name}/>
       
        )
    })}
    </article>
    </section>
    </div>
  )
}

export default Cities