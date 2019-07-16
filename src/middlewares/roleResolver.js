export const me = (req, res, next) => {
  if (req.user.id === req.params.id) {
    next()
  } else {
    res.status(401).send({ errorCode: 'ONLY_ME' })
  }
}
