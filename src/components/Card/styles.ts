
import styled from "styled-components";

export const Wrapper = styled.div`
    width: 90vw;
    height: 20vw;

    border-radius: 5px;

    margin-top: 40px;

    display: flex;
`

export const Image = styled.div`
    width: 20vw;
    background-color: #116193;
`

export const Content = styled.div`
    position: relative;
    width: 70vw;
    height: calc(20vw - 60px);

    padding-left: 30px;

    background-color: #EBEBEB;
`

export const Date = styled.p`
    margin-left: 4em;
    padding-top: 5px;

    font-family: 'Lato';
    font-size: 1.2em;
    color: #a5a5a5;
`

export const Resume = styled.p`
    display: inline-block;
    text-align: start;

    margin: 30px 0;

    font-family: 'Lato';
    font-size: 1.2em;
    color: #57585a;
    font-weight: 500;
`

export const Tag = styled.span`
    background: #fff;

    border: 1.5px solid #116193;
    border-radius: 20px;

    padding: 4px 10px;
    margin-right: 10px;

    font-size: 1em;
    color: #116193;

    &:last-child {
        margin-right: 0;
    }
`
