import './AddCard.css'
import React, { useState } from 'react';

const AddCard = ({close, addCard, currentCollection}) => {
    const [word,setWord] = useState('');
    const [definition,setDefinition] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        let newCard = {word:word,definition:definition};
        addCard(newCard);
        close();
    }

    return currentCollection? (  
        <form onSubmit = {handleSubmit}>
            <div className='form-group'>
                <label>Question</label>
                <input type="text" value = {word} onChange = {(e)=> setWord(e.target.value)}/>
            </div>
            <div className = 'form-group'>
                <label>Answer</label>
                <textarea value = {definition} onChange = {(e)=> setDefinition(e.target.value)}/>
            </div>
            <button type = 'sumbit'>Add Card</button>
            <button className = 'bgp'onClick = {close}>Cancel</button>
        </form>

    ): 
        <form >
        <h3 className='modal-warning'>Please Select a Collection First </h3>
        <button className = 'bgp'onClick = {close}>Close</button>
        </form>
}
 
export default AddCard;