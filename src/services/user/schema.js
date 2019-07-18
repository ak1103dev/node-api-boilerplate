import Joi from '@hapi/joi'

export const createUserSchema = Joi.object().keys({
  firstName: Joi.string()
    .min(3)
    .required(),
  lastName: Joi.string()
    .min(3)
    .required(),
  email: Joi.string()
    .email()
    .lowercase()
    .trim()
    .required(),
  password: Joi.string()
    .min(8)
    .required(),
})

export const updateUserSchema = Joi.object().keys({
  id: Joi.string().required(),
  firstName: Joi.string().min(3),
  lastName: Joi.string().min(3),
  email: Joi.string()
    .email()
    .lowercase()
    .trim(),
})

export const loginSchema = Joi.object().keys({
  email: Joi.string()
    .email()
    .lowercase()
    .trim(),
  password: Joi.string()
    .min(8)
    .required(),
})

export const findUserByIdSchema = Joi.object().keys({
  id: Joi.string(),
})
