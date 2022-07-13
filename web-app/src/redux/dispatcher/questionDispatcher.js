import questionApiService from "../../service/api/questionApiService";
import { QuestionAction } from "../action/questionAction";

class QuestionDispatcher {
  
  loadQuestions(dispatch) {
    questionApiService.loadQuestions((res) => {
      dispatch({
        type: QuestionAction.LOAD_QUESTIONS_SUCESSFUL,
        data: res
      })
    })
  }
}

export default new QuestionDispatcher();
