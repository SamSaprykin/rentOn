import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { Container, Flex } from "../styles/globalStyles"

const BlogPost = ({ pageContext, data }) => {
    const postData = data.allContentfulBlogPost.nodes[0]
    return ( 
    <Layout>
      <Container>
        <h1 style={{marginTop:`120px`}}>{postData.title}</h1>
        <h2>{postData.description}</h2>
      </Container>
    </Layout>
    )
}
    
export const query = graphql `
    query ContentFulPosts($locale: String) {
      allContentfulBlogPost(filter: { node_locale: { eq: $locale } }) {
      nodes {
          contentful_id
          path
          title
          description
        }
      }
    }
`

export default BlogPost