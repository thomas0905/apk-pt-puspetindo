
import ProductsController from '#controllers/products_controller'
import router from '@adonisjs/core/services/router'
const UsersController = () => import('#controllers/users_controller')


router.on('/').renderInertia('home', { version: 6 })

router.get('users', [UsersController, 'index'])
router.get('about', [UsersController, 'about'])

router.get('product', [ProductsController, 'index'])
router.get('create', [ProductsController, 'create'])
router.get('edit', [ProductsController, 'edit'])

