import React from 'react';
import { Input } from './styles';

interface IProps {
    placeholder?: string;
}

const InputSeachComponent = (props: IProps) => {
    return <Input placeholder={props.placeholder} />
}

export default InputSeachComponent