import AuthController from '#controllers/auth_controller'
const KaryawansController = () => import('#controllers/karyawans_controller')
import LaporansController from '#controllers/laporans_controller'
const PenggunasController =() => import ('#controllers/penggunas_controller')
const ManHoursController = () => import('#controllers/man_hours_controller')
import ProyeksController from '#controllers/proyeks_controller'
import router from '@adonisjs/core/services/router'

router.on('/').renderInertia('home', { version: 6 })


router.group(() => {
    router.get('index', [KaryawansController, 'index'])
    router.get('create', [KaryawansController, 'create'])
    router.post('create', [KaryawansController, 'store'])
    router.delete('pengguna/:id', [KaryawansController, 'delete'])
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
}).prefix('/manhours/')

router.group(() => {
    router.get('login', [AuthController, 'login'])
    // router.post('login', [AuthController, 'login'])
}).prefix('/auth/')

router.get('/sistem/pengguna',[PenggunasController,'pengguna'])

router.get('/management/laporan', [LaporansController, 'laporan'])
