import React from 'react';
import styled from '@emotion/styled';

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

const Form = () => {
    return ( 
        <form>
            <Field>
                <Label>Brand</Label>
                <Select>
                    <option value="">--Select--</option>
                    <option value="american">American</option>
                    <option value="european">European</option>
                    <option value="asian">Asian</option>
                </Select>
            </Field>

            <Field>
                <Label>Year</Label>
                <Select>
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
                    value='Basic'
                />Basic
                <InputRadio
                    type="radio" 
                    name="coverage" 
                    value='Premium'
                />Premium
            </Field>

            <Button type='button'>Get a Quote</Button>
        </form>
     );
}
 
export default Form;