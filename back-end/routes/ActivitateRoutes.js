import express from 'express';
import { createActivitate, getActivitate, getActivitateById, updateActivitate, deleteActivitate} from '../logic/ActivitateLogic.js';

const router = express.Router();

router.route('/createActivitate/').post(async (req, res) => { 
    return res.status(201).json(await createActivitate(req.body));
}); 

router.route('/activities').get(async (req, res) => {
     return res.json(await getActivitate());
});

router.route('/activities/:id').get(async (req, res) => {
     return res.json(await getActivitateById(req.params.id));
});

router.route('/updateActivitate/:id').put(async (req, res) => {
    return res.json(await updateActivitate(req.params.id, req.body));
});

router.route('/deleteActivitate/:id').delete(async (req, res) => {
    return res.json(await deleteActivitate(req.params.id));
});

export default router;