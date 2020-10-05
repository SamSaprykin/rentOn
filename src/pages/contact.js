import React from "react"
import Layout from "../components/layout"


import { ContactWrapper } from "../styles/contactPage"

import ContactForm from "../components/contactPage/contactForm"
import ContactCover from "../components/contactPage/ContactCover"

//Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

const IndexPage = props => {
  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext()
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }
  console.log(props)
  return (
    <Layout>
      <ContactWrapper justify="space-between">
        <ContactForm onCursor={onCursor} />
        <ContactCover />
      </ContactWrapper>
    </Layout>
  )
}

export default IndexPage
