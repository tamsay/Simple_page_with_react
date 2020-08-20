import React from 'react'
import {Link} from 'react-router-dom'
import './header.styles.css'
import Logo from './logo.png'

let Header =()=>{
    return(
        <div className = 'header-wrapper'>

            <nav className = 'navbar navbar-expand-md'>
                <Link to = '/' className = 'logo-span navbar-brand'><img src={Logo} alt="netflix-logo"/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i className = 'fa fa-bars'></i></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to = '/' className="nav-link" >Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to = '/' className="nav-link" >Training</Link>
                    </li>
                    <li className="nav-item">
                        <Link to = '/' className="nav-link" >Store</Link>
                    </li>
                    <li className="nav-item">
                        <Link to = '/' className="nav-link" >Contact Us</Link>
                    </li>
                    
                    </ul>

                    <span className = 'auth-span'>
                        <i className = 'fa fa-search'></i>
                        <Link to = '/' className = 'nav-item nav-link btn btn-rounded'>Sign In</Link>
                    </span>

                </div>
                
            </nav>
        </div>
    )
}

export default Header;