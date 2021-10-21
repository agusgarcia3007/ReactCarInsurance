import React from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Message = styled.p `
    background-color: #1c538a;
    margin-top: 1rem;
    padding: 1rem;
    text-align:center;
    font-size: 18px;
    color:#fff;
`
const Quote = styled.p `
    color:#1C538A;
    padding:1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin:0;

`

const Result = ({quote}) => {


    return (
        !quote ? 
        <Message>Choose brand, year and your coverage</Message> : 
        <Quote>Your Quote is: ${quote}</Quote>  
    )
}

Result.propTypes = {
    quote:PropTypes.number
}
 
export default Result;