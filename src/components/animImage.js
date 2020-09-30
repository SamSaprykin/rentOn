import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const AnimImage = ({ children, delay }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    rootMargin: "50px",
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
    
  }, [controls, inView])
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          transition: { delay:`${delay}`,duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimImage