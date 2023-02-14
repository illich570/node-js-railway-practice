require('dotenv').config()

const config = {
  env: process.env.NODE_ENV || 'DEV',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_ENGINE === 'mysql' ? process.env.MYSQL_USER : process.env.POSTGRES_DB_USER,
  dbPassword: process.env.POSTGRES_DB_PASSWORD,
  dbHost: process.env.POSTGRES_DB_HOST,
  dbPort: process.env.DB_ENGINE === 'mysql' ?  process.env.MYSQL_PORT : process.env.POSTGRES_DB_PORT,
  dbName: process.env.POSTGRES_DB_NAME,
  dbEngine: process.env.DB_ENGINE,
}

module.exports = { config }