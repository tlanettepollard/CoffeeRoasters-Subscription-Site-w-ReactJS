import { Link } from 'react-router-dom';
import Facebook from '../assets/shared/desktop/icon-facebook.svg';
import Twitter from '../assets/shared/desktop/icon-twitter.svg';
import Instagram from '../assets/shared/desktop/icon-instagram.svg';
import FooterLogo from '../assets/shared/desktop/footerlogo.svg';

export function Footer() {
    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-main-menu'>
                    {" "}
                    <Link to='/'>
                        <img className='footer-logo' src={FooterLogo} alt='coffee roasters logo' />
                    </Link>
                    <ul className='footer-menu'>
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
                <ul className='footer-social-menu'>
                    <li>
                        <img src={Facebook} alt="facbook icon" className='social-icon' />
                    </li>
                    <li>
                        <img src={Twitter} className='social-icon' alt='twitter-icon' />
                    </li>
                    <li>
                        <img src={Instagram} className='social-icon' alt='instagram icon' />
                    </li>
                </ul>
            </div>
        </footer>
    );
}