import * as fs from 'fs';

const questionController = {}

function getRandomQuestions(data) {
  return data.sort(() => {
    return Math.random() - 0.5
  }).slice(0, 10)
}

questionController.getQuestions = (req, res) => {
  fs.readFile('./data/questions.json', 'utf8', (err, data) => {
    console.log('Get questions...')
    if(data) {
      const randomQuestions = getRandomQuestions(JSON.parse(data).results)
      res.json(randomQuestions)
    }
  })
}

export default questionController;