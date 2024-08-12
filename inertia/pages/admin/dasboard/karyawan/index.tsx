import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { IconBuildingArch, IconEdit, IconHome, IconTrash, IconUserPlus } from '@tabler/icons-react';
import Admin from '~/layout/admin';
import { Link, router, usePage } from "@inertiajs/react";
import Swal from 'sweetalert2'
import DataTable from '~/components/dataTable/dataTable'
import { createColumnHelper } from "@tanstack/react-table";

export default function Index() {
    const { data_karyawan, data_departemen } = usePage().props;
    console.log(data_departemen);

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Ingin Hapus Data?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Ya!',
            cancelButtonText: 'Tidak!',
            allowOutsideClick: false,
        });

        if (result.isConfirmed) {
            try {
                await router.delete(`/dasboard/karyawan/delete/${id}`);
                Swal.fire('Deleted!', 'Data berhasil dihapus.', 'success');
            } catch (error) {
                Swal.fire('Error', 'Gagal menghapus data.', 'error');
            }
        }
    };

    const columnHelper = createColumnHelper();

    const columns = [
        columnHelper.accessor('id', {
            header: 'No',
            cell: info => info.row.index + 1,
            footer: info => info.column.id,
        }),
        columnHelper.accessor('nama', {
            header: 'Nama',
            cell: info => info.getValue(),
            footer: info => info.column.id,
        }),
        columnHelper.accessor('namaDepartemen', {
            header: 'Departemen',
            cell: info => info.getValue(),
            footer: info => info.row.original?.departemen?.namaDepartemen
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
                    <div className='flex justify-between items-center'>
                        <div>
                            <Link href="/">
                                <p className='text-sm flex gap-1 items-center'><IconHome size={18} />Home</p>
                            </Link>
                            <h6 className='text-gray-600 text-lg font-bold mt-2'>Data Karyawan</h6>
                        </div>

                        <div className="flex gap-2">
                            <Link href="/dasboard/departemen/index">
                                <Button className="bg-blue-600 hover:bg-blue-500 text-white btn-small gap-2 hover:text-white" variant="outline">
                                    <IconBuildingArch size={18} />
                                    Departemen
                                </Button>
                            </Link>
                            <Link href="/dasboard/karyawan/create">
                                <Button className="bg-blue-600 hover:bg-blue-500 text-white btn-small gap-2 hover:text-white" variant="outline">
                                    <IconUserPlus size={18} />
                                    Tambah Karyawan
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <DataTable data={data_karyawan} columns={columns} />
                </div>
            </Card>
        </Admin>
    );
}