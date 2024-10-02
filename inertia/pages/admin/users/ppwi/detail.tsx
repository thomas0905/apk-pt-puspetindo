import { IconCloudDownload, IconFileTypePdf, IconHome, IconTrash } from '@tabler/icons-react';
import { Card, CardContent } from '~/components/ui/card';
import Admin from '~/layout/admin';
import { Head, Link, useForm } from '@inertiajs/react';
import { Input } from '~/components/ui/input';
import React, { useState } from 'react';
import { Button } from '~/components/ui/button';

export default function Detail({ data_ppwi }: any) {
  console.log(data_ppwi);

  const [searchQuery, setSearchQuery] = useState(''); // State untuk pencarian

  // State untuk menyimpan item yang tersaring
  const filteredPpwi = data_ppwi.filter((ppwi: any) =>
    ppwi.namaFile.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const { delete: destroy } = useForm();

  // Fungsi untuk menghapus file
  const handleDelete = (namaFile: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus file ini?')) {
      // Mengirim permintaan delete menggunakan Inertia.js
      destroy(`/ppwi/delete/${namaFile}`, {
        onSuccess: () => {
          // Aksi setelah berhasil menghapus, bisa berupa reload data atau notifikasi
          alert('File berhasil dihapus!');
        },
      });
    }
  };

  return (
    <Admin>
      <Head>
        <title>Detail</title>
      </Head>
      <div className="flex justify-between">
        <div className="flex gap-1">
          <Link href="/">
            <p className="text-sm flex gap-1 hover:text-gray-500 hover:border-dashed">
              <IconHome size={18} />Home
            </p>
          </Link>
          <small>/</small>
          <Link href="/ppwi">
            <p className="text-sm hover:text-gray-500">ppwi</p>
          </Link>
        </div>
        <div className="-mt-">
          <Input
            placeholder="Cari nama file..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-[323px]"
          />
        </div>
      </div>

      {/* Tombol Pilih Semua */}
      <div className="-mt-2">
        <label className="flex items-center space-x-2">
          <Input
            className="text-blue-600 hover:bg-gray-100 duration-300 border rounded-sm w-4 border-slate-200 hover:text-blue-800 cursor-pointer"
            type="checkbox"
          />
          <span>Pilih Semua</span>
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {filteredPpwi.length > 0 ? (
          filteredPpwi.map((data: any) => (
            <Card
              key={data.id}
              className="relative rounded-sm p-5 flex items-center justify-center"
            >
              <CardContent className="p-3 flex flex-col items-center justify-center relative">
                <div className="flex flex-col items-center justify-center">
                  <IconFileTypePdf size={54} className="text-green-600" />
                  <p className="mt-2">{data.namaFile}</p>
                </div>
              </CardContent>
              <div className="absolute w-full flex justify-between mt-28 p-1">
                {/* Icon di kiri (Checkbox untuk memilih item) */}
                <div className="flex items-center  mx-1">
                  <Input className="cursor-pointer w-4" type="checkbox" />
                </div>

                {/* Icon di kanan (Download Icon dengan link dinamis sesuai ID) */}
                <div className="flex items-center space-x-2">
                  <a href={`/ppwi/download/${data.namaFile}`}>
                    <IconCloudDownload
                      size={24}
                      className="text-blue-600 hover:bg-gray-100 duration-300 border rounded-sm w-8 border-slate-200 hover:text-blue-800 cursor-pointer"
                    />
                  </a>
                  {/* Tombol Delete */}
                  <IconTrash
                    size={24}
                    className="text-red-600 hover:bg-gray-100 duration-300 border rounded-sm w-8 border-slate-200 hover:text-red-800 cursor-pointer"
                    onClick={() => handleDelete(data.namaFile)}
                  />
                </div>
              </div>
            </Card>
          ))
        ) : (
          <div className="col-span-4 text-center py-8">
            <p className="text-gray-500 text-xl">Data tidak ditemukan.</p>
          </div>
        )}
      </div>
    </Admin>
  );
}
