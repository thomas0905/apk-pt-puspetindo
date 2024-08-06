import ManagementsController from '#controllers/managements_controller'
import router from '@adonisjs/core/services/router'
const DasboardsController = () => import('#controllers/dasboards_controller')
const UsersController = () => import('#controllers/users_controller')
router.on('/').renderInertia('home', { version: 6 })


router.group(() => {
    router.get('pengguna', [DasboardsController, 'pengguna'])
    router.get('create', [DasboardsController, 'create_pengguna'])
    router.post('create', [DasboardsController, 'store_pengguna'])
    router.delete('pengguna/:id', [DasboardsController, 'delete_pengguna'])
    router.get('edit/:id', [DasboardsController, 'edit_pengguna'])
    router.put('edit/:id', [DasboardsController, 'update_pengguna'])
}).prefix('/dasboard/pengguna/')

router.group(() => {
    router.get('/index', [DasboardsController, 'index'])
    router.get('/create',[DasboardsController,'create_proyek'])
}).prefix('/dasboard/proyek')


router.get('/auth/login', [DasboardsController, 'login'])

router.get('/users/menuprofil', [UsersController, 'menuprofil'])
router.get('/users/minhours', [UsersController, 'minhours'])


router.get('/management/laporan', [ManagementsController, 'management'])

