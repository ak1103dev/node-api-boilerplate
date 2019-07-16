import { Router } from 'express'

import validation from '../../middlewares/validation'
import wrapper from '../../middlewares/wrapper'
import { me } from '../../middlewares/roleResolver'

import { createUserSchema, updateUserSchema } from './schema'

import { find, findById, create, update, login, logout } from '.'

const router = Router()

router.get('/', find)
router.get('/:id', findById)
router.post(
  '/',
  validation(createUserSchema),
  wrapper(create, ['email', 'firstName', 'lastName'])
)
router.patch('/:id', me, validation(updateUserSchema), wrapper(update))
router.post('/login', login)
router.post('/logout', logout)

export default router
