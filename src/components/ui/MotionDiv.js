import React from 'react'
import { motion } from 'framer-motion'
const MotionDiv = ({
  children,
  animation,
  duration,
  delay,
  ease,
  persistant,
}) => {
  const anim = {
    fromLeft: {
      initial: {
        x: '-100%',
        opacity: 0,
      },
      animate: {
        x: 0,

        opacity: 1,
        transition: {
          duration: duration ? duration : 0.6,
          delay: delay ? delay : 0,
          ease: ease ? ease : 'easeInOut',
        },
      },
    },
    fromRight: {
      initial: {
        x: '100%',
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,

        transition: {
          duration: duration ? duration : 0.6,
          delay: delay ? delay : 0,
          ease: ease ? ease : 'easeInOut',
        },
      },
    },
    fadeIn: {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
        transition: {
          duration: duration ? duration : 1,
          delay: delay ? delay : 0,
          ease: ease ? ease : 'easeInOut',
        },
      },
    },
    scale: {
      initial: {
        scale: 0.7,
        opacity: 0,
      },
      animate: {
        scale: 1,
        opacity: 1,
        transition: {
          duration: duration ? duration : 0.6,
          delay: delay ? delay : 0,
          ease: ease ? ease : 'easeInOut',
        },
      },
    },
  }

  function desiredAnimation() {
    switch (animation) {
      case 'fromLeft':
        return anim.fromLeft
      case 'fadeIn':
        return anim.fadeIn
      case 'fromRight':
        return anim.fromRight
      case 'scale':
        return anim.scale
      default:
        return anim.fadeIn
    }
  }
  return (
    <motion.div
      variants={desiredAnimation()}
      initial="initial"
      whileInView="animate"
      viewport={{ once: persistant ? !persistant : true }}
    >
      {children}
    </motion.div>
  )
}

export default MotionDiv
