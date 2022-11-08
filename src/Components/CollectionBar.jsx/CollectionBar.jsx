import './CollectionBar.css'

const CollectionBar = ({setCurrentSelections, collections}) => {
    const tempclick = () => {setCurrentSelections(collections[1])};

    return (  
        <div className="collection-container">
            <div className='bar'>
                <div className="c-box" onClick = {tempclick}>Collections</div>
                <div className="c-box">DropDown Place Holder</div>
                <div className='c-box'>Button</div>
            </div>
        </div>
    );
}
 
export default CollectionBar;