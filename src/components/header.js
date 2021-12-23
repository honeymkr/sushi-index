import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const NavLink = styled.li`
float:left;
padding:2rem;
text-decoration:none;
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>

<nav
style={{
  float: `right`,
  padding: `.5rem`,
  marginBottom: `1.45rem`,
}}
>
  <ul>
    <NavLink> <Link to="/fish" >LEARN </Link>  </NavLink>
    <NavLink> <Link to="/quiz">QUIZ</Link> </NavLink>
    <NavLink> <Link to="/about">ABOUT</Link> </NavLink>

  </ul>
</nav>

    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
