import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


import {HeaderLinkGrid} from "./styledComponents"



const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#000000`,
      marginBottom: `1.45rem`,
      borderBottomStyle: `solid`,
      borderBottomWidth: `0.3rem`,
      borderBottomColor:`#007dc2`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }} className="siteTitle"> 
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
      <HeaderLinkGrid item container xs={10} sm={12} md={12} direction="row" justify="flex-end" alignItems="flex-end">
        <Button ><Link to="/" style={{color:"#ffffff"}}>About Me</Link></Button>
        <Button className="headerButtons" ><Link to="/portfolio/" style={{color:"#ffffff"}}>Portfolio</Link></Button>
        
      </HeaderLinkGrid>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
