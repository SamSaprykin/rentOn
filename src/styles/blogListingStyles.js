import styled, { css } from "styled-components"
import { motion } from "framer-motion"

const randomFloat = (min, max) => {
    return min + (max - min) * Math.random();
}

export const CardWrapper = styled(motion.div)`
  position:relative;
  margin-bottom:220px;
  :nth-of-type(1n) {
    max-width:${randomFloat(200,250)}px;
  } 
  :nth-of-type(2n) {
    max-width:${randomFloat(280,300)}px;
  } 
  :nth-of-type(2n+1) {
    max-width:${randomFloat(380,450)}px;
  }
  a {
    display:block;
    height:100%;
    width:100%;
  }
  
`

export const CardInfo = styled.div`
  position:absolute;
  right:-50px;
  bottom:-70px;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  width:100%;
  max-width:300px;
  h5 {
    font-size:2.6rem;
    font-weight:800;
    text-align:left;
    line-height:0.8;
    margin:0 !important;
    font-family:Fira Sans;
  }
  .arrow {
    width: 60px;
    height: 40px;
    display: block;
    position: relative;
    overflow: hidden;
    svg {
      position: absolute;
      top: 16px;
      left: -48px;
      width: 48px;
      z-index:1001;
      path {
        fill: ${props => props.theme.text};
      }
    }
`


