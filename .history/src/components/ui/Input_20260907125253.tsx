interface InputProps { 
    type?: string;
    placeholder?: string;
    value?: string;
    onChange: (value: string) => void;

}
function Input({type='text',placeholder,value,onChange}:InputProps) {
  return (
      <div>
          <input
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
      
    </div>
  )
}

export default Input
