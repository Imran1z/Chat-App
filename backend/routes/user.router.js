import express from 'express'
import verifyUser from '../middleware/verifyUser.js'
import { getUsers } from '../controllers/user.controller.js'

const router =express.Router()

router.get('/',verifyUser,getUsers)

export default router