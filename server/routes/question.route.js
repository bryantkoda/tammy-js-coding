import { Router } from 'express';
import questionController from '../controllers/question.controller.js';

const router = Router();

router.get('/', questionController.getQuestions);

export default router;
