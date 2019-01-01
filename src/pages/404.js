import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image'
import Layout from '../components/Layout';
import SEO from '../components/seo';

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Layout location={this.props.location}>
        <SEO title="404: Not Found" />
        <h1>No article found</h1>
        <p>Sorry, I haven&#39;t written this article yet...</p>
        <Img sizes={data.file.pic404.sizes} alt="Dog and person searching" />
        <Link to={'/'}>Back to safety🚀</Link>
        <footer>Picture by <a href="https://icons8.com">https://icons8.com</a></footer>
      </Layout>
    )
  }
}

export default NotFoundPage


export const query = graphql`
query HeaderImageQuery {
  file(relativePath: {eq: "404.png"}) {
    pic404: childImageSharp {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
}
`
