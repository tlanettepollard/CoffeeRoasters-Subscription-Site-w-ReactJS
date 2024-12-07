import NavItem from "./NavItem";

const NavList = () => {
    return (
        <ul className='nav__list' role='menubar' aria-label='main menu'>
            <NavItem name='Home' link='/' />
            <NavItem name='About Us' link='/about' />
            <NavItem name='Subscribe' link='/subscribe' />
        </ul>
    )
}

export default NavList