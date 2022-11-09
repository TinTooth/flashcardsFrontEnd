import { useEffect, useState } from 'react';
import './Card.css'

const Card = ({flashCards,currentCard}) => {
    const [display,setDisplay] = useState(flashCards[currentCard].word);
    const [word,setWord] = useState(true);
    const [classStyle,setClassStyle] = useState('words');

    useEffect(() => {
        setDisplay(flashCards[currentCard].word);
        setClassStyle('words')
        setWord(true);
    },[flashCards,currentCard])
    
    const handleClick = () => {
        if (word) {
            setDisplay(flashCards[currentCard].definition);
            setWord(false);
            setClassStyle('definitions');
        }
        else {
            setDisplay(flashCards[currentCard].word);
            setWord(true);
            setClassStyle('words');
        }
    }

    return flashCards[0].word? (  
        <div className="card-container" onClick = {handleClick}>
            <div className={classStyle}>
            {display}
            </div>
        </div>
    ): <div className='card-container'>Please Pick a Collection Above</div>;
}
 
export default Card;