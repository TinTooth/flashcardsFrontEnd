import { useEffect, useState } from 'react';
import './Card.css'

const Card = ({flashCards,currentCard}) => {
    const [flip, setFlip] = useState('');
    const [speed,setSpeed] = useState('');
    const [color,setColor] = useState('');

    useEffect(() => {
        setColor('color')
        setSpeed('')
       setFlip('');
       setColor('');
    },[flashCards,currentCard])
    
    const handleClick = () => {
        setSpeed('speed');
        if(flip == ''){setFlip('flip')}
        else {setFlip('')}
    }

    return flashCards[0].word? (  
        <div className={`card-container ${flip} ${speed} ${color}`} onClick = {handleClick}>
            <div className='card'>
                <div className='words'>
                {flashCards[currentCard].word}
                </div>
                <div className='definitions'>
                {flashCards[currentCard].definition}
                </div>
            </div>
        </div>
    ): <h1 className='card-container'>Please Pick a Collection Above</h1>;
}
 
export default Card;