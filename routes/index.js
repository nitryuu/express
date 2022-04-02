const ProductController = require('../controllers/ProductController')
const OtherController = require('../controllers/OtherController')
const StoreController = require('../controllers/StoreController')
const CategoryController = require('../controllers/CategoryController')

const routes = [
  ['/products', ProductController],
  ['/other', OtherController],
  ['/store', StoreController],
  ['/category', CategoryController],
]

const index = (app) => {
  routes.forEach((route) => {
    const [path, controller] = route
    app.use(`/api${path}`, controller)
  })
}

module.exports = index
