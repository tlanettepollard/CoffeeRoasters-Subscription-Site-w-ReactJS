import { Link } from 'react-router-dom';
import { useState } from 'react';



const Navbar = () => {
    return (
        <nav className='navigation'>
            <Link to='/'>
                <img className='company-logo' src='/public/assets/shared/desktop/logo.svg' alt='coffee bean icon' />
            </Link>
            <ul>

            </ul>
        </nav>
    )
}

export default Navbar;