
import styled from "styled-components";

export const Input = styled.input`
    width: 90vw;
    height: 5vh;

    padding: 10px 30px;

    border-radius: 50px;
    border: 1px solid #EBEBEB;

    background-color: #EBEBEB;

    color: #116193;
    font-family: 'Abel';
    font-size: 1em;
    
    &::placeholder { 
        color: #90b6cc; 
        opacity: 1;
        }

        :-ms-input-placeholder {
        color: #90b6cc; 
        }

        ::-ms-input-placeholder { 
        color: #90b6cc; 
    }
`