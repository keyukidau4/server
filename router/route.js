import { Router } from 'express'
import * as QuestionController from '../controllers/QuestionsController.js'
import * as ResultsController from '../controllers/ResultsController.js'

const router = Router()

router
    .route('/questions')
    .get(QuestionController.getQuestions)
    .post(QuestionController.insertQuestions)
    .delete(QuestionController.dropQuestions)

router
    .route('/results')
    .get(ResultsController.getResults)
    .post(ResultsController.insertResults)
    .delete(ResultsController.dropResults)

export default router
