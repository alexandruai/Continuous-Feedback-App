import express from 'express';
import { createFeedback, getFeedbackById, getFeedbacks, updateFeedback } from '../logic/FeedbackLogic.js';

const router = express.Router();

router.route('/createFeedback/:id').post(async (req, res) => {
    return res.status(201).json(await createFeedback(req.params.id,req.body));
    });
    
router.route('/feedbacks').get(async (req, res) => {
return res.json(await getFeedbacks());
});
router.route('/feedback/:id').get(async (req, res) => {
return res.json(await getFeedbackById(req.params.id));
});
router.route('/updateFeedback/:id').put(async (req, res) => {
return res.json(await updateFeedback(req.params.id, req.body));
});
router.route('/deleteFeedback/:id').delete(async (req, res) => {
return res.json(await deleteFeedback(req.params.id));
});

export default router;