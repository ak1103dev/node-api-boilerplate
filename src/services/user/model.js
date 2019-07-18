import mongoose from 'mongoose'

const mongoUrl = process.env.MONGODB_URL
mongoose.connect(mongoUrl, {
  useCreateIndex: true,
  useNewUrlParser: true,
})

const { Schema } = mongoose
const schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

schema.virtual('fullName').get(function() {
  const fullName = this.firstName + ' ' + this.lastName
  return fullName
})

export const UserModel = mongoose.model('User', schema)
