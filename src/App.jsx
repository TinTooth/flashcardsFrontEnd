import axios from 'axios';
import {useEffect, useState} from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import CardNum from './Components/CardNum/CardNum';
import CollectionBar from './Components/CollectionBar.jsx/CollectionBar';
import Card from './Components/Card/Card';

function App() {
  const [collections,setCollections] = useState([]);
  const [flashCards,setFlashCards] = useState([]);
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

  const changeCard = (mod) => {
    if (flashCards.length){
      let result = currentCard + mod;
      if (result > flashCards.length){ setCurrentCard(0)}
      else if ( result < 0 ){ setCurrentCard(flashCards.length)}
      else { setCurrentCard(result)}
    }
  }


  return (
    <div>
      <div className='main-container'>
        <div className="card-select" onClick = {changeCard(-1)}>PREV</div>
        <div className='center-container'>
          <CollectionBar setCurrentSelections={setCurrentSelections} collections={collections}/>
          <Card flashCards={flashCards} currentCard={currentCard}/>
          <CardNum flashCards={flashCards} currentCard = {currentCard}/>
        </div>
        <div className="card-select" onClick = {changeCard(1)}>NEXT</div>
      </div> 
      <Footer/>
    </div>
  );
}

export default App;
