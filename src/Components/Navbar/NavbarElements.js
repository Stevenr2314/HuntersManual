import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom'

export const Nav = styled.nav`
    background: #284e88;
    height: 30vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0%;
    z-index: 10;
`
export const NavMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin-right: -2rem;
    border: 1px dashed gray;
    height: 100%;

    @media screen and (max-width: 800px) {
        display:none;
    }
`

export const Title = styled.h1`
    font-size: 7rem;
    color: #d1b456;
    margin: 0;
`
export const NavTabs = styled.div`
    display: flex;
    flex-direction: row;
    height: 25%;
    border: 1px dashed gray;
`

export const NavLink = styled(Link)`
    background: #ddb581;
    font-size: 2rem;
    border-radius: 5px;
    color: #521664;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: .5rem 2rem;
    margin-right: 1rem;
    /* height: 100%; */
    cursor: pointer;

    &.active {
        color: white;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    border: 1px dashed gray;

    @media screen and (max-width: 800px) {
        display:none;
    }
`

export const NavBtnLink = styled(Link)`
    font-size: 2rem;
    border-radius: 4px;
    background: #381a3f;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    padding: .5rem 1rem;
    margin-right: .8rem;
    transition: all .2s ease-in-out;
    text-decoration: none;

    &:hover {
        background: #6e4f75;
        color: #0f0f0f;
        transition: all .2s ease-in-out;
    }
`
