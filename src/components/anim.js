import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const Anim = ({ children, delay, exit }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    rootMargin: "-300px",
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
    if (exit) {
      if(!inView) {
        controls.start("exit")
      }
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
          y: 0,
          transition: { delay:`${delay}`,duration: 1, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: 0, y: 72 },
        
      }}
    >
      {children}
    </motion.div>
  )
}

export default Anim