import React from 'react'
import PropTypes from 'prop-types'
var d = new Date();
var n = d.getFullYear();

const Footer = ({ copyrights }) => (
  <footer>
    {copyrights ? (
      <div
        dangerouslySetInnerHTML={{
          __html: copyrights,
        }}
      />
    ) : (
      <>
        <span className="footerCopyrights">
          © {n} Built with <a target="_blank" nofollow href="https://www.gatsbyjs.org">Gatsby</a>
        </span>
        <span className="footerCopyrights">
          A story by Lue
          <a target="_blank" href="https://bermont.digital"></a>
        </span>
      </>
    )}
  </footer>
)

Footer.propTypes = {
  copyrights: PropTypes.string,
}

export default Footer
