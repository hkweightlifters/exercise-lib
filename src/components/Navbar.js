import React, { useState } from 'react'
import { Link } from 'gatsby' 
import { FiAlignJustify, FiShoppingCart } from "react-icons/fi"
import * as Icons from "react-icons/bs"
import logo from "../assets/images/logo.svg"
import { menuData } from "../assets/data/menuData"
import styled from 'styled-components'

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
          {menuData.map((item, index) => {
            const { [item.icon]:Icon } = Icons 
            return (
            <Link to={item.link} key={index} className="nav-link" activeClassName="active-link">
              <Wrapper><Icon />{item.title} </Wrapper>
            </Link>
            )

          })}
          <div className="nav-link contact-link">
            {/* <Link to="/contact" className="btn"> */}
            <a href="https://hkweightlifters.com/" target="_blank" rel="noopener noreferrer" className="btn">
              <Wrapper><FiShoppingCart /> Shop </Wrapper>
            </a>  
          {/* </Link> */}
          </div>
        </div>
      </div>
    </nav>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem
`

export default Navbar
