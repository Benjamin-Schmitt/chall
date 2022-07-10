import { useState } from 'react';
import Grid from '../Grid/Grid.jsx';
import List from '../List/List.jsx';
import './display.css';


const Display = (props) => {
    const [toggle, setToggle] = useState(false);
    const [pages, setPages] = useState(10);

    return(
        <div className="toggle">
            <button 
                className="toggler" 
                onClick={() => setToggle(!toggle)}> 
                List / Grid 
            </button>

            <nav role="navigation">
                <ul>
                    <li><a href="#">Results</a>
                        <ul className="dropdown">
                            <li className="pages" onClick={() => setPages(10)}> 10</li>
                            <li className="pages" onClick={() => setPages(20)}> 20</li>
                            <li className="pages" onClick={() => setPages(50)}> 50</li>
                        </ul>
                    </li>
                </ul>
            </nav>            

            {toggle ? <List books={props.books} pages={pages}/> : <Grid books={props.books} pages={pages} />}   
        </div>
    )
}
export default Display;