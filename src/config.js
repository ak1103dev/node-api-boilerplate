import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

const nodeEnv = process.env.NODE_ENV
const suffix = nodeEnv ? `.${nodeEnv}` : ''
const envFile = path.join(__dirname, `../.env${suffix}`)
const envConfig = dotenv.parse(fs.readFileSync(envFile))

for (let k in envConfig) {
  process.env[k] = envConfig[k]
}
