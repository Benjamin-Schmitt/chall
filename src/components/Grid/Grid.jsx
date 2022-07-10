import { useState } from 'react';
import Modal from '../Modal/Modal.jsx';
import './grid.css';

const Grid = ({ books }) => {    
    const [pagination, setPagination] = useState(books);
    const [openModal, setOpenModal] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    return (
        <div className="grid">
            {books.map(book => (
                <div className="book" key={book.key}>
                    <div className="title">{book.title}</div>
                    <div>by {(book.author_name) && book.author_name[0]}</div>
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
                </div>

            ))
            }
            {openModal && <Modal id={ selectedBook } closeModal={ setOpenModal } />}
        </div>
    );
}
export default Grid;




/* 
useEffect(() => {
    setPagination((prevState) => ({
      ...prevState,
      pageCount: prevState.data.length / prevState.numberPerPage,
      currentData: prevState.data.slice(pagination.offset, pagination.offset + pagination.numberPerPage)
    }))
  }, [pagination.numberPerPage, pagination.offset])
  const handlePageClick = event => {
    const selected = event.selected;
    const offset = selected * pagination.numberPerPage
    setPagination({ ...pagination, offset })
  }
  return (
    <div>
      {pagination.currentData && pagination.currentData.map(((item, index) => (
        <div key={item.id} className="post">
          <h3>{`${item.title} - ${item.id}`}</h3>
          <p>{item.body}</p>
        </div>
      )))
      }
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={pagination.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
} */