import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0;
`
export const MonsterDiv = styled.div`
    display: flex;
    justify-content: center;
    height: 98%;
    width: 100%;
    background: #284e88;
    margin: 0;
    padding-top: 2rem;
    /* border: 1px dashed black; */
`

export const Info = styled.section`
    background: #f5f4ef;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
    height: 95%;
    border: 1px dashed black;
    border-radius: 10px;

    p{
        display: inline;
        text-decoration: none;
        font-size: 1.5rem;
        /* width:80%; */
        text-align: center;
        line-height: 1.8;

    }
`

export const Weaknesses = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    width:80%;
    border: 1px dashed black;
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
export const Arrow = styled.div`
    height: 17%;
    width: 10%;
    background: #284e88;
    border-radius: 5%;
    color: #f5f4ef;
    font-size: 8rem;
    text-align: center;
    cursor: pointer;
`
