import express from 'express'

import { userController} from '../controllers/userController.js'

const router = express.Router()

router.get('/create',userController.createUser)
router.get('/',userController.getAllUser)

export default router