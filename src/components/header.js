import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { Container, Grid } from "@mui/material"

const NavLink = styled.li`
float:left;
padding:2rem;
`

const Header = ({ siteTitle }) => (

 <header
    style={{
      background: `orangered`,
      marginBottom: `1.45rem`,
    }}
  >
   

      <Grid container spacing={3}>

        <Grid item xs={6}> 
          <h1 style={{ margin: 22 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1></Grid>

        <Grid item xs={6}>
<ul>
    <NavLink> <Link to="/fish" style={{
            color: `white`,
            textDecoration: `none`,
          }}>LEARN </Link>  </NavLink>
    <NavLink> <Link to="/quiz" style={{
            color: `white`,
            textDecoration: `none`,
          }}
    >QUIZ</Link> </NavLink>
    <NavLink> <Link to="/about" style={{
            color: `white`,
            textDecoration: `none`,
          }}>ABOUT</Link> </NavLink>
  </ul>
        </Grid>
       
      </Grid>
      




    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
