import express from 'express';
import { createRol, updateRol, getRoles,deleteRol } from '../logic/RolLogic.js';

const router = express.Router();
// Ruta pentru crearea rolului
router.route('/createRol').post(async (req, res) => {
    if (JSON.stringify(req.body) == "{}" || req.body === undefined || req.body === null) {
        res.status(400).json({ message: "Request body is missing!" });
    } else {
        return res.status(201).json(await createRol(req.body));
    }
});
// Ruta pentru preluare rolului
router.route('/roluri').get(async (req, res) => {
    return res.status(200).json(await getRoles());
});
// Ruta pentru update rol dupa id
router.route('/rol/:id').put(async (req, res) => {
    if (!(JSON.stringify(req.body) == "{}" || req.body === undefined || req.body === null)) {
        return res.json(await updateRol(req.params.id, req.body));
    }
    else {
        return res.status(400).json({ message: "Request body is missing!" });
    }
});
// Ruta pentru stergerea rol
router.route('/deleteRol/:id').delete(async (req, res) => {
    return res.json(await deleteRol(req.params.id));
});

export default router;