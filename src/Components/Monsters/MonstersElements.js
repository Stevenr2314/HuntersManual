import { Link } from "react-router-dom";
import styled from "styled-components";

export const MonstersContainer = styled.div`
    height: 75vh;
    width: 70vw;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    /* border: 1px dashed red; */
    margin-left: 15%;
`

export const MonstersTitle = styled.h1`
    font-size: 3rem;
    margin: 0 43%;

`

export const MonsterCard = styled.div`
    height: 15vh;
    width: 10vw;
    margin: 5% 5%;
    border: 1px dashed black;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: black;
`