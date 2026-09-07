interface ButtonProps{
    children: React.ReactNode;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
} 


function Button({children,onClick,variant='primary'}: ButtonProps) {
  const baseStyles ='px-'
    return (
    <div>
      <button onClick={onClick} className={variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}>
        {children}
      </button>
    </div>
  )
}

export default Button
