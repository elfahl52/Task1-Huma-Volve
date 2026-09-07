interface InputProps { 
    type?: string;
    placeholder?: string;
    value?: string;
    onChange: (value: string) => void;

}
function Input({type='text',placeholder,vlaue,onChange}:InputProps) {
  return (
    <div>
      
    </div>
  )
}

export default Input
