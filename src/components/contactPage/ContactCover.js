import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

//Scroll Observer
import { motion } from "framer-motion"


import { CoverContact } from "../../styles/contactPage"


const ContactCover = ({ onCursor, data }) => {
  
  return (
      <CoverContact xl={10}>
          <motion.img
            initial={{
              y:-260,
              opacity:0,
            }}
            animate={{
              y:-160,
              opacity:1,
              transition: { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] },
            }} 
            src="/contact-image.jpg" />
      </CoverContact>
    
  )
}

export default ContactCover