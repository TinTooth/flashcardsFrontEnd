import axios from 'axios';
import {useEffect, useState} from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';

function App() {
  const [collections,setCollections] = useState([]);
  const [flashCards,setFlashCards] = useState([]);

  useEffect(() => {
    getAllCollections();
  },[]);


  async function getAllCollections() {
    const response = await axios.get('http://127.0.0.1:8000/api/collections/');
    setCollections(response.data)
  }

  async function getFlashCards(collectionID) {
    endpoint = 'http://127.0.0.1:8000/api/collections/' + collectionID +'/cards/';
    const response = await axios.get(endpoint);
    setFlashCards(response.endpoint)
  }


  return (
    <div>
      <Footer />
    </div>
  );
}

export default App;
