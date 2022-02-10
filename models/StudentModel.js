const schema = require('../utils/schema')

class Student {
  getAll = async () => {
    try {
      const params = []
      const list = await schema.getAll('students', params)

      return {
        success: true,
        data: list,
      }
    } catch (error) {
      console.log('Student Index Error ', error)

      return {
        success: false,
        error,
      }
    }
  }

  store = async ({ name, grade }) => {
    try {
      const fields = ['name', 'grade']
      const params = [name, grade]

      const list = await schema.create('students', fields, params)
      return {
        success: true,
        data: list,
      }
    } catch (error) {
      console.log('Student Store Error ', error)
      return {
        success: false,
        error,
      }
    }
  }
}

module.exports = new Student()
