import { Link } from '@inertiajs/react'
import { IconBuildingArch, IconHome } from '@tabler/icons-react'
import React from 'react'
import { AlertDialogHeader } from '~/components/ui/alert-dialog'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '~/components/ui/dialog'
import Admin from '~/layout/admin'
import CreateJudul from './create'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '~/components/ui/table'

export default function Indexjudul() {
  return (
    <Admin>
      <Card className="p-5">
                <div className="border-b border-gray-200 pb-4">
                    <div className='flex justify-between'>
                        <div>
                            <Link href="/karyawan">
                                <p className='text-sm flex gap-1'><IconHome size={18} />Home</p>
                            </Link>
                            <h6 className='text-gray-600 text-lg font-bold'>Menu Judul</h6>
                        </div>

                        <Dialog>
                            <DialogTrigger asChild>
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
                                    <DialogTitle>Judul</DialogTitle>
                                </AlertDialogHeader>
                                <CreateJudul/>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>

                <Card className="mt-3">
                    <Table className="container">
                        <TableHeader className="bg-slate-50">
                            <TableRow>
                                <TableHead className="w-[100px]">No</TableHead>
                                <TableHead>Nama</TableHead>
                                <TableHead>Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                
                        </TableBody>
                    </Table>
                </Card>
            </Card>
    </Admin>
  )
}
