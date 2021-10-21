import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const QuoteContainer = styled.div `
    padding:1rem;
    text-align: center;
    background-color: #1C538E;
    color:#fff;
    margin-top:1rem;
`



const Summary = ({data}) => {

    const {brand, year, coverage} = data

    return ( 
        <QuoteContainer>
            <h2>Quote Summary</h2>
            <ul>
                <li>Brand: {brand}</li>
                <li>Year: {year}</li>
                <li>Coverage: {coverage}</li>
            </ul>
        </QuoteContainer>
     );
}

Summary.propTypes = {
    data:PropTypes.object.isRequired
}
 
export default Summary;