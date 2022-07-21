import React from 'react'

export const StyleInjector = ({ children, className = '', style = {} }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  )
}
