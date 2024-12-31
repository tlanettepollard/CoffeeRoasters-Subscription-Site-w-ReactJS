import NavItem from "./NavItem";

const NavList = () => {
    return (
        <div className="navbar__menu">
            <ul className='nav__menu--list' role='menubar' aria-label='main menu'>
                <NavItem name='Home' link='/' />
                <NavItem name='About Us' link='/about' />
                <NavItem name='Subscribe' link='/subscribe' />
            </ul>
        </div>
    )
}

export default NavList