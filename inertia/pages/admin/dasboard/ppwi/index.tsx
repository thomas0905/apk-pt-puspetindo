import { Link, usePage } from '@inertiajs/react'
import { IconBook, IconBookOff, IconBuildingArch, IconEdit, IconHome } from '@tabler/icons-react'
import React from 'react'
import { AlertDialogHeader } from '~/components/ui/alert-dialog'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '~/components/ui/dialog';
import Admin from '~/layout/admin'
import Create from './create'
import DataTable from '~/components/dataTable/dataTable'
import CreateJudul from './createJudul'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table'

export default function Index() {
  const { judul_ppwi } = usePage().props;
  console.log(judul_ppwi);
  return (
    <Admin>
      <Card className="p-5">
        <div className="border-b border-gray-200 pb-4">
          <div className='flex justify-between'>
            <div>
              <Link href="/">
                <p className='text-sm flex gap-1'><IconHome size={18} />Home</p>
              </Link>
              <h6 className='text-gray-600 text-lg font-bold'>Halaman PPWI</h6>
            </div>

            <div className='flex gap-1'>
              <Dialog>
                <DialogTrigger asChild>
                  {/* <Button
                  className="bg-blue-600 hover:bg-blue-500 text-white btn-small gap-2 hover:text-white"
                  variant="outline"
                >
                  <IconBuildingArch size={18} />
                  Tambah Judul
                </Button> */}
                  <Button
                    className="bg-blue-600 hover:bg-blue-500 text-white btn-small gap-2 hover:text-white"
                    variant="outline"
                  >
                    <IconBuildingArch size={18} />
                    Tambah Judul
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <AlertDialogHeader>
                    <DialogTitle>Tambah Judul</DialogTitle>
                  </AlertDialogHeader>
                  <CreateJudul />
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="bg-blue-600 hover:bg-blue-500 text-white btn-small gap-2 hover:text-white"
                    variant="outline"
                  >
                    <IconBook size={18} />
                    Tambah PPWI
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <AlertDialogHeader>
                    <DialogTitle>Tambah PPWI</DialogTitle>
                  </AlertDialogHeader>
                  <Create />
                </DialogContent>
              </Dialog>
            </div>
          </div>


        </div>
        <div>
          <Card className="mt-3">
            <Table className="container">
              <TableHeader className="bg-slate-50">
                <TableRow>
                  <TableHead className="w-[100px]">No</TableHead>
                  <TableHead>Judul</TableHead>
                  <TableHead>Keterangan</TableHead>
                  <TableHead>Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow >
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell className='flex gap-2'>
                    <Link href='/ppwi/detail'>
                      <p className='bg-blue-600 text-white px-2 py-1 rounded-sm'>Lihat PPWI</p>
                    </Link>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </div>

      </Card>
    </Admin>
  )
}
