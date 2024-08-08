import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { IconEdit, IconHome, IconLock, IconSearch, IconTrash, IconUserPlus } from '@tabler/icons-react';
import { Input } from '@/components/ui/input';
import Admin from '~/layout/admin';
import { Link, router, usePage } from "@inertiajs/react";
import Swal from 'sweetalert2'
import Karyawan from "#models/karyawan";


export default function Pegunna() {
    const { data_karyawan } = usePage<{ data_karyawan: Karyawan[] }>().props
    const handleDelete = async (id: any) => {
        const swalInstance = Swal.fire({
            title: 'Ingin Hapus Data?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Ya!',
            cancelButtonText: 'Tidak!',
            allowOutsideClick: false,
        });
        const result = await swalInstance;
        if (result.isConfirmed) {
            await router.delete('/dasboard/pengguna/pengguna/' + id);
            Swal.fire('Deleted!', 'Data berhasil dihapus.', 'success');
        } else {
            Swal.fire('Cancelled', 'Data tidak dihapus.', 'error');
        }
    };
    return (
        <Admin>
            <Card className="p-5">
                <div className="border-b border-gray-200 pb-4">
                    <div className='flex justify-between'>
                        <div>
                            <Link href="/">
                                <p className='text-sm flex gap-1'><IconHome size={18} />Home</p>
                            </Link>
                            <h6 className='text-gray-600 text-lg font-bold'>Data Karyawan</h6>
                        </div>


                        <div>
                            <Link href="/dasboard/pengguna/create">
                                <Button className="bg-blue-600 hover:bg-blue-500 text-white btn-small gap-2 hover:text-white" variant="outline">
                                    <IconUserPlus size={18} />
                                    Tambah Karyawan
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
                        <TableHeader className="bg-slate-50">
                            <TableRow>
                                <TableHead className="w-[100px]">No</TableHead>
                                <TableHead>Nama</TableHead>
                                <TableHead>Departemen</TableHead>
                                <TableHead>Jabatan</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead >Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data_karyawan.map((karyawan) => (
                                <TableRow key={karyawan.id}>
                                    <TableCell className="font-medium">{karyawan.id}</TableCell>
                                    <TableCell>{karyawan.nama}</TableCell>
                                    <TableCell>{karyawan.departemen}</TableCell>
                                    <TableCell>{karyawan.jabatan}</TableCell>
                                    <TableCell >
                                        <span className={`w-20 text-center ${karyawan.status === 'aktif' ? 'bg-blue-300 py-1 pl-1 pr-1 rounded-md border-black' : 'bg-yellow-300 py-1 pl-1 pr-1 rounded-md'}`}>
                                            {karyawan.status}
                                        </span>
                                    </TableCell>
                                    <TableCell className="flex gap-3">
                                        <span onClick={() => handleDelete(karyawan.id)} className="text-right text-red-900 cursor-pointer">
                                            <IconTrash size={18} />
                                        </span>

                                        <Link href={"/dasboard/pengguna/edit/" + karyawan.id}>
                                            <IconEdit size={18} />
                                        </Link>


                                    </TableCell>
                                    {/* <TableCell>
                                        <Link href="/dasboard/pengguna/permission">
                                            <span className="bg-blue-200 py-1 pl-1 pr-1 w-[135px] rounded-md flex" >
                                                <IconLock size={18} />
                                                Atur Permission
                                            </span>
                                        </Link>
                                    </TableCell> */}
                                </TableRow>
                            ))}

                        </TableBody>

                    </Table>
                </Card>
            </Card>
        </Admin >
    );

}