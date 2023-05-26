import express from 'express'

import { projectController } from '../controllers/projectController.js'

const router = express.Router()

router.get('/create',projectController.createProject)
router.get('/',projectController.getAllProject)

export default router