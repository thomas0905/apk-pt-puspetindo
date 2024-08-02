import { Head } from '@inertiajs/react'
import React from 'react'
import { Card } from '~/components/ui/card'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '~/components/ui/table'
import Admin from '~/layout/admin'

export default function IndexProyek() {
    return (
        <Admin>
            <Head title='proyek' />
            <Card>
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
                            {/* {data_pengguna.map((pengguna) => (
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
                            ))} */}

                        </TableBody>

                    </Table>
                </Card>
            </Card>
        </Admin>
    )
}
