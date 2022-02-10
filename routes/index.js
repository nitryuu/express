const StudentController = require('../controllers/StudentController')
const TeacherController = require('../controllers/TeacherController')

const routes = [
  ['/student', StudentController],
  ['/teacher', TeacherController],
]

const index = (app) => {
  routes.forEach((route) => {
    const [path, controller] = route
    app.use(`/api${path}`, controller)
  })
}

module.exports = index
