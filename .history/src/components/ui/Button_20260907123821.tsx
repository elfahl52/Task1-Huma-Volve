interface ButtonProps{
    children: React.ReactNode;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
} 


function Button({children,onClick,variant}: ButtonProps) {
  return (
    <div>
      <button onClick={onClick}>
        {children}
      </button>
    </div>
  )
}

export default Button
