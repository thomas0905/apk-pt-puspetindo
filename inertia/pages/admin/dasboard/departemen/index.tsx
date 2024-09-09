import React from 'react';
import Admin from '~/layout/admin';
import { Link, router, usePage } from '@inertiajs/react';
import { IconBuildingArch, IconEdit, IconHome, IconTrash } from '@tabler/icons-react';
import { Card } from '~/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table';
import { Button } from '~/components/ui/button';
import Swal from 'sweetalert2';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '~/components/ui/dialog';
import Create from './create';

export default function Index() {
    const { data_departemen } = usePage().props;

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Ingin Hapus Data?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Ya!',
            cancelButtonText: 'Tidak!',
            allowOutsideClick: false,
        });

        if (result.isConfirmed) {
            try {
                await router.delete(`/departemen/delete/${id}`);
                Swal.fire('Deleted!', 'Data berhasil dihapus.', 'success');
            } catch (error) {
                Swal.fire('Error', 'Gagal menghapus data.', 'error');
            }
        }
    };

    return (
        <Admin>
            <Card className="p-5">
                <div className="border-b border-gray-200 pb-4">
                    <div className='flex justify-between'>
                        <div>
                            <Link href="/karyawan">
                                <p className='text-sm flex gap-1'><IconHome size={18} />Karyawan</p>
                            </Link>
                            <h6 className='text-gray-600 text-lg font-bold'>Menu Departemen</h6>
                        </div>

                        <Dialog>
                            <DialogTrigger asChild>
                            <Button
                                    className="bg-blue-600 hover:bg-blue-500 text-white btn-small gap-2 hover:text-white"
                                    variant="outline"
                                >
                                    <IconBuildingArch size={18} />
                                    Tambah Departemen
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Tambah Departemen</DialogTitle>
                                    {/* <DialogDescription>
                                        Make changes to your profile here. Click save when you're done.
                                    </DialogDescription> */}
                                </DialogHeader>
                              <Create/>
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
                            {/* Data departemen yang sudah ada */}
                            {data_departemen.map((dep, index) => (
                                <TableRow key={dep.id}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{dep.namaDepartemen}</TableCell>
                                    <TableCell className='flex gap-2'>
                                        {/* Tempatkan aksi seperti tombol edit atau delete di sini */}
                                        <Link href={`/departemen/edit/${dep.id}`} className="text-blue-500 hover:underline">
                                            <IconEdit size={18} />
                                        </Link>
                                        <span onClick={() => handleDelete(dep.id)} className="text-red-900 hover:cursor-pointer">
                                            <IconTrash size={18} />
                                        </span>
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>
            </Card>
        </Admin>
    );
}
