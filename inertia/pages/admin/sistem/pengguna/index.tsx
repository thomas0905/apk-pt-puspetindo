import { Link, usePage } from '@inertiajs/react'
import { IconEdit, IconHome, IconLock, IconSearch, IconTrash, IconUserPlus } from '@tabler/icons-react'
import React from 'react'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table'
import Admin from '~/layout/admin'

import Karyawan from "#models/karyawan";
import DataTable from '~/components/dataTable/dataTable'
import { createColumnHelper } from "@tanstack/react-table"

export default function Index() {
    const { data_karyawan } = usePage<{ data_karyawan: Karyawan[] }>().props
    const columnHelper = createColumnHelper<Karyawan>();

    const columns= [
        columnHelper.accessor('id', {
            header: 'No',
            cell: info => info.row.index + 1,  // Menampilkan nomor urut
            footer: info => info.column.id,
        }),
        columnHelper.accessor('nama', {
            header: 'Nama',
            cell: info => info.getValue(),
            footer: info => info.column.id,
        }),

        columnHelper.accessor('jabatan', {
            header: 'Jabatan',
            cell: info => info.getValue(),
            footer: info => info.column.id,
        }),
        columnHelper.accessor('status', {
            header: () => 'Status',
            cell: info => {
                const status = info.getValue();
                const statusClass = status === 'aktif' ? 'bg-blue-300 text-black' : 'bg-yellow-300 text-black';
                return <span className={`px-2 py-1 rounded ${statusClass}`}>{status}</span>;
            },
            footer: info => info.column.id,
        }),
        columnHelper.display({
            id: 'aksi',
            header: 'Aksi',
            cell: info => (
                <div className="flex gap-3">
                    {/* <span
                        onClick={() => handleDelete(info.row.original.id)}
                        className="text-red-900 cursor-pointer"
                    >
                        <IconTrash size={18} />
                    </span> */}
                    <Link href={`/sistem/pengguna/edit/${info.row.original.id}`}>
                        <IconEdit size={18} />
                    </Link>

                    <Link href="/sistem/pengguna/permission">
                        <span className="bg-blue-200 py-1 border pl-1 pr-1 w-[135px] rounded-md flex" >
                            <IconLock size={18} />
                            Atur Permission
                        </span>
                    </Link>
                </div>
            ),
            footer: info => info.column.id,
        }),
    ];
    return (
        <Admin>
            <Card className="p-5">
                <div className="border-b border-gray-200 pb-4">
                    <div className='flex justify-between'>
                        <div>
                            <Link href="/">
                                <p className='text-sm flex gap-1'><IconHome size={18} />Home</p>
                            </Link>
                            <h6 className='text-gray-600 text-lg font-bold'>Data Pengguna</h6>
                        </div>


                        <div>
                            <Link href="/dasboard/pengguna/create">
                                <Button className="bg-blue-600 hover:bg-blue-500 text-white btn-small gap-2 hover:text-white" variant="outline">
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


                </div>

           <DataTable data={data_karyawan} columns={columns}/>
            </Card>
        </Admin>
    )
}
