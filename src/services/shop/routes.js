import { Router } from 'express'

import validation from '../../middlewares/validation'
import wrapper from '../../middlewares/wrapper'

import { createShopSchema } from './schema'

import { find, create } from '.'

const router = Router()

router.get('/', wrapper(find))
router.post('/', validation(createShopSchema), wrapper(create))

export default router
