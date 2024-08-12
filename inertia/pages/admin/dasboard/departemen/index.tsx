import React from 'react'
import Admin from '~/layout/admin'
import DataTable from '~/components/dataTable/dataTable'
import { createColumnHelper } from "@tanstack/react-table";
import { Link, usePage } from '@inertiajs/react';
import { IconEdit, IconHome, IconLock, IconUserPlus } from '@tabler/icons-react';
import Departemen from '#models/departemen';
import { Card } from '~/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table';
import { Button } from '~/components/ui/button';


export default function Index() {

    return (
        <Admin>
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
                            <Link href="/dasboard/departemen/create">
                                <Button className="bg-blue-600 hover:bg-blue-500 text-white btn-small gap-2 hover:text-white" variant="outline">
                                    <IconUserPlus size={18} />
                                    Tambah Departemen
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>



                <Card className="mt-3">
                    <Table className="container">
                        {/* <TableCaption>Tidak ada data yang di temukan</TableCaption> */}
                        <TableHeader className="bg-slate-50">
                            <TableRow>
                                <TableHead className="w-[100px]">No</TableHead>
                                <TableHead>Nama</TableHead>
                                <TableHead>Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow >
                                <TableCell className="flex gap-3">
                                    {/* <span onClick={() => handleDelete(karyawan.id)} className="text-right text-red-900 cursor-pointer">
                                            <IconTrash size={18} />
                                        </span> */}

                                </TableCell>
                                <TableCell>Muhammad Rois</TableCell>
                                <TableCell>
                                    <Link href={"/dasboard/pengguna/edit/"}>
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

