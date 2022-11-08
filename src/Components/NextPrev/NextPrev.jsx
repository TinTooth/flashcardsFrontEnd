import { Children } from "react";
import './NextPrev.css';

const NextPrev = ({setCurrentCard,flashCards,currentCard,click,text}) => {
    const upCardClick = () => {
        let result = currentCard + 1;
        if (result+1 > flashCards.length){setCurrentCard(0);}
        else { setCurrentCard(result);}
    }
  
    const downCardClick = () => {
      let result = currentCard - 1;
      let length = flashCards.length;
      if ( result < 0 ){ setCurrentCard(length-1);}
      else { setCurrentCard(result);}
    }

    return flashCards.length? ( 
        <div className="card-select" onClick = {click}>{text}</div>
     ):<div className="card-select-no-hover"></div>;
}
 
export default NextPrev;