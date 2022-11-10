import './AddCard.css'
import React, { useState } from 'react';

const AddCard = ({close, addCard, currentCollection, display, noClose}) => {
    const [word,setWord] = useState('');
    const [definition,setDefinition] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        let newCard = {word:word,definition:definition};
        addCard(newCard);
        close();
    }

    return currentCollection.title && !noClose ?(  
        <form onSubmit = {handleSubmit}>
            <div className='form-group'>
                <label>Word:</label>
                <input type="text" value = {word} onChange = {(e)=> setWord(e.target.value)}/>
            </div>
            <div className = 'form-group'>
                <label>Definition:</label>
                <textarea value = {definition} onChange = {(e)=> setDefinition(e.target.value)}/>
            </div>
            <button type = 'sumbit'>Add Card</button>
            <button className = 'bgp'onClick = {close}>Cancel</button>
        </form>
    ): noClose ? (
        <form onSubmit = {handleSubmit}>
        <div className='form-group'>
            <label>Word:</label>
            <input type="text" value = {word} onChange = {(e)=> setWord(e.target.value)}/>
        </div>
        <div className = 'form-group'>
            <label>Definition:</label>
            <textarea value = {definition} onChange = {(e)=> setDefinition(e.target.value)}/>
        </div>
        <button type = 'sumbit'>Add Card</button>
    </form>
    ): 
        <form >
        <h4 className='modal-warning'>Please Select a Collection First </h4>
        <button className = 'bgp'onClick = {close}>Close</button>
        </form>
}
 
export default AddCard;