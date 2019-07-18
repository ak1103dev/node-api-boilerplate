import { Router } from 'express'

import validation from '../../middlewares/validation'
import wrapper from '../../middlewares/wrapper'
import { me } from '../../middlewares/roleResolver'

import {
  createUserSchema,
  updateUserSchema,
  loginSchema,
  findUserByIdSchema,
} from './schema'

import { find, findById, create, update, login } from '.'

const router = Router()

router.get('/', wrapper(find))
router.get('/:id', validation(findUserByIdSchema), wrapper(findById))
router.post('/', validation(createUserSchema), wrapper(create))
router.patch('/:id', me, validation(updateUserSchema), wrapper(update))
router.post('/login', validation(loginSchema), wrapper(login))

export default router
