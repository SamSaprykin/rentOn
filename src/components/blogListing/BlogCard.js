import React, {useState} from "react"
import { motion } from "framer-motion";
import Img from "gatsby-image"
import { CardWrapper, CardInfo } from "../../styles/blogListingStyles"
import { Link } from "gatsby"
import Anim from "../Anim"

const BlogCard = ({ onCursor,data }) => {
    const [hovered, setHovered] = useState(false)
    return (
      <Anim>
        <CardWrapper
          onHoverStart={() => setHovered(!hovered)}
          onHoverEnd={() => setHovered(!hovered)}
        >
            <Link 
              to={`/blog${data.node.path}`}
              onMouseEnter={() => onCursor("hovered")}
              
              onMouseLeave={onCursor}
            >
                <Img fluid={data.node.featuredImage.fluid} alt="" />
                <CardInfo>
                    <motion.h5
                      animate={{ y: hovered ? 8 : 0 }}
                      transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                    >{data.node.title}
                    </motion.h5>
                    <p className="arrow">
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
                    </p>
                </CardInfo>
                
            </Link>
        </CardWrapper>
      </Anim> 
    );
};

export default BlogCard