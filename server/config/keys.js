const dotenv=require("dotenv")

dotenv.config()

module.exports = {
  MONGOURI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
};