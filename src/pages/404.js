import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404 Not Found</h1>
    <h2>I'm Lost too.</h2>
    <p>But don't stress, hit the name in the navigation bar to get back to something familiar.</p>
  </Layout>
)

export default NotFoundPage
