const schema = require('../utils/schema')

class Other {
  getAll = async () => {
    try {
      const params = []
      const list = await schema.getAll('other', params)

      return {
        success: true,
        data: list,
      }
    } catch (error) {
      console.log('Other Index Error ', error)

      return {
        success: false,
        error,
      }
    }
  }
}

module.exports = new Other()
