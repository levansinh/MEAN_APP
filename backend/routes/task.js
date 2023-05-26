import express from 'express'

import { taskController } from '../controllers/taskController.js'

const router = express.Router()

router.post('/create',taskController.createTask)
router.get('/',taskController.getAllProject)

export default router