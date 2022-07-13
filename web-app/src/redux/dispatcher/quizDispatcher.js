import { QuizAction } from "../action/quizAction";

class QuizDispatcher {
  submitResult(result,  dispatch) {
    dispatch({
      type: QuizAction.ANSWER_SUBMITTED_SUCCESSFUL,
      data: result
    })
  }

  setQuizCompleted(dispatch) {
    dispatch({
      type: QuizAction.QUIZ_COMPLETED,
    })
  }
}

export default new QuizDispatcher();