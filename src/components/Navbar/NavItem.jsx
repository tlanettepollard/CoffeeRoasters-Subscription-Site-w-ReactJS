import { Link } from "react-router-dom";


const NavItem = (props) => {
    return (
        <li className='nav__item'>
            <Link to={props.link}
                role='menuitem'
                onClick={props.click}
                className='anchor nav__item--btn'>
                {props.name}
            </Link>
        </li>
    )
}

export default NavItem