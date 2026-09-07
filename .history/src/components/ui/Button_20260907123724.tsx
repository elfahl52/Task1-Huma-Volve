interface ButtonProps{
    children:React.Ra
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
