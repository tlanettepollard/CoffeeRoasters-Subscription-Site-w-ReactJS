import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-main-menu'>
                    {" "}
                    <Link to='/'>
                        <img className='footer-logo' src='/public/assets/shared/desktop/footerlogo.svg' alt='coffee roasters logo' />
                    </Link>
                    <ul className='footer-menu'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About Us</Link>
                        </li>
                        <li>
                            <Link to='/plan'>Create Your Plan</Link>
                        </li>
                    </ul>
                </div>
                <ul className='footer-social-menu'>
                    <li>
                        <img src='/public/assets/shared/desktop/icon-facebook.svg' alt="facbook icon" className='social-icon' />
                    </li>
                    <li>
                        <img src='/public/assets/shared/desktop/icon-twitter.svg' className='social-icon' alt='twitter-icon' />
                    </li>
                    <li>
                        <img src='/public/assets/shared/desktop/icon-instagram.svg' className='social-icon' alt='instagram icon' />
                    </li>
                </ul>
            </div>
        </footer>
    );
}