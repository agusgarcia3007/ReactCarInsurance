import React from 'react'
import styled from '@emotion/styled';
import Header from "./components/Header";
import Form from './components/Form';

const Container = styled.div`
  max-width: 600px;
  margin:0 auto;
  margin-top:20px;
  border: solid 2px #fff;
`

const FormContainer = styled.div`
    background-color:#f8f9fa;
    padding: 3rem;
`



const App = ()=>{
  return(
    <Container>
        <Header 
          title='Car Insurance Quotes'
        />

        <FormContainer>
          <Form />
        </FormContainer> 
    </Container>
  )
}

export default App;
