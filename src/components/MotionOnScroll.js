import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"

const MotionOnScroll = ({ children, animation }) => {
  const { scrollYProgress } = useViewportScroll()
  const y1 = useTransform(scrollYProgress, [0, 50], [0, 200])
  const anim = () => {
    switch (animation) {
      case "position":
        return {
          bottom: y1,
        }
      default:
        return {
          opacity: y1,
        }
    }
  }
  return <motion.div style={anim()}>{children}</motion.div>
}

export default MotionOnScroll
