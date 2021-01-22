import express from 'express';
import { createFeedback } from '../logic/FeedbackLogic.js';

const router = express.Router();

router.route('/createFeedback/').post(async (req, res) => {
    return res.status(201).json(await createFeedback(req.body));
    });
    

  export default router;