import React from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import { formatDifficulty } from '../utils/helpers'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <AniLink swipe direction="up" style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </AniLink>
              </h3>
              <small>{node.frontmatter.date}</small>
              {node.frontmatter.difficulty !== 'n/a' && <small>, Difficulty: {formatDifficulty(node.frontmatter.difficulty)}</small>}
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            difficulty
          }
        }
      }
    }
  }
`
