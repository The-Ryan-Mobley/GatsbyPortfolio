import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#000000`,
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
      <Grid item container xs={12} direction="row-reverse">
        <Button><Link to="/page-2/" style={{color:"#ffffff"}}>Portfolio</Link></Button>
      </Grid>
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
