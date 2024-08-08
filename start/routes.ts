import LoginController from '#controllers/login_controller'
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
}).prefix('/users/manHours/')

router.get('/auth/login', [LoginController, 'login'])
