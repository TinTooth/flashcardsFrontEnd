
import './NextPrev.css';

const NextPrev = ({flashCards,click,text}) => {
   
    return flashCards[0].word? ( 
        <div className="card-select" onClick = {click}>{text}</div>
     ):<div className="card-select-no-hover"></div>;
}
 
export default NextPrev;