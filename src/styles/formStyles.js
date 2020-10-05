import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const FormSubscibe = styled(motion.div)`
  position:fixed;
  top:32%;
  background-color:${props => props.theme.background};
  background-color:${({ clicked }) => {
    if (clicked === true) return `${props => props.theme.background}`
    if (clicked === false) return "transparent"
  }};
  right:1%;
  width:160px;
  height:160px;
  transform:rotate(90deg);
  width: ${({ clicked }) => {
    if (clicked === true) return "100vw;"
    if (clicked === false) return "160px;"
  }};
  height: ${({ clicked }) => {
    if (clicked === true) return "100vh;"
    if (clicked === false) return "160px;"
  }};
  top: ${({ clicked }) => {
    if (clicked === true) return "0;"
    if (clicked === false) return "32%;"
  }};
  
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  input {
    display: ${({ clicked }) => {
      if (clicked === true) return "block;"
      if (clicked === false) return "none;"
    }};
  }
  h5 {
    color: ${props => props.theme.text};
  }
`

export const InputSubscribe = styled(motion.input)`
  position:relative;
  z-index:1000;
  width:200px;
  border-radius:0;
  border:0.5px solid ${props => props.theme.text};
  padding:8px;
  outline:none;
  :focus {
    outline:${props => props.theme.background};
  }
`

export const DescriptionSubscribe = styled(motion.h5)`

    font-size: 24px;
    font-weight: 600;
    line-height: 16px;
    margin:16px 0;
`

export const SubmitWrapper = styled.div`
    display:flex; 
    flex-direction: row;
    justify-content: space-around;
    margin:12px 0;
    width:200px;
    button {
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        opacity: ${({ clicked }) => {
            if (clicked === true) return "1"
            if (clicked === false) return "0"
        }};
        display: ${({ clicked }) => {
          if (clicked === true) return "block;"
          if (clicked === false) return "none;"
        }};
        border:none;
        background-color:${props => props.theme.background};
        color:${props => props.theme.text};
        outline:none;
        :active {
            border:none;
        }
    }

`

export const ButtonSubmit = styled.button`
    
`

export const ButtonBack = styled.button`
    
`

export const TitleSubscribe = styled.h3`
    font-size: 24px;
    font-weight: 600;
    line-height: 16px;
    margin:16px 0;
`


export const TextForm = styled(motion.div)`
  position:relative;
  height:20px;
  left:0;
  width:280px;
  text-align:center;
  display: ${({ clicked }) => {
    if (clicked === true) return "block;"
    if (clicked === false) return "none;"
  }};
  h3 {
    position: absolute;
    bottom: 40px;
    font-size: 30px;
    font-weight: 600;
    line-height: 16px;
    margin: 0;
    width:280px;
    left:0;
    bottom:-20px;
    color: ${props => props.theme.text};
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
    }
  }

`