import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="404: Not Found" />
        <h1>No article found</h1>
        <p>Sorry, I haven&#39;t written this article yet... 😭</p>
      </Layout>
    )
  }
}

export default NotFoundPage
