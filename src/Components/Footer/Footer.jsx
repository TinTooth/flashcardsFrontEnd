import React, { useState } from 'react';
import './Footer.css'
import Modal from '../CommonComponents/Modal/Modal';
import AddCard from '../CardComponents/AddCard/AddCard';
import axios from 'axios';
import DeleteCard from '../CardComponents/DeleteCard/DeleteCard';
import addIcon from "../../Images/AddIcon.png";
import editIcon from "../../Images/EditIcon.png";
import deleteIcon from "../../Images/DeleteIcon.png";



const Footer = ({currentCollection, getFlashCards, currentCard, flashCards,setCurrentCard}) => {
    const [showAdd,setShowAdd] = useState(false);
    const [showEdit,setShowEdit] = useState(false);
    const [showDelete,setShowDelete] = useState(false);

    const handleAdd = () => {
        if (!showAdd) {setShowAdd(true);}
        else {setShowAdd(false);}
    }

    const handleEdit = () => {
        if (!showEdit) {setShowEdit(true);}
        else {setShowEdit(false);}
    }

    const handleDelete = () => {
        if (!showDelete) {setShowDelete(true);}
        else {setShowDelete(false);}
    }

    async function addCard(newCard) {
        let endpoint = 'http://127.0.0.1:8000/api/collections/' + currentCollection.id +'/cards/'
        const response = await axios.post(endpoint,newCard)
        if (response.status === 201){
            getFlashCards(currentCollection.id)
        }
    } 
    async function deleteCard() {
        let endpoint = 'http://127.0.0.1:8000/api/collections/' + currentCollection.id +'/cards/' +flashCards[currentCard].id + '/'
        const response = await axios.delete(endpoint)
        if (response.status === 204){
            if(currentCard != 0){
                setCurrentCard(currentCard-1);
            }
            getFlashCards(currentCollection.id);
        }
    } 
    async function editCard(newCard) {
        let endpoint = 'http://127.0.0.1:8000/api/collections/' + currentCollection.id +'/cards/' +flashCards[currentCard].id + '/'
        const response = await axios.put(endpoint,newCard)
        if (response.status === 200){
            getFlashCards(currentCollection.id)
        }
    }

    return ( 
        <div className='footer'>
            <Modal title = 'Add Card' onClose = {handleAdd} modal ={showAdd}>
                <AddCard close = {handleAdd} onSubmit= {addCard} currentCollection={currentCollection}/>
            </Modal>

            <Modal title = 'Edit Card' onClose = {handleEdit} modal ={showEdit}>
                <AddCard close = {handleEdit} currentCollection={currentCollection} 
                onSubmit = {editCard} flashCards = {flashCards} cardData = {flashCards[currentCard]}/>
            </Modal>
            
            <Modal title = 'Delete Card' onClose = {handleDelete} modal ={showDelete}>
                <DeleteCard close = {handleDelete} deleteCard = {deleteCard} 
                currentCard = {currentCard} flashCards = {flashCards}/>
            </Modal>
            <div className='brand'>FlashCards</div>
            
            <div className='edits'>
                <div className="image-container">
                    <img src={addIcon} alt="add Icon" onClick = {handleAdd} />
                </div>
                <div className="image-container">
                    <img src={editIcon} alt="edit Icon" onClick = {handleEdit} />
                </div>
                <div className="image-container">
                    <img src={deleteIcon} alt="delete Icon" onClick = {handleDelete} />
                </div>
            </div>
            <div className="invs">FlashCards</div>
        </div>
     );
}
 
export default Footer;
