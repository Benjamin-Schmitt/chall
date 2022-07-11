import './button.css'
const Toggle = (props) => {
    return (
        <button 
            className="toggler" 
            onClick={() => props.setToggle(!props.toggle)}
            > 
            List / Grid 
        </button>
    )
}
export default Toggle;