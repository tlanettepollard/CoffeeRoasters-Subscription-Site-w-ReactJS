import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


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

    return (
        <>
            {isNotMobile ? (
                <nav className='navbar'>
                    <Link to='/'>
                        <img className='company-logo' src='/public/assets/shared/desktop/logo.svg' alt='coffee roasters logo' />
                    </Link>
                    <div className='navbar-menu'>
                        <ul className='navbar-menu--list'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about'>About Us</Link>
                            </li>
                            <li>
                                <Link to='/subscribe'>Create Your Plan</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            ) : (
                <>
                    <nav className='mobile-nav'>
                        <Link to='/'>
                            <img className='company-logo' src='/public/assets/shared/desktop/logo.svg' alt='coffee roasters logo' />
                        </Link>
                        {isNavExpanded ? (
                            <svg
                                onClick={isNavClosed}
                                width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M12.657.843a1.5 1.5 0 010 2.121L9.12 6.5l3.536 3.536a1.5 1.5 0 11-2.121 2.12L7 8.622l-3.536 3.536a1.5 1.5 0 11-2.12-2.121L4.877 6.5 1.343 2.964A1.5 1.5 0 113.464.844L7 4.377 10.536.843a1.5 1.5 0 012.12 0z" fill="#333D4B" fill-rule="evenodd" /></svg>
                        ) : (
                            <svg
                                onClick={isNavOpen}
                                className='hamburger-icon'
                                width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 12a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13zm0-6a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13zm0-6a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13z" fill="#333D4B" fill-rule="evenodd" /></svg>
                        )}
                    </nav>
                    {isNavExpanded ? (
                        <nav className='mobile-nav-menu'>
                            <ul className='mobile-menu--list'>
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/about'>About</Link>
                                </li>
                                <li>
                                    <Link to='/subscribe'>Create Your Plan</Link>
                                </li>
                                </ul>
                                <button>Create Your Plan</button>
                        </nav>
                    ) : (
                        ""
                    )}
                </>
            )}
        </>
    );

}

