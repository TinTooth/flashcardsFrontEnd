import React, { useState } from 'react';

const DeleteCard = ({close, deleteCard, flashCards, currentCard}) => {
    const handleSubmit = () => {
        deleteCard();
        close();
    }
    
    return flashCards[0].word && flashCards.length > 1?(  
        <div>
            <form onSubmit={handleSubmit}>
                <h4 className='pad'>Are you sure you want to DELETE the "{flashCards[currentCard].word}" card?</h4>
                <button type = 'submit'>DELETE</button>
                <button className='bgp' onClick = {close}>Cancel</button>
            </form>
        </div>
    ): flashCards[0].word ?(
        <div>
            <form >
                <div className='modal-warning pad'>
                    <h4>Collections need at least ONE Card </h4>
                    Add another Card before Deleting "{flashCards[currentCard].word}" </div>
                <button className = 'bgp'onClick = {close}>Close</button>
            </form>
        </div>
     ) :
     <div>
        <form >
            <h4 className='modal-warning'>Please Select a Collection First </h4>
            <button className = 'bgp'onClick = {close}>Close</button>
        </form>
     </div>
} ;

 
export default DeleteCard;