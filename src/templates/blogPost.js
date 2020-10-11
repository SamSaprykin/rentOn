import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { Container, Flex } from "../styles/globalStyles"
import { ImageWrapper, BlogTitle } from "../styles/blogPostStyles"
import { motion, AnimatePresence } from "framer-motion"

const BlogPost = ({ pageContext, data }) => {
    
    const postData = data.contentfulBlogPost
    console.log(pageContext)
    console.log(data)
    return ( 
    
    <Layout>
      <ImageWrapper
        initial={{
          y:100,
          
          width:`70%`,
        }}
        animate={{
          y:0,
          
          width:`100%`,
          transition: { duration: 1, delay: .4, ease: [0.6, 0.05, -0.01, 0.9], staggerChildren: 0.1, delayChildren: 1 },
        }} 
      >
        <Img fluid={postData.featuredImage.fluid} /> 
      </ImageWrapper>
      <Container>
      <BlogTitle
        initial={{
          y:0,
          opacity:0,
        }}
        animate={{
          y:-120,
          opacity:1,
          transition: { duration: .7, delay: 1.2, ease: [0.6, 0.05, -0.01, 0.9] },
        }} 
      >
        <h1 style={{marginTop:`120px`}}>{postData.title}</h1>
      </BlogTitle>
        
        <h2>{postData.description}</h2>
      </Container>
    </Layout>
    )
}
    
export const query = graphql `
    query ContentFulPosts($slug: String, $locale: String) {
      contentfulBlogPost(path: { eq: $slug }, node_locale: { eq: $locale }) {
          contentful_id
          id
          path
          title
          description
          featuredImage {
            fluid(maxWidth: 1400) {
              ...GatsbyContentfulFluid
           }
          }
      }
    }
`

export default BlogPost


