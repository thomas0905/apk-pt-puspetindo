import React, { FormEventHandler, useState } from 'react';
import Admin from '~/layout/admin';
import { Link, useForm } from '@inertiajs/react';
import { IconBuildingArch, IconEdit, IconHome } from '@tabler/icons-react';
import { Card } from '~/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table';
import { Button } from '~/components/ui/button';
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Label } from '~/components/ui/label';
import { Input } from '~/components/ui/input';
import Swal from 'sweetalert2';

export default function Index() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const { data, setData, post, processing } = useForm({
        namaDepartemen: '',
        namaPegawai: ''
    });

    const handleAddDepartemenClick = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/dasboard/departemen/create', {
            onSuccess: () => {
                Swal.fire({
                    title: 'Data Berhasil Ditambahkan!',
                    icon: 'success',
                    confirmButtonText: 'Okee',
                }).then(() => {
                    window.location.href = '/dasboard/departemen/index'; // Redirect to index page
                });
            },
            onError: () => {
                Swal.fire({
                    title: 'Gagal Menambahkan Data!',
                    icon: 'error',
                    confirmButtonText: 'Okee',
                });
            }
        });
    };

    return (
        <Admin>
            <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <form onSubmit={handleSubmit}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Tambah Departemen</AlertDialogTitle>
                            <AlertDialogDescription>
                                Apakah Anda yakin ingin menambah departemen baru?
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <div>
                            <Label>Nama Departemen:</Label>
                            <Input
                                type='text'
                                placeholder='Masukkan nama departemen'
                                onChange={(e) => setData('namaDepartemen', e.target.value)}
                                name='namaDepartemen'
                                value={data.namaDepartemen}
                            />
                        </div>

                        <div>
                            <Label>Nama Pegawai:</Label>
                            <Input
                                type='text'
                                placeholder='Masukkan nama pegawai'
                                onChange={(e) => setData('namaDepartemen', e.target.value)}
                                name='namaDepartemen'
                                value={data.namaDepartemen}
                            />
                        </div>
                        <AlertDialogFooter>
                            <Button
                                type='button'
                                className='bg-white text-black border hover:bg-slate-50'
                                onClick={handleCloseDialog}
                            >
                                Cancel
                            </Button>
                            <Button
                                type='submit'
                                className='bg-blue-500 hover:bg-blue-400'
                                disabled={processing}
                            >
                                Simpan
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </form>
            </AlertDialog>

            <Card className="p-5">
                <div className="border-b border-gray-200 pb-4">
                    <div className='flex justify-between'>
                        <div>
                            <Link href="/dasboard/karyawan/index">
                                <p className='text-sm flex gap-1'><IconHome size={18} />karyawan</p>
                            </Link>
                            <h6 className='text-gray-600 text-lg font-bold'>Menu Departemen</h6>
                        </div>
                        <div>
                            <Button
                                className="bg-blue-600 hover:bg-blue-500 text-white btn-small gap-2 hover:text-white"
                                variant="outline"
                                onClick={handleAddDepartemenClick}
                            >
                                <IconBuildingArch size={18} />
                                Tambah Departemen
                            </Button>
                        </div>
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
                        </TableBody>
                    </Table>
                </Card>
            </Card>
        </Admin>
    );
}
