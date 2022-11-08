import axios from 'axios';
import {useEffect, useState} from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import CardNum from './Components/CardNum/CardNum';
import CollectionBar from './Components/CollectionBar.jsx/CollectionBar';
import Card from './Components/Card/Card';
import NextPrev from './Components/NextPrev/NextPrev';

function App() {
  const [collections,setCollections] = useState([]);
  const [flashCards,setFlashCards] = useState([{word:"",definition: ""}]);
  const [currentCollection,setCurrentCollection] = useState();
  const [currentCard, setCurrentCard] = useState(0)

  useEffect(() => {
    getAllCollections();

  },[]);

  async function getAllCollections() {
    const response = await axios.get('http://127.0.0.1:8000/api/collections/');
    setCollections(response.data)
  }

  async function getFlashCards(collectionID) {
    let endpoint = 'http://127.0.0.1:8000/api/collections/' + collectionID +'/cards/';
    const response = await axios.get(endpoint);
    setFlashCards(response.data)
  }

  const setCurrentSelections = (collection) => {
      setCurrentCollection(collection);
      getFlashCards(collection.id);
  }

  const upCardClick = () => {
      let result = currentCard + 1;
      if (result+1 > flashCards.length){setCurrentCard(0);}
      else { setCurrentCard(result);}
  }

  const downCardClick = () => {
    let result = currentCard - 1;
    let length = flashCards.length;
    if ( result < 0 ){ setCurrentCard(length-1);}
    else { setCurrentCard(result);}
}


  return (
    <div>
      <div className='main-container'>
        <NextPrev setCurrentCard={setCurrentCard} 
          flashCards = {flashCards} currentCard = {currentCard} 
          click = {downCardClick} text = 'PREV'></NextPrev> 
        <div className='center-container'>
          <CollectionBar setCurrentSelections={setCurrentSelections} collections={collections} setCurrentCard = {setCurrentCard}/>
          <Card flashCards={flashCards} currentCard={currentCard}/>
          <CardNum flashCards={flashCards} currentCard = {currentCard}/>
        </div>
        <NextPrev setCurrentCard={setCurrentCard} 
          flashCards = {flashCards} currentCard = {currentCard} 
          click = {upCardClick} text = 'NEXT'></NextPrev> 
      </div> 
      <Footer/>
    </div>
  );
}

export default App;
