import './list.css';


const List = ({ books, onUpdateBook }) => {
    /* console.log(books) */

    

    return (
        <div className="list">
            {books.map(book => (
                <div className="book book-list" key={book.key}>
                    <div className="title">{book.title}</div>
                    <div>by {(book.author_name) && book.author_name[0]}</div>
                    <div>First published in: {book.first_publish_year}</div>
                    <div>ISBN: {(book.isbn) && book.isbn[0]}</div>
                    <div className="book-cover">
                        <img src={book.cover_i ? `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : 'https://via.placeholder.com/150'} alt={book.title}>
                        </img>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default List;
