import React, { useState } from 'react';
import Input from '../../CommonComponents/Input/Input';


const AddCollection = ({close, createCollection}) => {
    const [title,setTitle] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let newCollection = {title:title};
        close()
        createCollection(newCollection);
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <Input label = "Collection Title" value = {title} onChange = {setTitle}></Input>
                <button type = 'sumbit'>Create Collection</button>
                <button className = 'bgp' onClick = {close}>Cancel</button>
            </form>
        </div>

      );
}
 
export default AddCollection;
