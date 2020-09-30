import styled from "styled-components"
import { motion } from "framer-motion"

//Featured Section
export const HomeFeaturedSection = styled(motion.div)`
  margin-top: 60px;
  position: relative;
  
  a {
    margin-bottom: 50px;
    margin-top:150px;
    position: relative;
    display: flex;
    
    justify-content:flex-start;
    flex-direction: ${({ reverse }) => {
      if (reverse === true) return "column;"
      if (reverse === false) return "row;"
    }};
  }
`

export const FeaturedContent = styled(motion.div)`
  height: 400px;
  width: 62%;
  padding: 16px 32px;
  box-sizing: border-box;
  color: ${props => props.theme.text};
  h3 {
    font-size: 1.4rem;
  }
  .meta {
    display: flex;
    h4 {
      &:last-child {
        margin-left: 1rem;
      }
    }
  }
  
`

export const FeaturedVideo = styled.div`
  position: relative;
  z-index: -1;
  width:100%;
  top: 0;
  display: block;
  overflow: hidden;
  img {
    object-fit:cover;
    width: 80%;
    height: 420px;
  }
`

export const FeaturedProjects = styled.div`
  margin-top: 200px;
  button {
    background: #ea281e;
    color: #fff;
    position: relative;
    padding: 20px;
    display: block;
    text-align: left;
    font-size: 1.4rem;
    line-height: 1;
    font-weight: 600;
    border: none;
    span {
      margin-right: 108px;
      display: block;
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      right: 20px;
      width: 35px;
      height: 7px;
      display: block;
      background: #fff;
      transform: translateY(-50%);
    }
    &:before {
      margin-top: -8px;
    }
    &:after {
      margin-top: 8px;
    }
  }
`


export const TextProject = styled(motion.div)`
  position:relative;
  height:320px;
  .featured-title {
    position: absolute;
    bottom: 40px;
    font-size: 5rem;
    font-weight: 900;
    line-height: 60px;
    margin: 0;
    .arrow {
      width: 120px;
      height: 80px;
      display: block;
      position: relative;
      overflow: hidden;
      svg {
        position: absolute;
        top: 16px;
        left: -48px;
        width: 108px;
        path {
          fill: ${props => props.theme.text};
        }
      }
    }
  }

`

export const ExcerptProject = styled(motion.h3)`

`