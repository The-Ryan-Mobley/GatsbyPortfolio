import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = (props) => (
  <footer
    style={{
      background: `#000000`,
      padding:"1%"
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        color: "#ffffff"
      }}
    >
       © {new Date().getFullYear()}, Created by Ryan Mobley, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
)

// Footer.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Footer.defaultProps = {
//   siteTitle: ``,
// }

export default Footer