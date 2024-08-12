import React, { useState } from 'react';
import Admin from '~/layout/admin';
import { Link } from '@inertiajs/react';
import { IconBuildingArch, IconEdit, IconHome } from '@tabler/icons-react';
import { Card } from '~/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table';
import { Button } from '~/components/ui/button';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from '~/components/ui/label';
import { Input } from '~/components/ui/input';

export default function Index() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleAddDepartemenClick = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const handleConfirmAddDepartemen = () => {
        window.location.href = "/dasboard/departemen/index";
    };

    return (
        <Admin>
            <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <AlertDialogTrigger asChild>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Tambah Departemen</AlertDialogTitle>
                        <AlertDialogDescription>
                            Apakah Anda yakin ingin menambah departemen baru?
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div>
                        <Label>Nama Departemen</Label>
                        <Input
                            type='Text'
                            placeholder='Masukkan nama departemen'
                        />
                    </div>
                    <AlertDialogFooter>
                        <Button className='bg-white text-black border' onClick={handleCloseDialog}>Cancel</Button>
                        <Button className='bg-blue-500' onClick={handleConfirmAddDepartemen}>Simpan</Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
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
                            <TableRow>
                                <TableCell className="flex gap-3">
                                    {/* <span onClick={() => handleDelete(karyawan.id)} className="text-right text-red-900 cursor-pointer">
                                        <IconTrash size={18} />
                                    </span> */}
                                </TableCell>
                                <TableCell>Muhammad Rois</TableCell>
                                <TableCell>
                                    <Link href={"/dasboard/departemen/edit"}>
                                        <IconEdit size={18} />
                                    </Link>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Card>
            </Card>
        </Admin>
    );
}
