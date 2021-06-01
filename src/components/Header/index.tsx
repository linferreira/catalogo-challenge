import React from 'react';
import { Header } from './styles';

interface IProps {
    label?: string;
}

const HeaderComponent = (props: IProps) => {
    return <Header>
        {props.label}
    </Header>
}

export default HeaderComponent