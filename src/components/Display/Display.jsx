import { useState } from 'react';
import Grid from '../Grid/Grid.jsx';
import List from '../List/List.jsx';
import Results from '../../elements/buttons/Results.jsx';
import Toggle from '../../elements/buttons/Toggle.jsx';
import './display.css';

const Display = (props) => {
    const [toggle, setToggle] = useState(false);
    const [pages, setPages] = useState(10);

    return(
        <div className="toggle">
            <Toggle setToggle={setToggle} toggle={toggle} />
            <Results setPages={setPages}/>                      
            {toggle ? <List books={props.books} pages={pages}/> : <Grid books={props.books} pages={pages} />}   
        </div>
    )
}
export default Display;