import { useContext } from 'react'
import useScrollPosition from './useScrollPosition'

export const Parallax = ({
  children,
  className,
  translateX = 0, //the intended multiplier for the tranlation o X axis
  translateY = 0, //the intended multiplier for the tranlation o Yaxis
  translateZ = 0, //the intended multiplier for the tranlation o Z axis
  scale = 1, //the intended multiplier for the scale
  speed = 1, //The Factor that will multiply by the Scroll event listener and determine the speed
  style = {},
}) => {
  const scroll = useScrollPosition(speed) || 0

  const x = translateX * scroll
  const y = translateY * scroll
  const z = translateZ * scroll

  return (
    <div
      className={className}
      style={{
        transform: `translate3d(${x}px, ${y}px, ${z}px)`,
        transformStyle: 'preserve-3d',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
