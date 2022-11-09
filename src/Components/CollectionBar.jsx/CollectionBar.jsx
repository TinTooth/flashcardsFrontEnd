import Collection from '../Collection/Collection';
import './CollectionBar.css'
import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import AddCollection from '../AddCollection/AddCollection';
import axios from 'axios';
import AddCard from '../AddCard/AddCard';


const CollectionBar = ({setCurrentSelections, collections, currentCollection, setCurrentCollection, getAllCollections,getFlashCards}) => {
    const [showAdd,setShowAdd] = useState(false);
    const [showAddCard,setShowAddCard] = useState(false);

    const handleCreateCollection = () => {
        if (!showAdd) {setShowAdd(true);}
        else {setShowAdd(false);}
    }
    const handleAddCard = () => {
        if (!showAddCard) {setShowAddCard(true);}
        else {setShowAddCard(false);}
    }

    const createCollection = (obj) => {
        addCollection(obj.newCollection);
        setShowAddCard(true);
    }

    const createCard = (card) => {
        console.log(collections);
        addCard(card,collections[collections.length-1].id)
    }


   
    async function addCard(newCard,id) {
        let endpoint = 'http://127.0.0.1:8000/api/collections/' + id +'/cards/'
        const response = await axios.post(endpoint,newCard)
        if (response.status === 201){
            setCurrentSelections(collections[collections.length-1])
        }
    } 

    async function addCollection(newCollection) {
        const response = await axios.post('http://127.0.0.1:8000/api/collections/',newCollection)
        if (response.status === 201){
            await getAllCollections();
        }
    }



    return (  
        <>
        <Modal title = 'Create Collecton' onClose = {handleCreateCollection} show = {showAdd} >
            <AddCollection close = {handleCreateCollection} createCollection = {createCollection}/>
        </Modal>
        <Modal title = 'Add First Card' onClose = {handleAddCard} show = {showAddCard} noClose = {true} >
            <AddCard close = {handleAddCard} addCard = {createCard} currentCollection = {currentCollection} display = {true} noClose = {true}/>
        </Modal>


        <div className="collection-container">
            <div className='bar'>
                <div className="dropdown c-box1">
                    <div className = "dropbtn">Collections</div>
                    <div className='dropdown-content'> 
                        <div className = 'drpli'>
                           {collections.map((collection,i) => {
                               return(
                                   <span className='collection' key = {i}>
                                    <Collection collection = {collection} setCurrentSelections = {setCurrentSelections}/>
                                </span>
                            )
                        })} 
                        </div>
                    </div>
                </div>
                <div className="c-box2" >{currentCollection.title} Collection</div>
                <div className='c-box3' onClick = {handleCreateCollection}>Add Collection</div>
            </div>
        </div>
        </>
    );
}
 
export default CollectionBar;