import React, { useEffect } from "react"
import { motion } from "framer-motion"
import { Heading } from "@chakra-ui/react"
const MotionText = () => {
  const texts = [
    "a web developer",
    "a web designer",
    "a graphics designer",
    "a UI desinger",
  ]
  useEffect(() => {
    setTimeout(() => {
      setInterval(() => {
        setState(state => ({
          text: texts[Math.floor(Math.random() * texts.length)],
        }))
      }, 2000)
    }, 2000)
  }, [])
  const [state, setState] = React.useState({
    text: texts[Math.floor(Math.random() * texts.length)],
  })
  const { text } = state
  return (
    <motion.span
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      exit={{ y: -100 }}
      transition={{ duration: 1 }}
    >
      <Heading size="3xl" as="span">
        {" "}
        {text}
      </Heading>
    </motion.span>
  )
}

export default MotionText
