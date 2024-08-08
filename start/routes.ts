import AuthController from '#controllers/auth_controller'
import LaporansController from '#controllers/laporans_controller'
import ManHoursController from '#controllers/man_hours_controller'
import MenuProfilsController from '#controllers/menu_profils_controller'
import ProyeksController from '#controllers/proyeks_controller'
import router from '@adonisjs/core/services/router'
const PenggunaController = () => import('#controllers/pengguna_controller')

router.on('/').renderInertia('home', { version: 6 })


router.group(() => {
    router.get('pengguna', [PenggunaController, 'pengguna'])
    router.get('create', [PenggunaController, 'create'])
    router.post('create', [PenggunaController, 'store'])
    router.delete('pengguna/:id', [PenggunaController, 'delete'])
    router.get('edit/:id', [PenggunaController, 'edit'])
    router.put('edit/:id', [PenggunaController, 'update'])
    router.get('permission',[PenggunaController,'permission'])
}).prefix('/dasboard/pengguna/')

router.group(() => {
    router.get('index', [ProyeksController, 'index'])
    router.get('create',[ProyeksController,'create'])
    router.post('create',[ProyeksController,'store'])
    router.delete('proyek/:id', [ProyeksController, 'delete'])
    router.get('edit/:id', [ProyeksController, 'edit'])
    router.put('edit/:id', [ProyeksController, 'update'])
}).prefix('/dasboard/proyek/')


router.group(()=> {
    router.get('menuProfil',[MenuProfilsController,'menuProfil'])
    router.get('index',[ManHoursController,'index'])
    router.get('create',[ManHoursController,'create'])
}).prefix('/users/manhours/')

router.group(()=> {
    router.get('index',[AuthController,'auth'])
    router.post('login',[AuthController,'login'])
}).prefix('/auth/')

router.get('/management/laporan',[LaporansController,'laporan'])
