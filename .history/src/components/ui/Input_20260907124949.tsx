interface InputProps { 
    type?: string;
    placeholder?: string;
    value?: string;
    onChange: (value: string) => void;

}
function Input({type='text',placeholder,value,onChange}:InputProps) {
  return (
      <div>
          <input>
          </input>
      
    </div>
  )
}

export default Input
