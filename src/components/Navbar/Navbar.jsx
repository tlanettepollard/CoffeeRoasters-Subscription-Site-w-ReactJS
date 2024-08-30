import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/shared/desktop/logo.svg';
import Hamburger from '../../assets/shared/mobile/icon-hamburger.svg';
import Close from '../../assets/shared/mobile/icon-close.svg';
import NavList from './NavList';

export function Navbar() {
    const [isNotMobile, setIsNotMobile] = useState(window.innerWidth > 767);
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const updateMobile = () => {
        setIsNotMobile(window.innerWidth > 767);
    };

    useEffect(() => {
        window.addEventListener('resize', updateMobile);
        return () => window.removeEventListener('resize', updateMobile);
    });

    const isNavOpen = () => {
        setIsNavExpanded(true);
    };

    const isNavClosed = () => {
        setIsNavExpanded(false);
    }

    let navigate = useNavigate();
    const changeRoute = () => {
        let path = '/subscribe';
        navigate(path);
    }

    return (
        <>
            {isNotMobile ? (
                <nav aria-label='site' className='navbar'>
                    <div className='logo__wrapper'>
                        <Link to='/' className='logo--link'>
                            <img src={Logo} alt='welcome to coffee roasters' />
                        </Link>
                    </div>
                    <div className='navbar__wrapper'>
                        <NavList />
                    </div>
                </nav>
            ) : (
                <>
                    <nav className='navbar__mobile'>
                        <div className='logo__wrapper'>
                            <Link to='/' className='logo--link'>
                                <img src={Logo} alt='welcome to coffee subscription' />
                            </Link>
                        </div>
                        {isNavExpanded ? (
                            <img src={Close} className='close' onClick={isNavClosed} />
                        ) : (
                            <img src={Hamburger} className='hamburger-icon' onClick={isNavOpen} />
                        )}
                    </nav>
                    {isNavExpanded ? (
                        <nav className='navbar__mobile--menu'>
                            <NavList />
                            <button className='btn' onClick={changeRoute}>Create Your Plan</button>
                        </nav>
                    ) : (
                        ""
                    )}
                </>
            )}
        </>
    )

}

