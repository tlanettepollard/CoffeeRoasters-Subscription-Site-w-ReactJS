import NavItem from "./NavItem";

const NavList = () => {
    return (
        <div className="navbar__menu">
            <ul className='nav__list' role='menubar' aria-label='main menu'>
                <NavItem name='Home' link='/' />
                <NavItem name='About Us' link='/about' />
                <NavItem name='Create Your Plan' link='/subscribe' />
            </ul>
        </div>
    )
}

export default NavList