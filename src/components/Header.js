import React from 'react';
import styled from '@emotion/styled';


const HeaderContainer = styled.header`
    padding:10px;
    font-weight: bold;
    color:#fff;
    text-transform: capitalize;
    background: transparent;
    font-family: 'Lobster', cursive;
`
const H1Header = styled.h1`
    font-size: 2rem;
    margin:0;
    text-align:center;
`


const Header = ({title}) => {
    return ( 
        <HeaderContainer>
            <H1Header>{title}</H1Header>
        </HeaderContainer>
     );
}
 
export default Header;