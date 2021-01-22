import express from 'express';
import { createActivitate, getActivitate, getActivitateById} from '../logic/ActivitateLogic.js';

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

export default router;