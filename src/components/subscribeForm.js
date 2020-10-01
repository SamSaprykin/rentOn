import React, {useState} from "react"
import { motion } from "framer-motion"
import {FormSubscibe, InputSubscribe, DescriptionSubscribe, SubmitWrapper, ButtonSubmit, ButtonBack, TitleSubscribe, TextForm} from '../styles/formStyles'

const SubscribeForm = ({ onCursor }) => {
  const [hovered, setHovered] = useState(false)
  const [clicked, seClicked] = useState(false)
  const openSubscribe = () => {
    if(clicked === false) {
      seClicked(true)
    }
  }
  return (
    <FormSubscibe
      onClick={() => openSubscribe()}
      clicked={clicked}
      onMouseEnter={() => onCursor("hovered")}
      onMouseLeave={onCursor}
      animate={{ 
        rotate: clicked ? 0 : 90, 
        scale: clicked ? 2 : 1, 
      }}
      transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <TextForm
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
        clicked={clicked}
      >
        <TitleSubscribe
          onMouseEnter={() => onCursor("hovered")}
          onMouseLeave={onCursor}
        >
          Stay in touch
          <span className="arrow">
              <motion.svg
                animate={{ x: hovered ? 48 : 0 }}
                transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 101 57"
              >
                <path
                  d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                  fill="#FFF"
                  fillRule="evenodd"
                ></path>
              </motion.svg>
          </span>
        </TitleSubscribe>
      </TextForm>
      
      <InputSubscribe type="email"  placeholder="Input your email" />
      <SubmitWrapper
         clicked={clicked}
      >
        <ButtonSubmit
          onMouseEnter={() => onCursor("hovered")}
          onMouseLeave={onCursor}
        >
          Subscribe
        </ButtonSubmit>
        <ButtonBack
          onClick={() => seClicked(!clicked)}
          onMouseEnter={() => onCursor("hovered")}
          onMouseLeave={onCursor}
        >
          Go back
        </ButtonBack>
      </SubmitWrapper>
      <DescriptionSubscribe
        animate={{ y: hovered ? -8 : 0 }}
        transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        Subscibe us
      </DescriptionSubscribe>
    </FormSubscibe>
  )
}

export default SubscribeForm