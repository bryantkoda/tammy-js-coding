import { useReducer } from "react";
import quizReducerService from "../../service/reducer/quizReducerService";
import { QuizAction } from "../action/quizAction";

const initialState = {
  questions: [],
  isCompleted: false,
  totalCorrectAnswers: 0,
}

const QuizReducer = (state, action) => {
  switch(action.type) {
    case QuizAction.ANSWER_SUBMITTED_SUCCESSFUL:
      return {
        ...state,
        ...quizReducerService.submitAnswer(state.questions, action.data)
      }
    case QuizAction.QUIZ_COMPLETED:
      const total = quizReducerService.getTotalCorrectAnswers(state.questions)
      return {
        ...state,
        isCompleted: true,
        totalCorrectAnswers: total,
      }
    default: {
      return initialState;
    }
  }
}

const useQuizReducer = () => useReducer(QuizReducer, initialState)

export {
  QuizReducer,
  useQuizReducer
}