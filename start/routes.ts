import ManagementsController from '#controllers/managements_controller'
import router from '@adonisjs/core/services/router'
const DasboardsController =() => import('#controllers/dasboards_controller')
const UsersController =() => import('#controllers/users_controller')
router.on('/').renderInertia('home', { version: 6 })

router.get('/dasboard/pengguna/pengguna',[DasboardsController,'pengguna'])
router.get('/dasboard/pengguna/create',[DasboardsController,'create'])
router.post('/dasboard/pengguna/create',[DasboardsController,'store'])
router.delete('dasboard/pengguna/pengguna/:id',[DasboardsController,'delete'])
router.get('/dasboard/pengguna/edit/:id', [DasboardsController,'edit'])
router.post('/posts/update/:id', [DasboardsController])

router.get('/dasboard/proyek/index',[DasboardsController,'index'])

router.get('/auth/login',[DasboardsController,'login'])

router.get('/users/menuprofil',[UsersController,'menuprofil'])
router.get('/users/minhours',[UsersController,'minhours'])


router.get('/management/laporan',[ManagementsController,'management'])

