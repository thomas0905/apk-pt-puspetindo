import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { IconEdit, IconHome, IconSearch, IconTrash, IconUserPlus } from '@tabler/icons-react';
import { Input } from '@/components/ui/input';
import Admin from '~/layout/admin';
import { Link, router, usePage } from "@inertiajs/react";
import Swal from 'sweetalert2'
import Karyawan from "#models/karyawan";
import DataTable from '~/components/dataTable/dataTable'
import { createColumnHelper } from "@tanstack/react-table";

export default function Index() {
    const { data_karyawan } = usePage<{ data_karyawan: Karyawan[] }>().props;

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
            await router.delete('/dasboard/karyawan/delete/' + id);
            Swal.fire('Deleted!', 'Data berhasil dihapus.', 'success');
        } else {
            Swal.fire('Cancelled', 'Data tidak dihapus.', 'error');
        }
    };

    const columnHelper = createColumnHelper<Karyawan>();

    const columns = [
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
        columnHelper.accessor('departemen', {
            header: 'Departemen',
            cell: info => info.getValue(),
            footer: info => info.column.id,
        }),
        columnHelper.accessor('jabatan', {
            header: 'Jabatan',
            cell: info => info.getValue(),
            footer: info => info.column.id,
        }),
        columnHelper.accessor('status', {
            header: 'Status',
            cell: info => {
                const status = info.getValue();
                const statusClass = status === 'Aktif' ? 'bg-blue-300 text-black' : 'bg-yellow-300 text-black';
                return (
                    <span className={`px-2 py-1 rounded ${statusClass}`}>
                        {status}
                    </span>
                );
            },
            footer: info => info.column.id,
        }),
        columnHelper.display({
            id: 'aksi',
            header: 'Aksi',
            cell: info => (
                <div className="flex gap-3">
                    <span
                        onClick={() => handleDelete(info.row.original.id)}
                        className="text-red-900 cursor-pointer"
                    >
                        <IconTrash size={18} />
                    </span>
                    <Link href={`/dasboard/karyawan/edit/${info.row.original.id}`}>
                        <IconEdit size={18} />
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
                            <h6 className='text-gray-600 text-lg font-bold'>Data Karyawan</h6>
                        </div>
                        <div>
                            <Link href="/dasboard/karyawan/create">
                                <Button className="bg-blue-600 hover:bg-blue-500 text-white btn-small gap-2 hover:text-white" variant="outline">
                                    <IconUserPlus size={18} />
                                    Tambah Karyawan
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <DataTable data={data_karyawan} columns={columns} />
            </Card>
        </Admin>
    );
}
