import DasboardsController from '#controllers/dasboards_controller'
import KeuanganController from '#controllers/keuangan_controller'
import SistemsController from '#controllers/sistem_controller'
import router from '@adonisjs/core/services/router'


router.on('/').renderInertia('home', { version: 6 })

router.get('dasboard/analist',[DasboardsController,'analist'])
router.get('dasboard/laporan',[DasboardsController,'laporan'])


router.get('keuangan/penjualan',[KeuanganController,'penjualan'])
router.get('keuangan/pembelian',[KeuanganController,'pembelian'])
router.get('keuangan/pengeluaran',[KeuanganController,'pengeluaran'])


router.get('sistem/pengguna/pengguna',[SistemsController,'pengguna'])
router.get('sistem/pengguna/create',[SistemsController,'create'])
router.post('sistem/pengguna/create',[SistemsController,'store'])
router.get('sistem/pengaturan',[SistemsController,'pengaturan'])






