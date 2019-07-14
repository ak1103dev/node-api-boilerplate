import { Router } from 'express'
import user from '../services/user'

const router = Router();

router.get('/', user.find)
router.get('/:id', user.findById)
router.post('/', user.create)
router.patch('/:id', user.update)
router.post('/login', user.login)
router.post('/logout', user.logout)

export default router
