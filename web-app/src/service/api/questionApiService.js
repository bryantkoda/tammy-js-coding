import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:4000";
class QuestionApiService {
  async loadQuestions(onSuccess, onFailed) {
    await axios.get(`${SERVER_URL}/api/questions`)
      .then(res => {
        onSuccess(res.data)
      })
  }
}

export default new QuestionApiService();