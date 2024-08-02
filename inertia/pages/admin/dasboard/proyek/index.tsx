import { Head, Link } from '@inertiajs/react'
import { IconBriefcase, IconHome, IconSearch, IconUserPlus } from '@tabler/icons-react'
import React from 'react'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '~/components/ui/table'
import Admin from '~/layout/admin'

export default function IndexProyek() {
    return (
        <Admin>
            <Card className="p-5">
                <div className="border-b border-gray-200 pb-4">
                    <div className='flex justify-between'>
                        <div>
                            <Link href="/">
                                <p className='text-sm flex gap-1'><IconHome size={18} />Home</p>
                            </Link>
                            <h6 className='text-gray-600 text-lg font-bold'>Proyek</h6>
                        </div>


                        <div>
                            <Link href="/dasboard/pengguna/create">
                                <Button className="bg-slate-900 text-white btn-small    gap-2 hover:bg-slate-800 hover:text-white" variant="outline">
                                    <IconBriefcase size={18} />
                                    Tambah Proyek
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


                        </TableBody>

                    </Table>
                </Card>
            </Card>
        </Admin>
    )
}
