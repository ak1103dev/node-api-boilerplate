import Joi from '@hapi/joi'

export const createShopSchema = Joi.object().keys({
  name: Joi.string()
    .min(3)
    .required(),
  description: Joi.string(),
  logo: Joi.string(),
  address: Joi.string(),
})
