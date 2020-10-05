import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Form, Radio } from "antd"
import axios from "axios"
//Scroll Observer
import { motion } from "framer-motion"



import { FormWrapper, FormTitle, InputForm, StyledInput, StyledTextArea, SuccessForm, ErrorForm, WrappSmallInputs } from "../../styles/contactPage"

const ContactForm = ({ onCursor, data }) => {
    const [form] = Form.useForm()
    const [successForm, setSuccessForm] = useState("")
    const [successBg, setSuccessBg] = useState("")
    const [errorForm, setErrorForm] = useState("")
    const [errorBg, setErrorBg] = useState("")
    // Input Change Handling
    const [inputs, setInputs] = useState({
      name: "",
      email: "",
      phone: "",
      question: "",
      language: "ENG",
    })
    const handleOnChange = event => {
      event.persist()
      setSuccessForm("")
      setErrorForm("")
      setInputs(prev => ({
        ...prev,
        [event.target.id]: event.target.value,
      }))
    }
    const onFinish = values => {
      
  
      setServerState({ submitting: true })
      axios({
        method: "POST",
        url: `https://formspree.io/xleogeqo`,
        data: inputs,
      })
        .then(r => {
          handleServerResponse(true, "Thanks!")
          form.resetFields()
          setSuccessForm(
            "Thank you for your request. We will get back to you as soon as possible to answer your question!"
          )
          setSuccessBg("rgba(221,238,229, 0.9)")
          setTimeout(() => {
            setSuccessForm("")
            setSuccessBg("")
          }, 4000)
        })
        .catch(r => {
          handleServerResponse(false, r.response.data.error)
          setErrorForm(
            "Oops! Something went wrong with your submission, please try again."
          )
          setErrorBg("rgba(238,220,226, 0.9)")
          setTimeout(() => {
            setErrorForm("")
            setErrorBg("")
          }, 4000)
        })
    }
    // Server State Handling
    const [serverState, setServerState] = useState({
      submitting: false,
      status: null,
    })
    const handleServerResponse = (ok, msg) => {
      setServerState({
        submitting: false,
        status: { ok, msg },
      })
      if (ok) {
        setInputs({
          name: "",
          email: "",
          phone: "",
          question: "",
        })
      }
    }
  return (
    
      <FormWrapper xl={12}>
          <FormTitle
            initial={{
              y:60,
              opacity:0,
            }}
            animate={{
              y:0,
              opacity:1,
              transition: { duration: 1.6, ease: [0.6, 0.05, -0.01, 0.9] },
            }}
          >
              Contact Us
          </FormTitle>
          <motion.div
            initial={{
              x:-100,
              width:`30%`,
            }}
            animate={{
              x:0,
              width:`100%`,
              transition: { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] },
            }}
          >
            <Form
              form={form}
              onFinish={onFinish}
              initialValues={{}}
              scrollToFirstError
            >
              <Form.Item
                name="name"
                onChange={handleOnChange}
                value={inputs.name}
                rules={[
                    {
                    required: true,
                    message: "Please provide your full name.",
                    },
                ]}
              >
                  <StyledInput placeholder="Full name" />
              </Form.Item>
              <WrappSmallInputs>

                
                <Form.Item
                    name="email"
                    onChange={handleOnChange}
                    value={inputs.email}
                    className="smallInput"
                    rules={[
                        {
                        type: "email",
                        message: "Please provide a valid e-mail address.",
                        },
                        {
                        required: true,
                        message: "Please provide your e-mail address.",
                        },
                    ]}
                >
                    <StyledInput placeholder="Email" />
                </Form.Item>

                <Form.Item
                    name="phone"
                    className="smallInput"
                    onChange={handleOnChange}
                    value={inputs.phone}
                    rules={[
                        {
                        min: 9,
                        max: 14,
                        pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
                        message: "Please provide a valid phone number.",
                        },
                        {
                        required: true,
                        message: "Please provide your phone number.",
                        },
                    ]}
                >
                    <StyledInput placeholder="Phone" />
                </Form.Item>
              </WrappSmallInputs>
              <Form.Item
                  name="question"
                  onChange={handleOnChange}
                  value={inputs.question}
                  >
                      <StyledTextArea rows={3} placeholder="Your Question" />
              </Form.Item>
              <Form.Item>
                  <InputForm 
                    htmlType="submit"
                    onMouseEnter={() => onCursor("hovered")}
                    onMouseLeave={onCursor}
                  >
                      Send
                  </InputForm>
              </Form.Item>
            <SuccessForm successBg={successBg}>{successForm}</SuccessForm>
            <ErrorForm errorBg={errorBg}>{errorForm}</ErrorForm>
          </Form>
        </motion.div>
      </FormWrapper>
    
  )
}

export default ContactForm