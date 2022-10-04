import express from 'express';
import { deleteSpecificPost, getCanidates, getParticularCanidates, postCannidates, postUpdate, updateVotes } from '../controllers/admin.js';
const router = express.Router();

router.get('/', getCanidates)
router.post('/', postCannidates)
router.get('/:id', getParticularCanidates)
router.patch('/:id', postUpdate)
router.delete('/:id', deleteSpecificPost)
router.patch('/vote/:id', updateVotes)

export default router;