const { Client } = require('pg');


async function connectDB() {
  const client = new Client({
    host: 'localhost',
    port: 5433,
    user: 'testing_user',
    password: 'testing_password',
    database: 'dbtest',
  })

  await client.connect()
  return client
}

module.exports = connectDB

