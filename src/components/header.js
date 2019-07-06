import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

//Images
import Logo from "../images/logo-designcode.svg"

const Header = ({ siteTitle }) => (
  <div className="header">
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
