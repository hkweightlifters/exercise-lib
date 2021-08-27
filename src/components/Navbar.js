import React, { useState } from 'react'
import { Link } from 'gatsby' 
import { FiAlignJustify } from "react-icons/fi"
// import { GiWeightLiftingDown } from "react-icons/gi"
import logo from "../assets/images/logo.svg"
import { menuData } from "../assets/data/menuData"

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img className="logo" src={logo} alt="logo"/>
          </Link>
          <button className="nav-btn" onClick={ () => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          {menuData.map((item, index) => (
            <Link to={item.link} key={index} className="nav-link" activeClassName="active-link">
              {item.title}
            </Link>
          ))}
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
