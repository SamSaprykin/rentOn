import React from "react"
import Layout from "../components/layout"

import ProjectHeader from "../components/projectsPage/ProjectHeader"
import SubscribeForm from "../components/subscribeForm"
//Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

const ProjectsInfo = {
    title:"Tallin Arsenal Renovation",
    place:"Tallin",
    image:"/arsenal.png",
    reversed:false,
    excerpt:"There are in total three Jahu buildings, each with 8-15 apartments."
}
  



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
      <ProjectHeader onCursor={onCursor} data={ProjectsInfo}/>
      <SubscribeForm onCursor={onCursor} />
    </Layout>
  )
}

export default IndexPage
