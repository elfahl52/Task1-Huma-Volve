interface ButtonProps {
  text: string;
  onClick: () => void;
  variant: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}

export default function Button({ text, onClick, variant, disabled = false }: ButtonProps) {
  const baseStyles = "px-6 py-2 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {text}
    </button>
  );
}