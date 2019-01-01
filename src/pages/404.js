import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image'
import Layout from '../components/Layout';
import SEO from '../components/seo';

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data.pic404.childImageSharp.fluid);
    return (
      <Layout location={this.props.location}>
        <SEO title="404: Not Found" />
        <h1>No article found</h1>
        <p>Sorry, I haven&#39;t written this article yet...</p>
        <Img fluid={data.pic404.childImageSharp.fluid} title="404 image" alt="Dog and person searching" />
        <Link to={'/'}>Back to safety🚀</Link>
        <footer>Picture by <a href="https://icons8.com">https://icons8.com</a></footer>
      </Layout>
    )
  }
}

export default NotFoundPage


export const query = graphql`
query HeaderImageQuery {
  pic404: file(relativePath: {eq: "404.png"}) {
    childImageSharp {
      fluid(maxWidth: 1240) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
