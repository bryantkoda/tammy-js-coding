import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Button from "../components/button";
import Card from "../components/card";
import Label from "../components/label";
import QuestionDispatcher from "../redux/dispatcher/questionDispatcher";
import QuizDispatcher from "../redux/dispatcher/quizDispatcher";
import { useQuestionReducer } from "../redux/reducer/questionReducer";
import { useQuizReducer } from "../redux/reducer/quizReducer";
import quizDataService from "../service/data/quizDataService";

const StyledQuizContainer = styled.div`
  width: 600px;
  background: #fff;
`

const StyledQuizResultWrapper = styled.div``

const StyledResultHeading = styled.div`
  margin: auto;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
`

const StyledResultBody = styled.div`
  text-align: left;
  margin: auto 50px;
`

const StyledActionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`

export default function Quiz() {
  const [questionState, questionDispatch] = useQuestionReducer();
  const [quizState, quizDispatch] = useQuizReducer();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const loadRef = useRef(false);

  useEffect(() => {
    if(!loadRef.current) {
      QuestionDispatcher.loadQuestions(questionDispatch)
      loadRef.current = true;
    }
    if(questionState && questionState.length !== 0) {
      setQuestions(questionState.questions)
    }
  }, [questionState, quizState])

  const handleSubmit = (answer) => {
    quizDataService.submitResult(answer, questions[currentIndex], quizDispatch)
    setCurrentIndex(prev => prev + 1)
    if(currentIndex === questions.length - 1) {
      QuizDispatcher.setQuizCompleted(quizDispatch);
      setShowResults(true)
    }
  }

  return (
    <StyledQuizContainer>
      {questions && questions[currentIndex] && (
        <Card 
          category={questions[currentIndex].category}
          question={questions[currentIndex].question}
          questionIndex={currentIndex + 1}
          totalQuestions={questions.length}
          onSubmit={(answer) => handleSubmit(answer)}
        />
      )}
      <QuizResults shown={showResults} results={quizState} />
    </StyledQuizContainer>
  )
}

function QuizResults(props) {
  const { shown = false, results } = props;
  const { questions, totalCorrectAnswers } = results
  return (
    <>
     {
      shown && (
        <StyledQuizResultWrapper>
          <StyledResultHeading>
            You scored 
           <div>{totalCorrectAnswers} / {questions.length}</div>
          </StyledResultHeading>
           <StyledResultBody>
            {questions && questions.map(({question, isAnswerCorrect, correct_answer, id}) => (
              <p key={`question-${question.category}-${id}`} >
                <Label text={question} showError={!isAnswerCorrect} remarks={correct_answer}/>
              </p>
            ))}
           </StyledResultBody>
           <StyledActionsWrapper>
            <Button text={'Play again?'} onClick={() => window.location.replace('/')} />
           </StyledActionsWrapper>
        </StyledQuizResultWrapper>
      )
     }
    </>
  )
}