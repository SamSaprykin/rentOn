import React, { useEffect, useRef } from "react"
//Custom Hook
import useWindowSize from "../../hooks/useWindowSize"
//Context
import { useGlobalStateContext } from "../../context/globalContext"
//Styled Components
import {
  Banner,
  Video,
  BannerTitle,
  Headline,
} from "../../styles/homeStyles"

const HomeBanner = ({ onCursor }) => {

  

  const container = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const item = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  return (
    <Banner>
      <Video>
        <video
          height="100%"
          width="100%"
          loop
          autoPlay
          muted
          src={require("../../assets/video/video.mp4")}
        />
      </Video>
      <BannerTitle variants={container} initial="initial" animate="animate">
        <Headline variants={item}>RENT</Headline>
        <Headline variants={item}>ON</Headline>
      </BannerTitle>
    </Banner>
  )
}

export default HomeBanner
