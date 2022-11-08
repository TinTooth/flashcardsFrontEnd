import './AddCard.css'
import React, { useState } from 'react';

const AddCard = ({close, addCard}) => {
    const [word,setWord] = useState('');
    const [definition,setDefinition] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        let newCard = {word:word,definition:definition};
        addCard(newCard);
        close();
    }

    return (  
        <form onSubmit = {handleSubmit}>
            <div>
                <label>Question</label>
                <input type="text" value = {word} onChange = {(e)=> setWord(e.target.value)}/>
            </div>
            <div>
                <label>Answer</label>
                <input type="text" value = {definition} onChange = {(e)=> setDefinition(e.target.value)}/>
            </div>
            <button type = 'sumbit'>Add Card</button>
        </form>

    );
}
 
export default AddCard;