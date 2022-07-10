import './modal.css'

const Modal = (props) => {
    return(
            <div className="modal" onClick={() => props.closeModal(false)}>
                <div className="modal-box"> <div className="exit">X</div>
                    <img src={`http://covers.openlibrary.org/b/id/${props.id}-L.jpg`}></img>   
                </div>              
        </div>
    )
}
export default Modal;