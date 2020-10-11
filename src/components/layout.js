import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
//Styled Components
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"
//Custom Cursor
import CustomCursor from "../components/customCursor"
//Components
import Header from "./header"
import Navigation from "./navigation"
import Footer from "./footer"
// Context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"
import { injectIntl, FormattedMessage, IntlContextConsumer } from "gatsby-plugin-intl"


const GlobalStyle = createGlobalStyle`
${normalize}
* {
  text-decoration: none;
  cursor: none;
}
html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  
  
}
body {
  font-size: 16px;
  font-family: 'Fira Sans', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: ${props => props.theme.background};
  overscroll-behavior: none;
  overflow-x: hidden;
}
`

const Layout = ({ children, intl }) => {
  const dispatch = useGlobalDispatchContext()
  const { cursorStyles, currentTheme } = useGlobalStateContext()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allContentfulRentonMenu {
        edges {
          node {
            id
            titleMenu
            featuredProjects {
              projectVideo {
                file {
                  url
                }
              }
              nameProject
              videId
            }
            node_locale
            
          }
        }
      }
    }
  `)
  
  const EngMenuData = data.allContentfulRentonMenu.edges[0]
  const RusMenuData = data.allContentfulRentonMenu.edges[1]
  const [hamburgerPosition, setHamburgerPosition] = useState({
    x: 0,
    y: 0,
  })
  
  const [toggleMenu, setToggleMenu] = useState(false)

  const darkTheme = {
    background: "#000",
    text: "#fff",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  }

  const lightTheme = {
    background: "#fff",
    text: "#000",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  }

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }
  
  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <CustomCursor toggleMenu={toggleMenu} />
      <Header
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        hamburgerPosition={hamburgerPosition}
        setHamburgerPosition={setHamburgerPosition}
        siteTitle={data.site.siteMetadata.title}
      />
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          
          languages.map(language => (
            <div>
              {currentLocale === "en" && (
                <Navigation
                  toggleMenu={toggleMenu}
                  setToggleMenu={setToggleMenu}
                  data={EngMenuData}
                  onCursor={onCursor}
                  setHamburgerPosition={setHamburgerPosition}
                />
              )}
              {currentLocale === "ru" && (
                <Navigation
                  toggleMenu={toggleMenu}
                  setToggleMenu={setToggleMenu}
                  data={RusMenuData}
                  onCursor={onCursor}
                  setHamburgerPosition={setHamburgerPosition}
                />
              )}
            </div>
          ))
        }
      </IntlContextConsumer>
      <main>{children}</main>
      <Footer
        onCursor={onCursor}
        hamburgerPosition={hamburgerPosition}
        setHamburgerPosition={setHamburgerPosition}
      />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}



export default injectIntl(Layout)
