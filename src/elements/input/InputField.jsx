import './input.css'
const InputField = (props) => {
    return (
        <input
            type="text" 
            onChange={e => {props.setQuery(e.target.value)}} 
            name="books" 
            id="books" 
            placeholder="search by title"   
            required                   
        />
    )
}
export default InputField;