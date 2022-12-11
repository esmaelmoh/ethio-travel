import React,{useState} from 'react'
import '../City/City.css'
import data from "../City/data"

const City = (props) => {
    // console.log(data);
    const [modal , setModal] = useState(false);
    // const [cities, setCities] = useState(data);

    // if (modal) {
    //   document.body.classList.add("active-modal")
    // } else {
    //   document.body.classList.remove("active-modal")
    // }
    const toggleModal = () => {
      setModal(!modal)
    }
    // console.log(props);
  return (
    <>
        <div className='container' >
            <div className="img-container">
                <img src={props.image} alt="" onClick={toggleModal} />
                <h2 onClick={toggleModal}>{props.name}</h2>
                <div className="desc-container">
                <p >{props.desc}</p>
                </div>
                
                <div className="btn">
                <button onClick={toggleModal}>read more</button>
                </div>
                
            </div>
        </div>
    
    {
      modal &&(
        <div className="modal">
          <div onClick={toggleModal} className='overlay'></div>
           <div className='modal-content'>
           <div className="img-container">
            <img src= {props.image} alt="" id='imgs'/>
            
        </div>
        <div className="desc-content">
        <h1 onClick={toggleModal} >{props.name}</h1>
        <p>{props.desc}</p>
        </div>
           </div>
        </div>
      )
    }
    </>
  )
}

export default City