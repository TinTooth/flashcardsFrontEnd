import './Modal.css'


const Modal = ({title,onClose,children,show}) => {
    return show ?(
        <>
        <div className="modal-bg">
            <div className='modal'>
                <div className="modal-header">
                    <h3>{title}</h3>
                    <span className='modal-close-btn' onClick ={onClose}>X</span>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
        </> 
     ):null;
}
 
export default Modal;