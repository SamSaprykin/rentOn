import React from "react"
import Layout from "../components/layout"
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"


//Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"


  



const IndexTestPage = props => {
  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext()
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }
  console.log(props.pageResources)
  return (
    <Layout>
      <h3>test</h3>
    </Layout>
  )
}


export const query = graphql `
      query ContentFulPostsTest($locale: String) {
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

export default IndexTestPage
