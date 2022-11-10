import React, { useState } from 'react';


const AddCollection = ({close, createCollection}) => {
    const [title,setTitle] = useState('')
    const [word,setWord] = useState('');
    const [definition,setDefinition] = useState('');


const handleSubmit = (e) => {
    e.preventDefault();
    let newCollection = {title:title};
    let newCard = {word:word,definition:definition};
    let newItems = {newCollection:newCollection,newCard:newCard};
    close()
    createCollection(newItems);
}

    return (
        <form onSubmit = {handleSubmit}>
            <div className='form-group pad'>
                <label>Collection Title</label>
                <input type="text" value = {title} onChange = {(e)=> setTitle(e.target.value)}/>
            </div>
            <button type = 'sumbit'>Create Collection</button>
            <button className = 'bgp'onClick = {close}>Cancel</button>
        </form>

      );
}
 
export default AddCollection;
