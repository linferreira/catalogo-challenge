import React from 'react';
import { Tag } from './styles';

interface IProps {
    label: string;
}

const TagComponent: React.FC<IProps> = ({label}) => <Tag>{label}</Tag>

export default TagComponent