import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { UserModel } from './model'

const secretKey = process.env.SECRET_KEY

export const hashPassword = plainPassword => {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(plainPassword, salt)
  return hash
}

export const verifyPassword = (plainPassword, hashPassword) =>
  bcrypt.compareSync(plainPassword, hashPassword)

export const find = async () => {
  const users = await UserModel.find({}, { password: false })
  return users
}

export const findById = async args => {
  const user = await UserModel.findById(args.id, { password: false })
  return user.toJSON({ virtuals: true })
}

export const create = async args => {
  const { email, firstName, lastName, password } = args
  const oldUser = await UserModel.findOne({ email }).lean()
  if (oldUser) {
    return Promise.reject({ code: 422, message: 'EMAIL_ALREADY_EXISTS' })
  }

  const user = new UserModel({
    firstName,
    lastName,
    email,
    password: hashPassword(password),
  })
  return user.save()
}

export const update = args => {
  const { id, ...data } = args
  return UserModel.update({ _id: id }, { $set: data })
}

export const login = async args => {
  const { email, password } = args
  const user = await UserModel.findOne({ email })
  if (!user) {
    return Promise.reject({ code: 404, message: 'USER_NOT_FOUND' })
  }
  if (!verifyPassword(password, user.password)) {
    return Promise.reject({ code: 400, message: 'WRONG_PASSWORD' })
  }
  const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' })
  return { token }
}

export default {
  find,
  findById,
  create,
  update,
  login,
}
