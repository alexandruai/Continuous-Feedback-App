import express from 'express';
import { createFeedback, getFeedbackById, getFeedbacks, updateFeedback, deleteFeedback } from '../logic/FeedbackLogic.js';

const router = express.Router();
//Ruta pentru crearea feedback-ului unui user
router.route('/createFeedback/:id').post(async (req, res) => {
    return res.status(201).json(await createFeedback(req.params.id, req.body));
});
//Ruta pentru preluare feedbacks din baza de date
router.route('/feedbacks').get(async (req, res) => {
    return res.json(await getFeedbacks());
});
//Ruta pentru preluare feedback dupa un id din baza de date
router.route('/feedback/:id').get(async (req, res) => {
    return res.json(await getFeedbackById(req.params.id));
});
router.route('/updateFeedback/:id').put(async (req, res) => {
    return res.json(await updateFeedback(req.params.id, req.body));
});
//Ruta pentru stergere feedbacks din baza de date
router.route('/deleteFeedback/:id').delete(async (req, res) => {
    return res.json(await deleteFeedback(req.params.id));
});

export default router;