interface ButtonProps{
    children:React.Raect
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
