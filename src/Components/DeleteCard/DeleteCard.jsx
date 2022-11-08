import React, { useState } from 'react';

const DeleteCard = ({close, deleteCard, flashCards, currentCard}) => {
    const handleSubmit = () => {
        deleteCard();
        close();
    }
    
    return flashCards[0].word ? (  
        <form onSubmit={handleSubmit}>

            <h3>Are you sure you want to DELETE the "{flashCards[currentCard].word}" card?</h3>
            <button type = 'submit'>DELETE</button>
            <button className='bgp' onClick = {close}>Cancel</button>
        </form>
    ) :
    <form >
        <h3 className='modal-warning'>Please Select a Collection First </h3>
        <button className = 'bgp'onClick = {close}>Close</button>
    </form>
} ;

 
export default DeleteCard;