interface ButtonProps{
    children:React
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
