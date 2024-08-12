import React from 'react';
import Admin from '~/layout/admin';
import { Link, usePage } from '@inertiajs/react';
import { IconBuildingArch, IconHome } from '@tabler/icons-react';
import { Card } from '~/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table';
import { Button } from '~/components/ui/button';

export default function Index() {
    const { data_departemen } = usePage().props;

    return (
        <Admin>
            <Card className="p-5">
                <div className="border-b border-gray-200 pb-4">
                    <div className='flex justify-between'>
                        <div>
                            <Link href="/dasboard/karyawan/index">
                                <p className='text-sm flex gap-1'><IconHome size={18} />Karyawan</p>
                            </Link>
                            <h6 className='text-gray-600 text-lg font-bold'>Menu Departemen</h6>
                        </div>
                        <div>
                            <Link href='/dasboard/departemen/create'>
                                <Button
                                    className="bg-blue-600 hover:bg-blue-500 text-white btn-small gap-2 hover:text-white"
                                    variant="outline"
                                >
                                    <IconBuildingArch size={18} />
                                    Tambah Departemen
                                </Button>
                            </Link>
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
                            {data_departemen.map((dep, index) => (
                                <TableRow key={dep.id}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{dep.namaDepartemen}</TableCell>
                                    <TableCell>
                                        {/* Tempatkan aksi seperti tombol edit atau delete di sini */}
                                        <Link href={`/dasboard/departemen/edit/${dep.id}`} className="text-blue-500 hover:underline">
                                            Edit
                                        </Link>
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
