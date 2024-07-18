import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Head, Link } from "@inertiajs/react"
import { IconBuildingStore, IconHome, IconReceipt, IconShoppingBag } from '@tabler/icons-react'
import Admin from '~/layout/admin'

export default function Index() {
  return (
    <Admin>
      <Head title="beranda" />
      <Card className="p-5">
        <div className="">
          <div className='border-b border-gray-200 pb-4'>
            <div>
              <p className='text-sm flex items-center gap-1'><IconHome size={18} />Home</p>
              <h6 className='font-bold text-lg text-gray-600'>Dashboard</h6>
            </div>
          </div>

          <div className='mt-5'>
            <h1 className='text-2xl font-bold '>Halo 👏 RoisDev .</h1>
            <p className='text-gray-600 text-sm'>Aktivitas apa yang akan kamu lakukan hari ini?</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div>
              <Link href="/keuangan/pembelian">
                <Card className="relative border-2 border-sky-500">
                  <CardHeader>
                    <div className='flex items-center gap-2'>
                      <IconBuildingStore size={40} />
                      <CardTitle className="text-xl">Faktur Pembelian</CardTitle>
                    </div>
                    <CardDescription>Kamu dapat membuat faktur pembelian secara otomatis.</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>

            <div>
              <Link href="/keuangan/penjualan">
                <Card className="relative border-2 border-red-500">
                  <CardHeader>
                    <div className='flex items-center gap-2'>
                      <IconShoppingBag size={40} />
                      <CardTitle className="text-xl">Faktur Penjualan</CardTitle>
                    </div>
                    <CardDescription>Kamu dapat membuat faktur penjualan secara otomatis.</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>

            <div>
              <Card className="relative border-2 border-green-700">
                <CardHeader>
                  <div className='flex items-center gap-2'>
                    <IconReceipt size={40} />
                    <CardTitle className="text-xl">Catatan Pengeluaran</CardTitle>
                  </div>
                  <CardDescription>Kamu dapat melihat rekap penjualan dan pembelian secara otomatis.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          <Card className="mt-5 p-5">
            <div>
              <h1 className='font-bold'>Aktivitas Terbaru</h1>
              <p className='text-sm text-gray-600'>Lihat semua aktivitas terbaru</p>
            </div>
            <Card className="mt-3">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">RID</TableHead>
                    <TableHead>NIK</TableHead>
                    <TableHead>Nama</TableHead>
                    <TableHead>Departemen</TableHead>
                    <TableHead>Jabatan</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell>$250.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </Card>
        </div>
      </Card>
    </Admin>
  )
}
