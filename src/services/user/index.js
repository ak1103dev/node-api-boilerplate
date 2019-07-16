export const find = (req, res) => {
  res.send([])
}

export const findById = (req, res) => {
  res.send({})
}

export const create = args => {
  return args
}

export const update = args => {
  return args
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
