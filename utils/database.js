const mariadb = require('mariadb')
const config = require('../config/app.config.json')

const pool = mariadb.createPool(config.db)

class Index {
  query = async (query, params) => {
    let conn

    try {
      conn = await pool.getConnection()
      const res = await conn.query(query, params)

      return res
    } catch (err) {
      throw err
    } finally {
      if (conn) conn.release()
    }
  }
}

module.exports = new Index()
