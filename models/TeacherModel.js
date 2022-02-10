const schema = require('../utils/schema')

class Teacher {
  getAll = async () => {
    try {
      const params = []
      const list = await schema.getAll('teachers', params)

      return {
        success: true,
        data: list,
      }
    } catch (error) {
      console.log('Teacher Index Error ', error)

      return {
        success: false,
        error,
      }
    }
  }

  store = async ({ name, age }) => {
    try {
      const fields = ['name', 'age']
      const params = [name, age]
      const list = await schema.create('teachers', fields, params)

      return {
        success: true,
        data: list,
      }
    } catch (error) {
      console.log('Teacher Store error ', error)

      return {
        success: false,
        error,
      }
    }
  }
}

module.exports = new Teacher()
