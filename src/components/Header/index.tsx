import React from 'react';
import { Header } from './styles';

interface IProps {
    label?: string;
    size?: string;
}

const HeaderComponent = (props: IProps) => {
    return <Header size={props.size}>
        <h1>
            {props.label}
        </h1>
    </Header>
}

export default HeaderComponent