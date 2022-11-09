import React, { useState } from 'react';
import './Footer.css'
import Modal from '../Modal/Modal';
import AddCard from '../AddCard/AddCard';
import axios from 'axios';
import DeleteCard from '../DeleteCard/DeleteCard';
import EditCard from '../EditCard/EditCard';



const Footer = ({currentCollection, getFlashCards, currentCard, flashCards,setCurrentCard}) => {
    const [showAdd,setShowAdd] = useState(false)
    const [showEdit,setShowEdit] = useState(false)
    const [showDelete,setShowDelete] = useState(false)

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
            setCurrentCard(currentCard-1)
            getFlashCards(currentCollection.id)
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
            <Modal title = 'Add Card' onClose={handleAdd} show ={showAdd}>
                <AddCard close={handleAdd} addCard= {addCard} currentCollection={currentCollection}/>
            </Modal>

            <Modal title = 'Edit Card' onClose = {handleEdit} show ={showEdit}>
                <EditCard close = {handleEdit}  currentCard ={currentCard} currentCollection={currentCollection} 
                editCard = {editCard} flashCards = {flashCards}/>
            </Modal>
            
            <Modal title = 'Delete Card' onClose = {handleDelete} show ={showDelete}>
                <DeleteCard close = {handleDelete} deleteCard = {deleteCard} 
                currentCard = {currentCard} flashCards = {flashCards}/>
            </Modal>
            <div className='brand'>Brand</div>
            
            <div className='edits'>
                <div  className = 'edit-card'onClick = {handleAdd}>Add Card</div>
                <div  className = 'edit-card'onClick = {handleEdit}>Edit Card</div>
                <div  className = 'edit-card'onClick = {handleDelete}>Delete Card</div>
                
            </div>
            <div className="invs">Brand</div>
        </div>
     );
}
 
export default Footer;
