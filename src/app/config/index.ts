import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join((process.cwd(), '.env')) })

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  salt_rounds: process.env.SALT_ROUNDS,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
  nod_env: process.env.NODE_ENV,
  payment_url: process.env.PAYMENT_URL,
  store_id:process.env.STORE_ID,
  signature: process.env.SIGNATURE_KEY,
  store_pass: process.env.STORE_PASS,
  server_api: process.env.SERVER_API,
  nodem_user: process.env.NODEMAILER_USER,
  nodem_pass: process.env.NODEMAILER_PASS,
}

