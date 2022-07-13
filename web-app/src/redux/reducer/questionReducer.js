import { useReducer } from "react";
import { QuestionAction } from "../action/questionAction";

const initialState = {
  questions: []
}

const QuestionReducer = (state, action) => {
  switch(action.type) {
    case QuestionAction.LOAD_QUESTIONS_SUCESSFUL:
      return {
        ...state,
        questions: action.data
      }
    default: {
      return initialState;
    }
  }
}

const useQuestionReducer = () => useReducer(QuestionReducer, initialState);

export {
  QuestionReducer,
  useQuestionReducer
}