
import styled from "styled-components";

interface IPropsHeader {
    size?: string
}

export const Header = styled.header<IPropsHeader>`
    width: 100%;
    height: ${(props) => props.size === 'small' ? '60px' : "70px"};
    
    display: flex;
    align-items: ${(props) => props.size === 'small' ? 'flex-end' : "center"};
    justify-content: ${(props) => props.size === 'small' ? 'start' : "center"};

    background-color: #116193;

    h1 { 
        margin-left: ${(props) => props.size === 'small' ? "3.5em" : 0};
        color: #00E8E4;
        font-weight: 300;
        font-size: 2em;
        font-family: 'Abel';
    }
`