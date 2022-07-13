class QuizReducerService {
  submitAnswer(questionsState, data) {
    const questions = [...questionsState]
    questionsState.push(data)
    return {
      questions
    }
  }

  getTotalCorrectAnswers(questionsState) {
    let totalCorrectAnswers = 0;
    questionsState.forEach(question => {
      const incorrectAnswers = question.incorrect_answers;
      // check correct answers
      if(!incorrectAnswers.includes(question.submitted_answer)) {
        totalCorrectAnswers += 1;
      }
    })

    return totalCorrectAnswers;
  }
}

export default new QuizReducerService();