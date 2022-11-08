import React, { useState } from 'react';
import './Footer.css'
import Modal from '../Modal/Modal';

const Footer = (prop) => {
    const [showAdd,setShowAdd] = useState(false)
    const [showEdit,setShowEdit] = useState(false)

    const handleAdd = () => {
        if (!showAdd) {setShowAdd(true);}
        else {setShowAdd(false);}
    }
    const handleEdit = () => {
        if (!showEdit) {setShowEdit(true);}
        else {setShowEdit(false);}
    }

    return ( 
        <div className='footer'>
            <Modal title = 'Add Card' onClose={handleAdd} show ={showAdd}>Test Child</Modal>
            <Modal title = 'Edit Card' oncClose = {handleEdit} show ={showEdit}>Test</Modal>
            <div className='brand'>Brand</div>
            
            <div className='edits'>
                <div  className = 'edit-card'onClick = {handleAdd}>Add Card</div>
                <div  className = 'edit-card'onClick = {handleEdit}>Edit Card</div>
                <div>Delete Card</div>
            </div>
            <div className="invs">Brand</div>
        </div>
     );
}
 
export default Footer;
