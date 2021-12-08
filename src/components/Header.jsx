import React from 'react'
import logo from '../resources/images/header-logo.png'
import {Link} from 'react-router-dom'


function Header() {
    return (
        <header className='ms-main__header'>
            <div>
                <img src={logo} alt="Header Logo" />
            </div>
            <Link to='/' className='link'>
                <h3>AnakaCard</h3>
            </Link>
            <Link to='mail' className='link '>
                <h3>AnakaMail</h3>
            </Link>
        </header>
    )           
}

export default Header
