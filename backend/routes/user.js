import express from 'express'

import { userController} from '../controllers/userController.js'

const router = express.Router()

router.get('/role/:role',userController.getWithRole)
router.get('/:id',userController.getOneUser)
router.get('/',userController.getAllUser)

export default router