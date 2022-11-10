import React, { useState } from 'react';

const DeleteCard = ({close, deleteCard, flashCards, currentCard}) => {
    const handleSubmit = () => {
        deleteCard();
        close();
    }
    
    return flashCards[0].word && flashCards.length > 1?(  
        <form onSubmit={handleSubmit}>

            <h4 className='pad'>Are you sure you want to DELETE the "{flashCards[currentCard].word}" card?</h4>
            <button type = 'submit'>DELETE</button>
            <button className='bgp' onClick = {close}>Cancel</button>
        </form>
    ): flashCards[0].word ?(
        <form >
        <div className='modal-warning pad'>
            <h4>Collections need at least ONE Card </h4>
            Add another Card before Deleting "{flashCards[currentCard].word}" </div>
        <button className = 'bgp'onClick = {close}>Close</button>
    </form>
     ) :
    <form >
        <h4 className='modal-warning'>Please Select a Collection First </h4>
        <button className = 'bgp'onClick = {close}>Close</button>
    </form>
} ;

 
export default DeleteCard;