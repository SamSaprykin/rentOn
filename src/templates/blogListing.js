import React from "react"
import { graphql } from "gatsby"
import { motion } from "framer-motion"
import Layout from "../components/layout"
import { Container, Flex } from "../styles/globalStyles"
import { Col, Row } from "antd"
import BlogCard from "../components/blogListing/BlogCard"
import styled from "styled-components"
//Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"



const BlogPost = ({ pageContext, data }) => {
    const dispatch = useGlobalDispatchContext()
    const { cursorStyles } = useGlobalStateContext()
    const onCursor = cursorType => {
      cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
      dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
    }
    const postData = data.allContentfulBlogPost.edges
    
    return ( 
    <Layout>
      <Container>
        <h1 style={{marginTop:`120px`}}>blog Listing page</h1>
        <motion.div
          style={{margin:`0 auto`}}
          initial={{
            y:100,
            opacity:0,
          }}
          animate={{
            y:0,
            opacity:1,
            transition: { duration: 1, ease: [0.6, 0.05, -0.01, 0.9], staggerChildren: 0.1, delayChildren: 1 },
          }} 
        >
          <StyledRow gutter={32} justify="space-between">
            {postData.map((post,index) => {
              return (
                  <StyledCol span={7} >
                    <BlogCard 
                      data={post}
                      onCursor={onCursor}
                    />
                  </StyledCol>
              )
            })}
          </StyledRow>
        </motion.div>
      </Container>
    </Layout>
    )
}

const StyledRow = styled(Row)`
  margin-top:48px;
`

const StyledCol = styled(Col)`
  :nth-of-type(3n) {
    margin-top:21px;
    margin-right:20px;
    z-index:1;
  } 
  :nth-of-type(2n) {
    margin-top:-21px;
    margin-right:-20px;
    z-index:1;
  } 
  :nth-of-type(1) {
    margin-top:72px;
    z-index:10;
  }
  height:400px !important;
  margin-bottom:32px;
`
    
export const query = graphql `
    query blogMainPageQuery($skip: Int!, $limit: Int! , $locale: String) {
        allContentfulBlogPost(skip: $skip, limit: $limit, filter: {node_locale: { eq: $locale }}) {
            edges {
                node {
                    contentful_id
                    id
                    path
                    title
                    description
                    featuredImage {
                      fluid(maxWidth: 480) {
                        ...GatsbyContentfulFluid
                     }
                    }
                }
            }
        }
    }
`

export default BlogPost