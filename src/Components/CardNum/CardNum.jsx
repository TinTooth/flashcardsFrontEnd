import './CardNum.css'


const CardNum = ({flashCards,currentCard}) => {

    return flashCards[0].word?(
        <div className = 'cardnum-container'>
            <div className = 'num'>{currentCard+1}/{flashCards.length}</div> 
        </div>
    ): null;
}
 
export default CardNum;