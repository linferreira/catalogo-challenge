import React from 'react';
import CardComponent from '../../components/Card';
import InputSeachComponent from '../../components/InputSearch';
import { Container } from './styles';

const Home: React.FC = () => {
    return (
        <Container>
            <InputSeachComponent placeholder='Busque um filme por nome, ano ou gênero...'/>
            <CardComponent />
            <CardComponent />
        </Container>
    )
}

export default Home