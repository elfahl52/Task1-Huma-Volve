interface ButtonProps{
    children: React.ReactNode;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
} 


function Button({children,onClick,variant='primary'}: ButtonProps) {
  const baseStyles ='px-4 py-2 rounded  font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variantStyles = {
       primarty: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
       secondary: 'bg-gray-300 text-black hover:bg-gray-400 focus:ring-gray-500',
   }
    return (
    <div>
      <button onClick={onClick} className={variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}>
        {children}
      </button>
    </div>
  )
}

export default Button
