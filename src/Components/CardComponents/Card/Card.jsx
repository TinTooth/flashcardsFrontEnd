
import { useEffect, useState } from 'react';
import './Card.css'

const Card = ({flashCards,currentCard, color,setColor,flip, setFlip}) => {
    const [speed,setSpeed] = useState('');

    

    useEffect(() => {
        if(flip === 'flip'){
            flipcard();
            changecolor(400);
        }
        else {
            changecolor(250);
        }
        
    },[flashCards,currentCard,color])

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    const changecolor = async (time) => {
        await sleep(time);
        setColor('');
    }

    const flipcard = async () => {
        await sleep(150);
        setFlip('');
    }

    const handleClick = () => {
        setSpeed('speed');
        if(flip === ''){setFlip('flip')}
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