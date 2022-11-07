import React from 'react';
import './Footer.css'

const Footer = (prop) => {
    return ( 
        <div className='footer'>
            <div className='brand'>Brand</div>
            
            <div className='edits'>
                <div>Add Card</div>
                <div>Edit Card</div>
                <div>Delete Card</div>
            </div>
            <div className="invs">Brand</div>
        </div>
     );
}
 
export default Footer;
