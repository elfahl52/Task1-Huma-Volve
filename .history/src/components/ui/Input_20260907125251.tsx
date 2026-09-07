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
              class
          />
      
    </div>
  )
}

export default Input
