import React from 'react';
import {Link} from 'react-router-dom'
import './footer.styles.css'

let Footer =()=>{
    return(
        <div className = 'footer-wrapper'>  
            <ul className = 'footer-links row'>
                <li className="footer-link-item" ><Link to = '/'><i className = 'fa fa-twitter'></i></Link></li>
                <li className="footer-link-item" ><Link to = '/'><i className = 'fa fa-facebook'></i></Link></li>
                <li className="footer-link-item" ><Link to = '/'><i className = 'fa fa-instagram'></i></Link></li>
                <li className="footer-link-item" ><Link to = '/'><i className = 'fa fa-whatsapp'></i></Link></li>
            </ul>
            <button className = 'footer-copyright'>Designed By TLONGE</button>
        </div>
    )
}

export default Footer;

