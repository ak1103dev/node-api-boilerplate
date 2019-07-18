import { ShopModel } from './model'

export const find = () => {
  return ShopModel.findAll()
}

export const create = args => {
  return ShopModel.create(args)
}
