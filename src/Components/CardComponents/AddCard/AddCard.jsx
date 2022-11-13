import './AddCard.css'
import React, { useState } from 'react';
import Input from '../../CommonComponents/Input/Input';

 const cardTemplate = {
        word:'',
        definition:'',
    }
    


const AddCard = ({close, onSubmit, currentCollection, noClose, cardData = {cardTemplate}}) => {
    const [word,setWord] = useState(cardData.word);
    const [definition,setDefinition] = useState(cardData.definition);

    const handleSubmit = (e) => {
        e.preventDefault()
        let newCard = {word:word,definition:definition};
        onSubmit(newCard);
        close();
    }

    return currentCollection.title && !noClose ?(  
        <div>
            <form onSubmit = {handleSubmit}>
            <Input label = 'Word:' value = {word} onChange={setWord}/>
            <Input textArea = {true} label = 'Definition:' valuee = {definition} onChange ={setDefinition}/>
            <button type = 'sumbit'>Submit</button>
            <button className = 'bgp'onClick = {close}>Cancel</button>
            </form>
        </div>
    ): noClose ? (
        <div>
            <form onSubmit = {handleSubmit}>
            <Input label = 'Word:' value = {word} onChange={setWord}/>
            <Input label = 'Definition:' valuee = {definition} onChange ={setDefinition}/>
            <button type = 'sumbit'>Submit</button>
            </form>
        </div>
    ): 
    <div>
        <form >
            <h4 className='modal-warning'>Please Select a Collection First </h4>
            <button className = 'bgp'onClick = {close}>Close</button>
        </form>
    </div>
}
 
export default AddCard;




;