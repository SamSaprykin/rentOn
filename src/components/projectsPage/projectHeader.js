import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

//Scroll Observer
import { motion } from "framer-motion"

//Styled Components
import { Container, Flex } from "../../styles/globalStyles"
import { HomeFeaturedSection, FeaturedContent, FeaturedVideo, TextHeaderProject, ExcerptProject, MotionLink} from "../../styles/projectListing"


const transition = { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] };
const ProjectHeader = ({ onCursor, data }) => {
  const [hovered, setHovered] = useState(false)
    
  
    
  return (
    
      <Container>
          <HomeFeaturedSection >
          <Container>
            <MotionLink
              initial={{
                flexDirection:`row`,
              }}
              animate={{
                flexDirection:`column-reverse`,
                transition: { ...transition },
              }}
            >
              <FeaturedContent
                onHoverStart={() => setHovered(!hovered)}
                onHoverEnd={() => setHovered(!hovered)}
                onMouseEnter={() => onCursor("hovered")}
                onMouseLeave={onCursor}
                initial={{
                  width:`62%`
                }}
                animate={{
                  width:`100%`,
                  transition: { ...transition },
                }}
              >
                
                  <Flex spaceBetween>
                      <h3>Featured Project</h3>
                      <h3>
                        {data.place}
                      </h3>
                  </Flex>
                
                
                  <ExcerptProject>
                    {data.excerpt}
                  </ExcerptProject>
                
                
                  <TextHeaderProject
                    initial={{
                      position:`relative`,
                      height:`320px`,
                      width:`100%`,
                      opacity:0,
                    }}
                    animate={{
                      position:`absolute`,
                      height:`60px`,
                      width:`100%`,
                      top:`0`,
                      opacity:1,
                      transition: { duration: 1.2, ease: [0.6, 0.05, -0.01, 0.9] },
                    }}
                  >
                    <h2 className="featured-title">
                      {data.title}
                    </h2>
                  </TextHeaderProject>
                
              </FeaturedContent>
              <FeaturedVideo>
                <motion.img 
                  src={data.image} 
                  initial={{
                    height: 420,
                  }}
                  animate={{
                    height: 620,
                    transition: { duration: 2, ease: [0.6, 0.05, -0.01, 0.9] },
                  }}
                />
              </FeaturedVideo>
            </MotionLink>
          </Container>
        </HomeFeaturedSection>
      </Container>
    
  )
}

export default ProjectHeader