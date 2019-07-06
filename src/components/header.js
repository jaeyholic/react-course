import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import "./header.css"

//Images
import Logo from "../images/logo-designcode.svg"

const Header = ({ siteTitle }) => {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  })

  const handleScroll = () => {
    const scrollTop = window.pageYOffset
    if (scrollTop > 50) {
      setHasScrolled(true)
    } else {
      setHasScrolled(false)
    }
  }

  return (
    <div className={hasScrolled ? "header headerScrolled" : "header"}>
      <div className="headerGroup">
        <Link to="/">
          <img
            src={require("../images/logo-designcode.svg")}
            alt="Logo"
            width="30"
          />
        </Link>
        <Link to="/courses">Courses</Link>
        <Link to="/downloads">Downloads</Link>
        <Link to="/workships">Workshops</Link>
        <Link to="/buy">
          <button>Buy</button>
        </Link>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
