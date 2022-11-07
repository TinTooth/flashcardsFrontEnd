import axios from 'axios';
import {useEffect, useState} from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import CardNum from './Components/CardNum/CardNum';

function App() {
  const [collections,setCollections] = useState([]);
  const [flashCards,setFlashCards] = useState([]);
  const [currentCollection,setCurrentCollection] = useState(1);
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

  const displayLog = () => {console.log(collections); console.log(currentCollection)
  ;console.log(flashCards)}

  return (
    <div>
      <div className='main-container'>
        <div className="card-select" onClick = {displayLog}>PREV</div>
        <div className='center-container'>
          <CardNum flashCards={flashCards} currentCollection = {currentCollection} currentCard = {currentCard}/>
        </div>
        <div className="card-select">NEXT</div>
      </div> 
      <Footer/>
    </div>
  );
}

export default App;
