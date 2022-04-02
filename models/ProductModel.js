const schema = require('../utils/schema')

class Product {
  getAll = async () => {
    try {
      const params = []
      const list = await schema.getAll('storeproduct', params)

      return {
        success: true,
        data: list,
      }
    } catch (error) {
      console.log('Product Index Error ', error)

      return {
        success: false,
        error,
      }
    }
  }

  getVariant = async (body) => {
    try {
      const params = []
      const appendCondition = `WHERE id_product = ${body.product_id}`
      const list = await schema.getAll(
        'storeproduct_variant',
        params,
        '*',
        appendCondition
      )

      return {
        success: true,
        data: list,
      }
    } catch (error) {
      console.log('Product Index Error ', error)

      return {
        success: false,
        error,
      }
    }
  }

  getByCategoryId = async (categoryId) => {
    try {
      const params = []
      const appendCondition = `WHERE cat_prod1 = ${categoryId}`
      const list = await schema.getAll(
        'storeproduct',
        params,
        '*',
        appendCondition
      )

      return {
        success: true,
        data: list,
      }
    } catch (error) {
      console.log('Product Index Error ', error)

      return {
        success: false,
        error,
      }
    }
  }

  getByCategoryName = async (storeId, categoryName) => {
    try {
      const params = []
      const appendCondition = `WHERE storeproduct.id_store = ${storeId} and appcatproduct.name = '${categoryName}'`
      const selectedFields =
        'appcatproduct.name as category_name, storeproduct.*'
      const ids = 'storeproduct.cat_prod1 = appcatproduct.id'
      const list = await schema.getJoin(
        'storeproduct',
        'appcatproduct',
        ids,
        params,
        selectedFields,
        appendCondition
      )

      return {
        success: true,
        data: list,
      }
    } catch (error) {
      console.log('Product Index Error ', error)

      return {
        success: false,
        error,
      }
    }
  }
}

module.exports = new Product()
