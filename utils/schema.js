const mysql = require('../utils/database')

class Index {
  getAll = async (table, params, selectedField = '*', extendCondition = '') => {
    const sql = {
      query: `SELECT ${selectedField} FROM ${table} ${extendCondition}`,
      params: params,
    }

    const data = await mysql.query(sql.query, sql.params)
    return data
  }

  getJoin = async (
    table1,
    table2,
    ids,
    params,
    selectedFields = '*',
    extendCondition = ''
  ) => {
    const sql = {
      query: `SELECT ${selectedFields} FROM ${table1} INNER JOIN ${table2} ON ${ids} ${extendCondition}`,
      params: params,
    }

    const data = await mysql.query(sql.query, sql.params)
    return data
  }

  create = async (table, fields, params, extendCondition = '') => {
    const field = fields.join(',')
    const values = Array(fields.length).fill('?')
    const sql = {
      query: `INSERT INTO ${table} ${extendCondition} (${field}) VALUES (${values})`,
      params: params,
    }

    const data = await mysql.query(sql.query, sql.params)
    return data
  }
}

module.exports = new Index()
