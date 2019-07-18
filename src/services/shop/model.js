import Sequelize from 'sequelize'

const postgresUrl = process.env.POSTGRES_URL

const sequelize = new Sequelize(postgresUrl)

sequelize.sync()

export const ShopModel = sequelize.define(
  'shop',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    logo: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    // options
  }
)
