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
}).prefix('/dasboard/proyek/')


// router.get('/auth/login', [DasboardsController, 'login'])
