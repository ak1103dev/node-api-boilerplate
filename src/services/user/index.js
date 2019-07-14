export const find = (req, res) => {
  res.send([])
}

export const findById = (req, res) => {
  res.send({})
}

export const create = (req, res) => {
  res.send(req.body)
}

export const update = (req, res) => {
  res.send({})
}

export const login = (req, res) => {
  res.send({})
}

export const logout = (req, res) => {
  res.send({})
}

export default {
  find,
  findById,
  create,
  update,
  login,
  logout,
}
