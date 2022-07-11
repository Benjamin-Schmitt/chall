const Results = (props) => {
    return(
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
    )
}
export default Results;