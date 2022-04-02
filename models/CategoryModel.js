const schema = require('../utils/schema')

class Category {
  getAll = async () => {
    try {
      const params = []
      const list = await schema.getAll('appcatproduct', params)

      return {
        success: true,
        data: list,
      }
    } catch (error) {
      console.log('Category Product Index Error ', error)

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
      const list = await schema.getAll(
        'appcatproduct',
        params,
        '*',
        appendCondition
      )

      return {
        success: true,
        data: list,
      }
    } catch (error) {
      console.log('Category Product Show Error ', error)

      return {
        success: false,
        error,
      }
    }
  }

  getByName = async (name) => {
    try {
      const params = []
      const appendCondition = `WHERE name = ${name}`
      const list = await schema.getAll(
        'appcatproduct',
        params,
        '*',
        appendCondition
      )

      return {
        success: true,
        data: list,
      }
    } catch (error) {
      console.log('Category Product Show Error ', error)

      return {
        success: false,
        error,
      }
    }
  }

  getByCatStoreId = async (catStoreId) => {
    try {
      const params = []
      const appendCondition = `WHERE master = 0 and id_catstore = ${catStoreId} and active = 1`
      const list = await schema.getAll(
        'appcatproduct',
        params,
        '*',
        appendCondition
      )

      return {
        success: true,
        data: list,
      }
    } catch (error) {
      console.log('Category Product By CatStoreId Show Error ', error)

      return {
        success: false,
        error,
      }
    }
  }
}

module.exports = new Category()
