import './Card.css'

const Card = ({flashCards,currentCard}) => {
    return flashCards.length ? (  
        <div className="card-container">
            {flashCards[currentCard].word}
        </div>
    ): <div className='card-container'>Please Pick a Collection Above</div>;
}
 
export default Card;