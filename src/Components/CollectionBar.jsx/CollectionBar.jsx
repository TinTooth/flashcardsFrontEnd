import Collection from '../Collection/Collection';
import './CollectionBar.css'
import React, { useState } from 'react';
import Modal from '../Modal/Modal';


const CollectionBar = ({setCurrentSelections, collections, currentCollection}) => {
    const [showAdd,setShowAdd] = useState(false);

    const handleAdd = () => {
        if (!showAdd) {setShowAdd(true);}
        else {setShowAdd(false);}
    }

    

    return (  
        <>
        <Modal title = 'Add Collecton' onClose = {handleAdd} show = {showAdd} ></Modal>

        <div className="collection-container">
            <div className='bar'>
                <div className="dropdown c-box1">
                    <div className = "dropbtn">Collections</div>
                    <div className='dropdown-content'> 
                        <ul>
                           {collections.map((collection,i) => {
                               return(
                                   <li key = {i}>
                                    {console.log(collection)}
                                    <Collection collection = {collection} setCurrentSelections = {setCurrentSelections}/>
                                </li>
                            )
                        })} 
                        </ul>
                    </div>
                </div>
                <div className="c-box2" value = {'Temp, Display Collection here'}></div>
                <div className='c-box3' onClick = {handleAdd}>Add Collection</div>
            </div>
        </div>
        </>
    );
}
 
export default CollectionBar;