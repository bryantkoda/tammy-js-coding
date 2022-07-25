import axios from 'axios';

// const SERVER_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:4000";
const SERVER_URL = "https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean";
class QuestionApiService {
  async loadQuestions(onSuccess, onFailed) {
    await axios.get(SERVER_URL)
      .then(({ data }) => data)
      .then(res => {
        onSuccess(res.results)
      })
  }
}

export default new QuestionApiService();