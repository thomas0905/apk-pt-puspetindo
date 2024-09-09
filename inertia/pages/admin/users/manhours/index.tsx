import { Head, Link, router, usePage } from '@inertiajs/react';
import { IconBriefcase, IconHome, IconTrash } from '@tabler/icons-react';
import React, { useState } from 'react';
import { Button } from '~/components/ui/button';
import { Card } from '~/components/ui/card';
import Admin from '~/layout/admin';
import DataTable from '~/components/dataTable/dataTable';
import { createColumnHelper } from '@tanstack/react-table';
import Swal from 'sweetalert2';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '~/components/ui/dialog';
import Create from './create';

export default function Index({}) {
  const { data_manHours, data_proyek } = usePage().props;
console.log(data_proyek);

  const [modalCreate, setModalCreate] = useState(false);

  const columnHelper = createColumnHelper<any>();

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
      await router.delete('/manhours/delete/' + id);
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
    columnHelper.accessor('karyawan.nama', {
      header: () => 'Nama Karyawan',
      cell: info => info.row.original?.karyawan?.nama || 'data tidak ada'
    }),
    columnHelper.accessor('proyek.namaProyek', {
      header: () => 'Nama Proyek',
      cell: info => info.row.original?.proyek?.namaProyek || 'data tidak ada',
    }),
    columnHelper.accessor('tanggal', {
      header: () => 'Tanggal',
      cell: info => new Date(info.getValue()).toLocaleDateString(),
    }),
    columnHelper.accessor('jamKerja', {
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
        </div>
      ),
    }),
  ];

  return (
    <Admin>
      <Head title='Man Hours' />
      <Card className="p-5 shadow-md">
        <div className="border-b border-gray-200 pb-4">
          <div className='flex justify-between'>
            <div>
              <Link href="/">
                <p className='text-sm flex gap-1'><IconHome size={18} />Home</p>
              </Link>
              <Link href="/manhours">
                <h6 className='text-gray-600 text-lg font-bold'>Man Hours</h6>
              </Link>
            </div>
            <div>
              <Dialog open={modalCreate} onOpenChange={setModalCreate}>
                <DialogTrigger asChild>
                  <Button
                    className="bg-blue-600 hover:bg-blue-500 text-white btn-small gap-2 hover:text-white"
                    variant="outline"
                  >
                    <IconBriefcase size={18} />
                    Tambah Manhours
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Tambah Manhours</DialogTitle>
                  </DialogHeader>
                  {/* Kirim data_proyek ke Create dan tutup modal setelah berhasil */}
                  <Create proyek={data_proyek} manhours={data_manHours} />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
        <DataTable data={data_manHours} columns={columns} />
      </Card>
    </Admin>
  );
}
