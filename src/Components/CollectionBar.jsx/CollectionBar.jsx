import './CollectionBar.css'

const CollectionBar = ({setCurrentSelections, collections, setCurrentCard}) => {
    const tempclick = () => {setCurrentSelections(collections[1]); setCurrentCard(0)};
    const tempclick2 = () => {setCurrentSelections(collections[2]);setCurrentCard(0)};

    return (  
        <div className="collection-container">
            <div className='bar'>
                <div className="c-box1" onClick = {tempclick}>Collections</div>
                <div className="c-box2">DropDown Place Holder</div>
                <div className='c-box3' onClick = {tempclick2}>Button</div>
            </div>
        </div>
    );
}
 
export default CollectionBar;