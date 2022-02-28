import React, {useEffect, useState} from "react";
import { Nav, NavBtn, NavBtnLink, NavLink, NavMenu, NavTabs, Title } from "./NavbarElements";
import SearchBar from "./SearchBar/SearchBar";

const links = [
    {name: 'Monsters', path: '/monsters'},
    {name: 'Items', path: '/items'},
    {name: 'Weapons', path: '/weapons'},
    {name: 'Decorations', path: '/decorations'}
]

export default function Navbar () {
    return (
        <div>
            <Nav>
                <div>
                    <NavLink to='/'>LOGO</NavLink>
                </div>
                <NavMenu>
                    <Title>Hunter's Manual</Title>
                    <SearchBar />
                    <NavTabs>
                       {links.map((link, index) => (
                        <NavLink key={index} to={link.path} >{link.name}</NavLink>  
                        ))}  
                    </NavTabs>     
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/login'>LOGIN</NavBtnLink>
                    <NavBtnLink to='/login'>SIGN UP</NavBtnLink>
                </NavBtn>
            </Nav>
        </div>
    )
}