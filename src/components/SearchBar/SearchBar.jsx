import { useState } from 'react'
import './search.css';
import axios from 'axios'
import Display from '../Display/Display.jsx';
import SearchButton from '../../elements/buttons/SearchButton';
import InputField from '../../elements/input/InputField';

const SearchBar = () => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState('');
    const url = 'http://openlibrary.org/search.json?title=';
    const fields = 'title,author_name,cover_i,first_publish_year,isbn,key';
    const limit = '100';

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`${url}${query}
        &limit=${limit}
        &fields=${fields}
        `)
        .then(response => {
            setBooks(response.data.docs)
            })
        .catch(err => {
            console.log(err)
            })
        }          
      
    return(
        <div className="outer">            
            <div className="searchbar">
                <fieldset>
                    <legend>Search Books</legend>
                    <form onSubmit={handleSubmit}>                   
                        <InputField setQuery={setQuery} />
                        <SearchButton />
                    </form>
                </fieldset>            
            </div>
            <Display books={books} />
        </div>        
    )
}
export default SearchBar;