import React from 'react'
import { motion } from 'framer-motion'
const frame = () => {
  return (
    <div>
        <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
                scale: 0.8,
                opacity: 0
            },
            visible:{
                scale:1,
                opacity:1,
                transition:{
                    delay:0.4
                }
            }
        }}>
        <h1>Hi Sakshi</h1>
        </motion.div>
    </div>
  )
}

export default frame