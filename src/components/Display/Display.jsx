import { useState } from 'react';
import Grid from '../Grid/Grid.jsx';
import List from '../List/List.jsx';
import Toggle from '../../elements/buttons/Toggle.jsx';

const Display = (props) => {
    const [toggle, setToggle] = useState(false);
    const [pages, setPages] = useState(10);

    return(
        <div className="toggle">
            <Toggle setToggle={setToggle} toggle={toggle} setPages={setPages} />
            {toggle ? <List books={props.books} pages={pages}/> : <Grid books={props.books} pages={pages} />}   
        </div>
    )
}
export default Display;