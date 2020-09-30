import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

//Scroll Observer
import { motion } from "framer-motion"

//Styled Components
import { Container, Flex } from "../../styles/globalStyles"
import { HomeFeaturedSection, FeaturedContent, FeaturedVideo, TextProject, ExcerptProject} from "../../styles/projectListing"
import Anim from "../Anim"
import AnimImage from "../AnimImage"


const ProjectsListing = ({ onCursor, data }) => {
    const [hovered, setHovered] = useState(false)
    
    
  return (
    
    <Anim exit="exit">
      <Container>
          <HomeFeaturedSection reverse={data.reversed}>
          <Container>
            <Link to="/">
              <FeaturedContent
                onHoverStart={() => setHovered(!hovered)}
                onHoverEnd={() => setHovered(!hovered)}
                onMouseEnter={() => onCursor("hovered")}
                onMouseLeave={onCursor}
              >
                <Anim delay="1">
                  <Flex spaceBetween>
                    <h3>Featured Project</h3>
                    <motion.div
                      animate={{ opacity: hovered ? 1 : 0 }}
                      transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                      className="meta"
                    >
                      <h3>
                        {data.place}
                      </h3>
                      
                    </motion.div>
                  </Flex>
                </Anim>
                <Anim>
                  <ExcerptProject>
                    {data.excerpt}
                  </ExcerptProject>
                </Anim>
                <Anim delay=".5">
                  <TextProject>
                    <h2 className="featured-title">
                      {data.title}
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
                    </h2>
                  </TextProject>
                </Anim>
              </FeaturedContent>
              <AnimImage>
                <FeaturedVideo >
                  <img src={data.image} />
                </FeaturedVideo>
              </AnimImage>
            </Link>
          </Container>
        </HomeFeaturedSection>
      </Container>
    </Anim>
  )
}

export default ProjectsListing