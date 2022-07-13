import React from "react";
import styled from "styled-components";
import { AnswerType } from "../constants/AnswerType";
import Button from "./button";

const Container = styled.div`
  height: 100vh;
  display: grid;
  text-align: center;
`

const StyledCategoryWrapper = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin: auto;
`

const StyledQuestionContainer = styled.div`
  border: 1px solid #000;
  width: 500px;
  height: 300px;
  display: flex;
  margin: auto;
  span {
    margin: auto;
    font-size: 30px;
    font-weight: 500;
    max-width: 300px;
  }
`

const StyledQuestionNumberWrapper = styled.div`
  font-size: 20px;
  font-weight: 500;
`

const StyledActionsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export default function Card(props) {
  const { category, question, questionIndex, totalQuestions, onSubmit } = props;
  return (
    <Container>
      <StyledCategoryWrapper>
        {category}
      </StyledCategoryWrapper>
      <StyledQuestionContainer>
       <span dangerouslySetInnerHTML={{__html: question}} />
      </StyledQuestionContainer>
      <StyledQuestionNumberWrapper>
        {questionIndex} out of {totalQuestions}
      </StyledQuestionNumberWrapper>
      <StyledActionsWrapper>

      <Button text={AnswerType.TRUE} onClick={() => onSubmit(AnswerType.TRUE)}/>
      <Button text={AnswerType.FALSE} onClick={() => onSubmit(AnswerType.FALSE)}/>
      </StyledActionsWrapper>
    </Container>
  )
}