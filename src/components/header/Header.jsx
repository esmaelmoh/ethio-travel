import "../header/header.css"
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import data from '../header/data';
import { BrowserRouter as BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Cities from "../City/Cities";
import About from '../About/About'
import Showcase from '../Showcase/Showcase'
const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    console.log(open);
    setOpen(!open);
  }
  return (
    <>
      <header>
        <div className="containerr" id="/">
          <nav className='nav-bar'>
            <label className="menu-bar" onClick={handleOpen}><FaBars /></label>
            <label className="logo"> ኢትዮ <span style={{ color: 'rgb(41, 228, 17)' }}>Travel</span></label>
            <ul className={`${open ? 'links show' : 'links'}`}>

              {data.map((item, index) => {
                console.log(item.to)
                //  return <Link key={index} to={`${item.to}`}>{item.link}</Link>
                 return <li><a href={`#${item.to}`}> {`${item.link}`}</a></li>
              })
              }

            </ul>
            {/* <Routes>
              <Route path="/about" element={<About />}></Route>
              <Route path="/tours" element={<Cities />}></Route>
              <Route path="/info" element={<Showcase />}></Route>
            </Routes> */}

        </nav>
        <div className="heading-title">
          <h1>#Come to ethiopia</h1>
        </div>

      </div>
    </header>

        
    </>
  )
}

export default Header