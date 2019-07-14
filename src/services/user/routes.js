import { Router } from 'express'

import validation from '../../middlewares/validation'
import wrapper from '../../middlewares/wrapper'
import { me } from '../../middlewares/roleResolver'
import { createUserSchema, updateUserSchema } from './schema'
import user from '.'

const router = Router();

router.get('/', user.find)
router.get('/:id', user.findById)
router.post('/', validation(createUserSchema), wrapper(user.create, ['email', 'firstName', 'lastName']))
router.patch('/:id', me, validation(updateUserSchema), wrapper(user.update))
router.post('/login', user.login)
router.post('/logout', user.logout)

export default router
