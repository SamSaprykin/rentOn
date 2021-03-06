import React from "react"
import Layout from "../components/layout"

import ProjectsListing from "../components/projectsPage/projectsListing"
import SubscribeForm from "../components/subscribeForm"
//Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

const ProjectsInfo = [
  {
      title:"Tallin Arsenal Renovation",
      place:"Tallin",
      image:"/arsenal.png",
      reversed:false,
      excerpt:"There are in total three Jahu buildings, each with 8-15 apartments."
  },
  {
      title:"Tallin Overseas Quarter",
      place:"Tallin",
      image:"/overseas.png",
      reversed:true,
      excerpt:"The apartments have 1-3 rooms and their sizes are 31-64 square metres. "
  },
  {
      title:"Warsaw Wisla",
      place:"Warsaw",
      image:"/arsenal.png",
      reversed:false,
      excerpt:"The apartments have 1-3 rooms and their sizes are 31-64 square metres. "
  },
  {
      title:"Kiev Dnipro Project",
      place:"Kyiv",
      image:"/overseas.png",
      reversed:true,
      excerpt:"The clean air of the rooms is ensured through thoughtful ventilation. "
  },
  {
      title:"Gdansk Memorial",
      place:"Gdansk",
      image:"/sea_project.png",
      reversed:false,
      excerpt:"The exteriors of the residential buildings are structured with Swedish red or brown vertical boarding."
  }
]



const IndexPage = props => {
  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext()
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }
  
  return (
    <Layout>
      {ProjectsInfo.map((project) => {
          return (
            <ProjectsListing onCursor={onCursor} data={project}/>
          )
      })}
      <SubscribeForm onCursor={onCursor} />
    </Layout>
  )
}

export default IndexPage
