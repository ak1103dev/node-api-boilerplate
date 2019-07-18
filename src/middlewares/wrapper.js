export default (func, fields) => async (req, res) => {
  try {
    const result = await func(req.args)
    if (fields) {
      Object.keys(result).forEach(key => {
        if (!fields.includes(key)) {
          delete result[key]
        }
      })
    }
    res.send(result)
  } catch (err) {
    console.error(err)
    res.status(err.code || 500).send({ error: err })
  }
}
