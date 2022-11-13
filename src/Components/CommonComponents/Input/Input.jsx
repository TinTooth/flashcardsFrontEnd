const Input = ({label,type = 'text',onChange, value, textArea}) => {
    const handleOnChange = e => onChange(e.target.value)
    
    return textArea ? (
        <div className='form-group'>
        <label>{label}</label>
        <textarea value = {value} onChange = {handleOnChange}/>
    </div>
    )
    : (
        <div className='form-group'>
            <label>{label}</label>
            <input type={type} value = {value} onChange = {handleOnChange}/>
        </div>
      );
}
export default Input;
      
