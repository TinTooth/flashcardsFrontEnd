import React, { useState } from 'react';


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
                <div className='form-group pad'>
                    <label>Collection Title</label>
                    <input type="text" value = {title} onChange = {(e)=> setTitle(e.target.value)}/>
                </div>
                <button type = 'sumbit'>Create Collection</button>
                <button className = 'bgp'onClick = {close}>Cancel</button>
            </form>
        </div>

      );
}
 
export default AddCollection;
