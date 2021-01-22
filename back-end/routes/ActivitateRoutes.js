import express from 'express';
import { createActivitate} from '../logic/ActivitateLogic.js';

const router = express.Router();

router.route('/createActivitate/').post(async (req, res) => { 
    return res.status(201).json(await createActivitate(req.body));
    }); 

export default router;