const CardNum = ({currentCollection,flashCards,currentCard}) => {
    return currentCollection ?(
        <div className = 'cardnum-container'>
            <div>{currentCard}:{flashCards.length}</div> 
        </div>
    ): null;
}
 
export default CardNum;