import React, {useState} from "react"

import {FormSubscibe, InputSubscribe, DescriptionSubscribe, SubmitWrapper, ButtonSubmit, ButtonBack} from '../styles/formStyles'

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
      
      <InputSubscribe />
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
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
        animate={{ y: hovered ? -8 : 0 }}
        transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        Subscibe us
      </DescriptionSubscribe>
    </FormSubscibe>
  )
}

export default SubscribeForm