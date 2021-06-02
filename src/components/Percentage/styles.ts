import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    z-index: 10;
    bottom: 85%;
    right: 91%;
`

export const CircleBorder = styled.div`
    height: 78px;
    width: 78px;

    border-radius: 50%;
    border: 4px solid #116193;
`

export const CircleTotal = styled.div`
    height: 70px;
    width: 70px;

    display: flex;
    align-items: center;

    padding: 10px;

    border-radius: 50%;
    border: 5px solid #00E8E4;

    background-color: #116193;

    p { 
        font-size: 1.5em;
        color: #00E8E4;
        font-weight: 500;
    }
`
