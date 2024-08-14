import { Head, Link, router, usePage } from '@inertiajs/react';
import { IconBriefcase, IconEdit, IconHome, IconTrash } from '@tabler/icons-react';
import React from 'react';
import { Button } from '~/components/ui/button';
import { Card } from '~/components/ui/card';
import Admin from '~/layout/admin';
import DataTable from '~/components/dataTable/dataTable';
import { createColumnHelper } from '@tanstack/react-table';
import Swal from 'sweetalert2';
import ManHour from '#models/man_hour';

export default function Index() {
  const { data_manHours } = usePage<{ data_manHours: ManHour[] }>().props;
  console.log(data_manHours)

  const columnHelper = createColumnHelper<ManHour>();

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
      await router.delete('/users/manhours/delete' + id);
      Swal.fire('Deleted!', 'Data berhasil dihapus.', 'success');
    } else {
      Swal.fire('Cancelled', 'Data tidak dihapus.', 'error');
    }
  };

  const columns = [
    columnHelper.accessor('id', {
      header: () => 'No',
      cell: info => info.row.index + 1,
    }),
    columnHelper.accessor('karyawanId', {
      header: () => 'Nama Karyawan',
      cell: info => info.row.original?.karyawan?.namaKaryawan
    }),
    columnHelper.accessor('proyek.namaProyek', {
      header: () => 'Nama Proyek',
      cell: info => info.row.original?.proyek?.namaProyek,
    }),
    columnHelper.accessor('tanggal', {
      header: () => 'Tanggal',
      cell: info => new Date(info.getValue()).toLocaleDateString(),
    }),
    columnHelper.accessor('jam_kerja', {
      header: () => 'Jam Kerja',
      cell: info => `${info.getValue()} jam`,
    }),
    columnHelper.display({
      id: 'aksi',
      header: () => 'Aksi',
      cell: info => (
        <div className="flex gap-3">
          <span onClick={() => handleDelete(info.row.original.id)} className="text-red-900 cursor-pointer">
            <IconTrash size={18} />
          </span>
          <Link href={"/users/manhours/edit/" + info.row.original.id}>
            <IconEdit size={18} />
          </Link>
        </div>
      ),
    }),
  ];

  return (
    <Admin>
      <Head title='man-hours' />
      <Card className="p-5">
        <div className="border-b border-gray-200 pb-4">
          <div className='flex justify-between'>
            <div>
              <Link href="/">
                <p className='text-sm flex gap-1'><IconHome size={18} />Home</p>
              </Link>
              <Link href="/users/manhours/index">
                <h6 className='text-gray-600 text-lg font-bold'>Man Hours</h6>
              </Link>
            </div>
            <div>
              <Link href="/users/manhours/create">
                <Button className="bg-blue-600 hover:bg-blue-500 text-white btn-small gap-2 hover:text-white" variant="outline">
                  <IconBriefcase size={18} />
                  Tambah man hours
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <DataTable data={data_manHours} columns={columns} />
      </Card>
    </Admin>
  );
}
