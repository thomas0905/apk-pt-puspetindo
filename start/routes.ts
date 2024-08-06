import ManagementsController from '#controllers/managements_controller'
import router from '@adonisjs/core/services/router'
const DasboardsController = () => import('#controllers/dasboards_controller')
const UsersController = () => import('#controllers/users_controller')
router.on('/').renderInertia('home', { version: 6 })


router.group(() => {
    router.get('pengguna', [DasboardsController, 'pengguna'])
    router.get('create', [DasboardsController, 'create'])
    router.post('create', [DasboardsController, 'store'])
    router.delete('pengguna/:id', [DasboardsController, 'delete'])
    router.get('edit/:id', [DasboardsController, 'edit'])
    router.put('edit/:id', [DasboardsController, 'update'])
}).prefix('dasboard/pengguna/')

router.get('/dasboard/proyek/index', [DasboardsController, 'index'])

router.get('/auth/login', [DasboardsController, 'login'])

router.get('/users/menuprofil', [UsersController, 'menuprofil'])
router.get('/users/minhours', [UsersController, 'minhours'])


router.get('/management/laporan', [ManagementsController, 'management'])

