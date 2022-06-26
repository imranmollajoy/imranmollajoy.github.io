import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Box, Heading } from '@chakra-ui/react'
const MotionText = () => {
  const texts = [
    'web developer',
    'web designer',
    'graphic designer',
    'UI desinger',
  ]
  const [currentTextIndex, SetCurrentIndex] = React.useState(0)
  useEffect(() => {
    setTimeout(() => {
      // set currentindex to 0 if it is the last text
      if (currentTextIndex === texts.length - 1) {
        SetCurrentIndex(0)
      }
      // set currentindex to next text
      else {
        SetCurrentIndex(currentTextIndex + 1)
      }

      UpdateText()
    }, 4000)
  }, [currentTextIndex])
  const UpdateText = () => {
    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {texts[currentTextIndex]}
      </motion.span>
    )
  }
  return (
    <Box>
      <Heading as="h1" size="3xl" color="text">
        I am a{' '}
        <Heading as="span" size="3xl">
          <UpdateText />
        </Heading>
      </Heading>
    </Box>
  )
}

export default MotionText
