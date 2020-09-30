import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const FormSubscibe = styled(motion.div)`
  position:fixed;
  top:32%;
  background-color:${props => props.theme.background};
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
`

export const InputSubscribe = styled(motion.input)`
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
    color: #ea281e;
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