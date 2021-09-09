import React from 'react'

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <a href="https://www.hkweightlifters.com">Hong Kong Weightlifters</a>
      </p>
    </footer>
  )
}

export default Footer