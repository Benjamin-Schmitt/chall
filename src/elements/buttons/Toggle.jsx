import './button.css'
const Toggle = (props) => {
    return (
        <div className="bar">
        <button 
            className="toggler" 
            onClick={() => props.setToggle(!props.toggle)}
            > 
            List / Grid 
        </button>

        <nav role="navigation">
                <ul>
                    <li><a href="#">Results</a>
                        <ul className="dropdown">
                            <li className="pages" onClick={() => props.setPages(10)}> 10</li>
                            <li className="pages" onClick={() => props.setPages(20)}> 20</li>
                            <li className="pages" onClick={() => props.setPages(50)}> 50</li>
                        </ul>
                    </li>
                </ul>
            </nav> 

        </div>
    )
}
export default Toggle;