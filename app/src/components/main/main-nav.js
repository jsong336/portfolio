import React from 'react'
import { Navbar, NavbarBrand, Nav, Image, NavItem} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

const NavStyle = {
    //backgroundColor : "rgba(0, 0, 0, 0.5)",
}

const MainNav = () =>{
    return (
        <div>
            <Navbar variant="dark">
                <NavbarBrand>Jeongwon Song</NavbarBrand>
                <NavbarCollapse>
                    <Nav className='ml-auto'>
                        <NavbarBrand href='#about'>About</NavbarBrand>
                        <NavbarBrand href='#contact'>Contact</NavbarBrand>  
                    </Nav>
                </NavbarCollapse>
            </Navbar>    
        </div>);
}

export default MainNav