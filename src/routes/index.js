import { Router } from 'express'

import users from '../services/user/routes'

const router = Router()
router.use('/users', users)

export default router
