import express from 'express'
import { getMessage, sendMessage } from '../controllers/message.controller.js';
import verifyUser from '../middleware/verifyUser.js'

const router = express.Router();

router.get('/:id',verifyUser,getMessage)


//reciever id
router.post('/send/:id',verifyUser,sendMessage)

export default router