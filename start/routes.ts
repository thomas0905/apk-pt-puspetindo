import ManagementsController from '#controllers/managements_controller'
import router from '@adonisjs/core/services/router'
const DasboardsController =() => import('#controllers/dasboards_controller')
const UsersController =() => import('#controllers/users_controller')
router.on('/').renderInertia('home', { version: 6 })

router.get('dasboard/pengguna/pengguna',[DasboardsController,'pengguna'])
router.get('dasboard/pengguna/create',[DasboardsController,'create'])
router.get('dasboard/pengguna/edit',[DasboardsController,'edit'])
router.post('dasboard/pengguna/create',[DasboardsController,'store'])
router.get('dasboard/proyek/index',[DasboardsController,'index'])
router.delete('dasboard/pengguna/pengguna/:id',[DasboardsController,'delete'])

router.get('users/menuprofil',[UsersController,'menuprofil'])
router.get('users/minhours',[UsersController,'minhours'])


router.get('management/laporan',[ManagementsController,'management'])

