import express from 'express';
import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../logic/UserLogic.js';

const router = express.Router();

router.route('/createUser/:id').post(async (req, res) => {
  if (JSON.stringify(req.body) == "{}" || req.body === undefined || req.body === null) {
    res.status(400).json({ message: "Request body is missing!" });
  }
  else {
    return res.status(201).json(await createUser(req.params.id, req.body));
  }
});
router.route('/user').get(async (req, res) => {
  return res.json(await getUsers());
});
router.route('/user/:id').get(async (req, res) => {
  return res.json(await getUserById(req.params.id));
});
router.route('/user/:id').put(async (req, res) => {
  return res.json(await updateUser(req.params.id, req.body));
});
router.route('/user/:id').delete(async (req, res) => {
  return res.json(await deleteUser(req.params.id));
});




export default router;