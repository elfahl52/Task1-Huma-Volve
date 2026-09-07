interface ButtonProps{
    children:React.RaectNode
} 


function Button({children,onClick}) {
  return (
    <div>
      <button onClick={onClick}>
        {children}
      </button>
    </div>
  )
}

export default Button
