import AuthController from '#controllers/auth_controller'
const KaryawansController = () => import('#controllers/karyawans_controller')
import LaporansController from '#controllers/laporans_controller'
const PenggunasController = () => import('#controllers/penggunas_controller')
const ManHoursController = () => import('#controllers/man_hours_controller')
import ProyeksController from '#controllers/proyeks_controller'
import router from '@adonisjs/core/services/router'

router.on('/').renderInertia('home', { version: 6 })


router.group(() => {
    router.get('index', [KaryawansController, 'index'])
    router.get('create', [KaryawansController, 'create'])
    router.post('create', [KaryawansController, 'store'])
    router.delete('delete/:id', [KaryawansController, 'delete'])
    router.get('edit/:id', [KaryawansController, 'edit'])
    router.put('edit/:id', [KaryawansController, 'update'])
}).prefix('/dasboard/karyawan/')

router.group(() => {
    router.get('index', [ProyeksController, 'index'])
    router.get('create', [ProyeksController, 'create'])
    router.post('create', [ProyeksController, 'store'])
    router.delete('proyek/:id', [ProyeksController, 'delete'])
    router.get('edit/:id', [ProyeksController, 'edit'])
    router.put('edit/:id', [ProyeksController, 'update'])
}).prefix('/dasboard/proyek/')

router.group(() => {
    router.get('menuProfil', [ManHoursController, 'menuProfil'])
    router.get('index', [ManHoursController, 'index'])
    router.get('create', [ManHoursController, 'create'])
    router.post('create', [ManHoursController, 'store'])
}).prefix('/manhours/')

// router.get('/', async ({ response }) => {
//     return response.redirect('/auth/login')
// })

// Route to login page
router.get('/auth/login', [AuthController,'login'])

router.get('/management/laporan', [LaporansController, 'laporan'])

router.group(() => {
    router.get('index', [PenggunasController, 'index'])
    router.get('permission',[PenggunasController,'permission'])
}).prefix('/sistem/pengguna/')
