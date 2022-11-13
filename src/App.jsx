import axios from 'axios';
import {useEffect, useState} from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import CollectionBar from './Components/CollectionComponents/CollectionBar.jsx/CollectionBar';
import Card from './Components/CardComponents/Card/Card';

function App() {
  const [collections,setCollections] = useState([]);
  const [flashCards,setFlashCards] = useState([{word:"",definition: ""}]);
  const [currentCollection,setCurrentCollection] = useState({id: 0 ,title:''});
  const [currentCard, setCurrentCard] = useState(0);
  const [cardColor,setCardColor] = useState('');
  const [flip, setFlip] = useState('');
  const [displayControls, setDisplayControls] = useState('no-display');

  useEffect(() => {
    getAllCollections();

  },[]);

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

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
      if (flip){
        setCardColor('color');
        waitSetSellection(collection);
      }
      else {
        setCurrentCollection(collection);
        getFlashCards(collection.id);
        setCurrentCard(0);
      }
      setDisplayControls('');
  }

  const upCardClick = () => {
    let result = currentCard + 1;
    if (result+1 > flashCards.length){
      setCardColor('color');
      waitSetCard(0)
    }
    else { 
      setCardColor('color');
      waitSetCard(result)
    }
}

const downCardClick = () => {
  let result = currentCard - 1;
  let length = flashCards.length;
  if ( result < 0 ){ 
    setCardColor('color');
    waitSetCard(length-1)
  }
  else { 
    setCardColor('color');
    waitSetCard(result)
    
  }
}
const waitSetCard = async (result) => {
  await sleep(200);
  setCurrentCard(result);
}
const waitSetSellection = async (collection) => {
  await sleep(250);
  setCurrentCollection(collection);
  getFlashCards(collection.id);
  setCurrentCard(0);
}

  return (
    <div>
      <div className='main-container'>
      <div className={`card-select ${displayControls}`} onClick = {downCardClick}>PREV</div>
        <div className='center-container'>
          <CollectionBar  getFlashCards={getFlashCards} getAllCollections = {getAllCollections} setCurrentSelections={setCurrentSelections} 
          collections={collections} setCurrentCard = {setCurrentCard} 
          currentCollection = {currentCollection} setCurrentCollection = {setCurrentCollection}/>
          <Card flip = {flip} setFlip = {setFlip} flashCards={flashCards} currentCard={currentCard} color = {cardColor} setColor = {setCardColor}/>
          <div className = {`num ${displayControls}`}>{currentCard+1}/{flashCards.length}</div>
        </div>
        <div className={`card-select ${displayControls}`} onClick = {upCardClick}>NEXT</div>
      </div> 
      <Footer currentCollection={currentCollection} getFlashCards ={getFlashCards}
       currentCard = {currentCard} flashCards = {flashCards}
       setCurrentCard = {setCurrentCard}/>
    </div>
  );
}

export default App;
