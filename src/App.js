import React, {useState} from 'react'
import styled from '@emotion/styled';
import Header from "./components/Header";
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';

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

  const [summary, setSummary] = useState({});

  const { quote, data } = summary;

  return(
    <Container>
        <Header 
          title='Car Insurance Quotes'
        />

        <FormContainer>
          <Form 
            setSummary={setSummary}
          />

          {data ? (<Summary data={data}/>): null}

          <Result 
            quote={quote}
          />
          
        </FormContainer> 

    </Container>
  )
}

export default App;
