import { Router } from 'express'

import users from '../services/user/routes'
import shops from '../services/shop/routes'

const router = Router()
router.use('/users', users)
router.use('/shops', shops)

export default router
