import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Modal from '../Modal/Modal.jsx';
import './list.css';


const List = (props) => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = props.pages;
    
    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(props.books.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(props.books.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, props.books]);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % props.books.length;
      setItemOffset(newOffset);
    };    

    return (
        <>
        <div className="list">
            {currentItems.map(book => (
                <div className="book book-list" key={book.key}>
                    <div className="title">{book.title}</div>
                    <div>by {(book.author_name) && book.author_name[0]}</div>
                    <div>First published in: {book.first_publish_year}</div>
                    <div>ISBN: {(book.isbn) && book.isbn[0]}</div>
                    <div className="book-cover">
                    <button onClick={
                            () => { 
                                setSelectedBook(book.cover_i) 
                                setOpenModal(true)
                            }}>
                            <img src={book.cover_i ? `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : 'https://via.placeholder.com/150'} alt={book.title} className="grid-img">
                            </img>
                        </button>
                    </div>
                    {openModal && <Modal id={ selectedBook } closeModal={ setOpenModal } />}
                </div>
            ))}
        </div>

            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
                activeClassName="active"
                />
            </>
    );
}
export default List;
