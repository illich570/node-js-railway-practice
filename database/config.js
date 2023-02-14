const { config } = require('../config/config')
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const URI = `${config.dbEngine}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

module.exports = {
  development: {
    url: URI,
    dialect: `${config.dbEngine}`,

  },
  production: {
    url: URI,
    dialect: `${config.dbEngine}`,
    
  }
}