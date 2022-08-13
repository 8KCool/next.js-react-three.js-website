const StyleInjector = ({ children, className = '', style = {} }) => {
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

export default StyleInjector
