import React from 'react'
import styled from "styled-components";
import { 
  Link,
} from 'react-router-dom'
import ButtonLink from '../components/buttonLink';

const StyledContainer = styled.div`
  width: 600px;
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background: #fff;
  display: grid;
`

const StyledTitle = styled.div`
  text-align: center;
  max-width: 350px;
  margin: auto;
`

const StyledBody = styled.div`
  text-align: center;
  margin: auto;

`

const StyledParagraph = styled.p`
  font-size: 30px;
  max-width: 350px;
  margin-bottom: 50px;
  font-weight: 500;
`

const StyledControl = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  align-items: end;
  a {
    font-size: 30px;
    color: #000;
    font-weight: 700;
  }
`
export default function HomePage() {
  return (
    <StyledContainer>
      <StyledTitle>
        <h1>Welcome to  the Trivia Challenge!</h1>
      </StyledTitle>
      <StyledBody>
        <StyledParagraph>You will be presented with 10 True or False questions.</StyledParagraph>
        <StyledParagraph>Can you sore 100%?</StyledParagraph>
      </StyledBody>
      <StyledControl>
        <ButtonLink>
          <Link to="quiz">BEGIN</Link>
        </ButtonLink>
      </StyledControl>
    </StyledContainer>
  )
}
