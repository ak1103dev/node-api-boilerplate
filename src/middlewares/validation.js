import Joi from '@hapi/joi'

export default schema => (req, res, next) => {
  const data = { ...req.body, ...req.params, ...req.query }
  const { error, value } = Joi.validate(data, schema, {
    abortEarly: false,
    stripUnknown: true,
  })
  if (error) {
    res.status(400).send(error)
  } else {
    req.args = value
    next()
  }
}
