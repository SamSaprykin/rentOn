import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const ImageWrapper = styled(motion.div)`
    margin:0 auto;
    max-height:80vh;
    img {
        max-height:80vh;
        object-fit:cover;
    }
    
`


export const BlogTitle = styled(motion.div)`
    position:absolute;
    right:0;
    h1 {
        font-size:10rem;
        font-weight:800;
        max-width:800px;
        text-align:right;
        line-height:0.8;
        margin:0 !important;
        font-family:Fira Sans;
    }
`