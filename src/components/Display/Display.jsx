import { useState } from 'react';
import Grid from '../Grid/Grid.jsx';
import List from '../List/List.jsx';
import './display.css';


const Display = (props) => {
    const [toggle, setToggle] = useState(false);

    return(
        <div className="toggle">
            <button 
                className="toggler" 
                onClick={() => setToggle(!toggle)}> 
                List / Grid 
            </button>
            {toggle ? <List books={props.books}/> : <Grid books={props.books}/>}   
        </div>
    )
}
export default Display;