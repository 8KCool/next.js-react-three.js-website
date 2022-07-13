import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const BlockchainTypeWriter = () => {
  return (
    <span
      style={{
        color: 'rgb(59 130 246/0.5)',
        fontWeight: 'bold',
        display: 'inline-block',
        outerWidth: '100px',
      }}
    >
      {/* Style will be inherited from the parent element */}
      <Typewriter
        words={['human', 'urban', 'living', 'real-world']}
        loop={0}
        cursor
        cursorStyle="_"
        typeSpeed={100}
        deleteSpeed={90}
        delaySpeed={1500}
      />
    </span>
  )
}
export default BlockchainTypeWriter
