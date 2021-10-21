import React, { useState } from 'react';
import styled from '@emotion/styled';
import { getYearDifference, calculateByBrand, calculateCoverage } from '../helper';

const Field = styled.div`
    display:flex;
    margin-bottom:1rem;
    align-items: center;
`;
const Label = styled.label`
    flex: 0 0 100px;
`
const Select = styled.select`
    display:block;
    background-color: #1C538E;
    color: white;
    padding: 12px;
    width: 250px;
    border: none;
    font-size: 20px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
    -webkit-appearance: button;
    appearance: button;
    outline: none;
    width: 100%;
`
const InputRadio = styled.input`
    margin: 0 1rem;
`
const Button =styled.button`
    background-color:#1C538E;
    font-size:16px;
    padding:1rem;
    color:#fff;
    text-transform: uppercase;
    font-weight: bold;
    border:none;
    width: 100%;
    &:hover{
        cursor: pointer;
        border:solid 2px #1C538E;
        color:#1C538E;
        background-color: #fff;
        border-radius: 10px;
        transition:all 0.2s;
    }
`
const Error = styled.div`
    background-color: #f8d7da;
    color:#842029;
    border:solid 2px #842029;
    border-radius: .25rem;
    padding:1rem;
    width:100%;
    text-align:center;
    margin-bottom:2rem;
`

const Form = ({setSummary}) => {

    const [data, setData] = useState({
        brand:'',
        year:'',
        coverage:'',
        error:false
    });

    const {brand, year, coverage, error} = data;


    const getInfo = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();

        //validate info
        if(brand ==='' || year ===''  || coverage === ''){
            setData({error:true});
            return;
        }
           setData({error:false});

        //get year difference
        let quote = 2000;

        const difference = getYearDifference(year);

        //each year substract 3%
        quote -= (( difference * 3 ) * quote) / 100;

        //calculate brand price
        quote = calculateByBrand(brand) * quote;

        //premium or basic coverage
        const increaseByCoverage = calculateCoverage(coverage);

        //get a price
        quote = parseFloat(increaseByCoverage * quote).toFixed(2);

        setSummary({
            quote:quote,
            data
        })
        
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
        {error ? <Error>All fields are required</Error> : null}
        
            <Field>
                <Label>Brand</Label>
                <Select
                    name='brand'
                    value={brand}
                    onChange={getInfo}
                >
                    <option value="">--Select--</option>
                    <option value="american">American</option>
                    <option value="european">European</option>
                    <option value="asian">Asian</option>
                </Select>
            </Field>

            <Field>
                <Label>Year</Label>
                <Select
                    name='year'
                    value={year}
                    onChange={getInfo}
                >
                    <option value="">--Select--</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>          
            </Field>
            <Field>
                <Label>Coverage</Label>
                <InputRadio
                    type="radio" 
                    name="coverage" 
                    value='basic'
                    checked={coverage === 'basic'}
                    onChange={getInfo}
                />Basic
                <InputRadio
                    type="radio" 
                    name="coverage" 
                    value='premium'
                    checked={coverage === 'premium'}
                    onChange={getInfo}
                />Premium
            </Field>

            <Button type='submit'>Get a Quote</Button>
        </form>
     );
}
 
export default Form;