import router from '@adonisjs/core/services/router'
const DasboardsController =() => import('#controllers/dasboards_controller')

router.on('/').renderInertia('home', { version: 6 })

router.get('dasboard/pengguna/pengguna',[DasboardsController,'pengguna'])
router.get('dasboard/pengguna/create',[DasboardsController,'create'])
router.post('dasboard/pengguna/create',[DasboardsController,'store'])
router.get('dasboard/proyek',[DasboardsController,'proyek'])




