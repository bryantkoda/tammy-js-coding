import quizDispatcher from "../../redux/dispatcher/quizDispatcher";

class QuizDataService {
  submitResult(answer, currentQuestion, dispatch) {
    const submittedAnswer = {
      ...currentQuestion,
      submitted_answer: answer,
      isAnswerCorrect: currentQuestion.correct_answer === answer ? true : false
    }
    quizDispatcher.submitResult(submittedAnswer, dispatch)
  }
}

export default new QuizDataService();