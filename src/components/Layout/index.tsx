import React from 'react';
import Content from '../Content';
import HeaderComponent from '../Header';

const Layout: React.FC = ({children}) => {
    return (
        <>
            <HeaderComponent label="Movies"/>
            <Content>{children}</Content>
        </>
    )
}

export default Layout