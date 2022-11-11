import './AddCard.css'
import React, { useState } from 'react';

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

            <div className='form-group'>
                <label>Word:</label>
                <input type="text" value = {word} onChange = {(e)=> setWord(e.target.value)}/>
            </div>
            <div className = 'form-group'>
                <label>Definition:</label>
                <textarea value = {definition} onChange = {(e)=> setDefinition(e.target.value)}/>
            </div>
            <button type = 'sumbit'>Submit</button>
            <button className = 'bgp'onClick = {close}>Cancel</button>
            </form>
        </div>
    ): noClose ? (
        <div>
            <form onSubmit = {handleSubmit}>
                <div className='form-group'>
                    <label>Word:</label>
                    <input type="text" value = {word} onChange = {(e)=> setWord(e.target.value)}/>
                </div>
                <div className = 'form-group'>
                    <label>Definition:</label>
                    <textarea value = {definition} onChange = {(e)=> setDefinition(e.target.value)}/>
                </div>
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




// import './AddCard.css'
// import React, { useState } from 'react';

// const cardTemplate = {
//     word:'',
//     definition:'',
// }



// const AddCard = ({close, submit, currentCollection, cardData = {cardTemplate}, noClose}) => {
//     const [word,setWord] = useState(cardData.word);
//     const [definition,setDefinition] = useState(cardData.definition);

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         let newCard = {word:word,definition:definition};
//         submit(newCard);
//         close();
//     }

//     return currentCollection.title && !noClose ?(  
//         <form onSubmit = {handleSubmit}>
//             <div className='form-group'>
//                 <label>Word:</label>
//                 <input type="text" value = {word} onChange = {(e)=> setWord(e.target.value)}/>
//             </div>
//             <div className = 'form-group'>
//                 <label>Definition:</label>
//                 <textarea value = {definition} onChange = {(e)=> setDefinition(e.target.value)}/>
//             </div>
//             <button type = 'sumbit'>submit</button>
//             <button className = 'bgp' onClick = {close()}>Cancel</button>
//         </form>
//     ): noClose ? (
//         <form onSubmit = {handleSubmit}>
//         <div className='form-group'>
//             <label>Word:</label>
//             <input type="text" value = {word} onChange = {(e)=> setWord(e.target.value)}/>
//         </div>
//         <div className = 'form-group'>
//             <label>Definition:</label>
//             <textarea value = {definition} onChange = {(e)=> setDefinition(e.target.value)}/>
//         </div>
//         <button type = 'sumbit'>submit</button>
//     </form>
//     ): 
//         <form >
//         <h4 className='modal-warning'>Please Select a Collection First </h4>
//         <button className = 'bgp'onClick = {close()}>Close</button>
//         </form>
// }
 
// export default AddCard;