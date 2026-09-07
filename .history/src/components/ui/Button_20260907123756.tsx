interface ButtonProps{
    children: React.ReactNode;
    onClick: () => void;
    variant
} 


function Button({children,onClick}: ButtonProps) {
  return (
    <div>
      <button onClick={onClick}>
        {children}
      </button>
    </div>
  )
}

export default Button
