import React, {useState} from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import { motion } from "framer-motion"

import { LinkLang } from "../styles/headerStyles"
const languageName = {
  en: "EN",
  ru: "RU",
}


const Language = ({onCursor}) => {
  const [isHover, toggleHover] = useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };
  
  return (
  <div>
    <IntlContextConsumer>
      
      {({ languages, language: currentLocale }) =>
        
        languages.map(language => (
            
            <LinkLang
              key={language}
              currentLocale={currentLocale}
              onClick={() => changeLocale(language)}
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={onCursor}
              style={{
                color: currentLocale === language ? `red` : ``,
              }}
            >
              {languageName[language]}
            </LinkLang> 
        ))
      }
    </IntlContextConsumer>
  </div>
  )
}
  


export default Language











