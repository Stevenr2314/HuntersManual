import styled from "styled-components";

export const MonsterDiv = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    background: #284e88;
    margin: 0;
    padding-top: 2rem;
`

export const Info = styled.div`
    background: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
    height: 95%;
    border: 1px dashed black;
    border-radius: 10px;

    p{
        font-size: 1.5rem;
        width:80%;
        text-align: center;
        line-height: 1.8;

    }
`
export const Name = styled.h1`
    font-size: 4rem;
`
export const Titles = styled.div`
    font-size: 2.5rem;
    text-decoration: underline;
    margin: 2% 0;

    &.species{
        display: inline;
        text-decoration: none;
    }
`
export const ImgContainer = styled.div`
    height: 40%;
    background: #6b2e6b;
    width: 80%;
    background: no-repeat;
    background-size: contain;
    border: 1px dashed black;

    
`
