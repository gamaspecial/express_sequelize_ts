require('dotenv').config()
module.exports = {
  "development": {
    "username": process.env.MYSQL_USERNAME,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "port": process.env.MYSQL_PORT,
    "host": process.env.MYSQL_HOST,
    "dialect": "mysql"
  }
}
