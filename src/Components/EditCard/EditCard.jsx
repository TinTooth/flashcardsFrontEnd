import './EditCard.css'
import React, { useState } from 'react';


const EditCard = ({currentCard,flashCards,editCard,close, currentCollection}) => {
    
    const [word,setWord] = useState(flashCards[currentCard].word);
    const [definition,setDefinition] = useState(flashCards[currentCard].definition);

    const handleSubmit = (e) => {
        e.preventDefault()
        let newCard = {word:word,definition:definition};
        editCard(newCard);
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
            <button type = 'sumbit'>Edit Card</button>
            <button className = 'bgp'onClick = {close}>Cancel</button>
        </form>
    ) :
    <form >
    <h3 className='modal-warning'>Please Select a Collection First </h3>
    <button className = 'bgp'onClick = {close}>Close</button>
    </form>

}
 
export default EditCard;