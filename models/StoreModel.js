const schema = require('../utils/schema')

class Store {
  getAll = async () => {
    try {
      const params = []
      const list = await schema.getAll('store', params)

      return {
        success: true,
        data: list,
      }
    } catch (error) {
      console.log('Store Index Error ', error)

      return {
        success: false,
        error,
      }
    }
  }

  getById = async (id) => {
    try {
      const params = []
      const appendCondition = `WHERE id = ${id}`
      const list = await schema.getAll('store', params, '*', appendCondition)

      return {
        success: true,
        data: list,
      }
    } catch (error) {
      console.log('Store Show Error ', error)

      return {
        success: false,
        error,
      }
    }
  }
}

module.exports = new Store()
