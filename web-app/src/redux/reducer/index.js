import { combineReducers } from '@reduxjs/toolkit';
import { QuestionReducer } from './questionReducer';
import { QuizReducer } from './quizReducer';

export default combineReducers({
  questionReducer: QuestionReducer,
  quizReducer: QuizReducer,
});