import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { IconEdit, IconHome, IconSearch, IconTrash, IconUserPlus } from '@tabler/icons-react';
import { Input } from '@/components/ui/input';
import Admin from '~/layout/admin';
import { Link, usePage } from "@inertiajs/react";
import Pengguna from "#models/pengguna";

// import {useReactTable,getCoreRowModel,flexRender} from '@tanstack/react-table'
// import { useMemo } from "react";


export default function Pegunna() {
    const { data_pengguna } = usePage<{ data_pengguna: Pengguna[] }>().props



    // const columns = [
    //     {
    //         id: '1',
    //         nama: 'Muhammad Rois',
    //         kab:'Bangkalan'
    //     },

    //     {
    //         id: '2',
    //         nama: 'Riski',
    //         kab:'Bangkalan'
    //     },

    //     {
    //         id: '3',
    //         nama: 'Finaa',
    //         kab:'Bangkalan'
    //     },

    //     {
    //         id: '4',
    //         nama: 'Faraa',
    //         kab:'Bangkalan'
    //     },
    // ]

    // const table= useReactTable({data,columns})

    // const data= useMemo(() => pengguna,[])


    const handleDelete = () => {
        // const { id } = params
        // const user = await Pengguna.find(id)
        // await user.delete()
    }

    return (
        <Admin>
            <Card className="p-5">
                <div className="border-b border-gray-200 pb-4">
                    <div className='flex justify-between'>
                        <div>
                            <Link href="/">
                                <p className='text-sm flex gap-1'><IconHome size={18} />Home</p>
                            </Link>
                            <h6 className='text-gray-600 text-lg font-bold'>Data Kontak</h6>
                        </div>


                        <div>
                            <Link href="/dasboard/pengguna/create">
                                <Button className="bg-slate-900 text-white btn-small    gap-2 hover:bg-slate-800 hover:text-white" variant="outline">
                                    <IconUserPlus size={18} />
                                    Tambah Pengguna
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between mt-6'>
                    <div className="relative flex flex-col space-y-1.3">
                        <Input id="name" placeholder="Search..." className="pl-10" />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <IconSearch size={16} />
                        </div>
                    </div>

                    <div>
                        <Link href="/">
                            <Button className="bg-slate-100 text-white gap-2 hover:bg-slate-800 hover:text-white" variant="outline">
                                <IconUserPlus size={18} />
                                Kolom
                            </Button>
                        </Link>
                    </div>
                </div>

                <Card className="mt-3">
                    <Table className="container">
                        {/* <TableCaption>Tidak ada data yang di temukan</TableCaption> */}
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">No</TableHead>
                                <TableHead>Nama</TableHead>
                                <TableHead>Departemen</TableHead>
                                <TableHead>Jabatan</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-">Aksi</TableHead>

                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data_pengguna.map((pengguna) => (
                                <TableRow key={pengguna.id}>
                                    <TableCell className="font-medium">{pengguna.id}</TableCell>
                                    <TableCell>{pengguna.nama}</TableCell>
                                    <TableCell>{pengguna.departemen}</TableCell>
                                    <TableCell className="flex gap-3">
                                        <span onClick={handleDelete} className="text-right text-red-900 cursor-pointer">
                                            <IconTrash size={18} />
                                        </span>

                                        <Link href="/sistem/pengguna/edit">
                                            <IconEdit size={18} />
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}

                        </TableBody>

                    </Table>
                </Card>
            </Card>
        </Admin >
    );

}