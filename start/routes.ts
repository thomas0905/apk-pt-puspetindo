import DasboardsController from '#controllers/dasboards_controller'
import router from '@adonisjs/core/services/router'

const SistemsController =() => import('#controllers/sistem_controller')

router.on('/').renderInertia('home', { version: 6 })

router.get('sistem/pengguna/pengguna',[DasboardsController,'pengguna'])
router.get('sistem/pengguna/create',[DasboardsController,'create'])
router.post('sistem/pengguna/create',[DasboardsController,'store'])


router.get('sistem/pengguna/edit',[SistemsController,'edit'])
router.get('sistem/pengaturan',[SistemsController,'pengaturan'])






