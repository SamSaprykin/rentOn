import styled, { css } from "styled-components"
import { motion } from "framer-motion"
import { Col, Row } from "antd"
import { Input, Form } from "antd"

const { TextArea } = Input

export const ContactWrapper = styled(Row)`
    margin:160px auto -240px;
    max-width: 1244px;
    padding: 0 32px;
    position: relative;
    width: auto;
    height: 100%;
    @media (min-width: 1024px) {
        max-width: 960px;
    }
    @media (min-width: 1216px) {
        max-width: 1152px;
    }
    @media (min-width: 1408px) {
        max-width: 1244px;
    }
`



export const WrappSmallInputs = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`

export const FormTitle = styled(motion.h2)`
    display: block;
    font-size: 7rem;
    font-weight: 900;
    line-height: 0.77;
    width:50%;
    color: ${props => props.theme.text};
`

export const FormWrapper = styled(Col)`
    .smallInput {
      width:48%;
    }
    
`

export const CoverContact = styled(Col)`
    img {
      width:800px;
      height:100vh;
      object-fit:cover;
    }
`

export const InputForm = styled.button`
    position:relative;
    width:200px;
    border-radius:0;
    font-size:1.6rem;
    border:1px solid ${props => props.theme.text} !important; 
    color:${props => props.theme.text};
    padding:8px !important;
    outline:none;
    background-color: ${props => props.theme.background};
`


export const StyledTextArea = styled(TextArea)`
  border: none !important;
  border-bottom: 1px solid ${props => props.theme.text} !important;
  border-radius: 0 !important;
  font-size: 20px !important;
  line-height: 26px !important;
  padding: 6px 0 !important;
  color:${props => props.theme.text} !important;
  background-color: ${props => props.theme.background} !important;
  padding:8px !important;
  ::placeholder {
    color: ${props => props.theme.text} !important;
    font-size: 20px !important;
    line-height: 26px !important;
  }
  :focus {
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
    border-bottom: 1px solid ${props => props.theme.text} !important;
    background: none !important;
  }
  :hover {
    border-bottom: 1px solid ${props => props.theme.text} !important;
    border-radius: 0 !important;
    outline: none !important;
  }
  :selection  {
    background-color: ${props => props.theme.background} !important;
  }
`

export const StyledInput = styled(Input)`
  border: none !important;
  border-bottom: 1px solid ${props => props.theme.text} !important;
  border-radius: 0 !important;
  font-size: 20px !important;
  line-height: 26px !important;
  padding: 6px 0 !important;
  color:${props => props.theme.text} !important;
  background-color: ${props => props.theme.background} !important;
  padding:8px !important;
  ::placeholder {
    color: ${props => props.theme.text} !important;
    font-size: 20px !important;
    line-height: 26px !important;
  }
  :focus {
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
    border-bottom: 1px solid ${props => props.theme.text} !important;
    background: none !important;
  }
  :hover {
    border-bottom: 1px solid ${props => props.theme.text} !important;
    border-radius: 0 !important;
    outline: none !important;
  }
`

export const SuccessForm = styled.h4`
  
`
export const ErrorForm = styled.h4`
  
`