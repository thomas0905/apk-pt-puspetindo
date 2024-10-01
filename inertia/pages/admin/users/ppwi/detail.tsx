import { IconCloudDownload, IconFileTypePdf, IconHome } from '@tabler/icons-react';
import { Card, CardContent } from '~/components/ui/card';
import Admin from '~/layout/admin';
import { Head, Link, useForm } from '@inertiajs/react';
import { Input } from '~/components/ui/input';
import React, { useState } from 'react';
import { Button } from '~/components/ui/button';

export default function Detail({ data_ppwi }: any) {
  const [searchQuery, setSearchQuery] = useState(''); // State untuk pencarian
  const [selectedItems, setSelectedItems] = useState<number[]>([]); // State untuk menyimpan item yang dipilih
  const [selectAll, setSelectAll] = useState(false); // State untuk toggle pilih semua

  // Fungsi untuk download file
  const handleDownload = (fileUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const { delete: destroy } = useForm();
  const handleDelete = () => {
    if (confirm('Anda yakin ingin menghapus file yang dipilih?')) {
      Promise.all(
        selectedItems.map((id) =>
          destroy(`/ppwi/delete/${id}`, {
            onSuccess: () => {
              setSelectedItems([]); // Reset selected items setelah penghapusan sukses
            },
            onError: () => {
              alert(`Gagal menghapus file dengan ID: ${id}`);
            },
          })
        )
      ).then(() => {
        alert('File berhasil dihapus');
      });
    }
  };

  // Fungsi untuk memilih/deselect item individual
  const handleSelectItem = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  // Fungsi untuk memilih semua item
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedItems(data_ppwi.map((item: any) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  // Fungsi untuk memfilter data berdasarkan nama file yang sesuai dengan query pencarian
  const filteredPpwi = data_ppwi.filter((ppwi: any) =>
    ppwi.namaFile.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <div className="-mt-8">
        <label className="flex items-center space-x-2">
          <Input
            className="text-blue-600 hover:bg-gray-100 duration-300 border rounded-sm w-4 border-slate-200 hover:text-blue-800 cursor-pointer"
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAll}
          />
          <span>Pilih Semua</span>
        </label>
      </div>

      {/* Grid untuk kartu */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 -mt-4">
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
                  <Input
                    className="cursor-pointer w-4"
                    type="checkbox"
                    checked={selectedItems.includes(data.id)}
                    onChange={() => handleSelectItem(data.id)}
                  />
                </div>

                {/* Icon di kanan (Download Icon) */}
                <div className="flex items-center">
                  <IconCloudDownload
                    size={24}
                    className="text-blue-600 hover:bg-gray-100 duration-300 border rounded-sm w-8 border-slate-200 hover:text-blue-800 cursor-pointer"
                    onClick={() =>
                      handleDownload(
                        data.file_url || '/default/path/to/tiketing.pdf',
                        data.namaFile || 'tiketing.pdf'
                      )
                    }
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

      {/* Tombol Hapus yang muncul ketika ada item yang dipilih */}
      {selectedItems.length > 0 && (
        <div >
          <Button
            className="bg-red-600 text-white text-sm rounded hover:bg-red-700"
            onClick={handleDelete}
          >
            Hapus {selectedItems.length} File
          </Button>
        </div>
      )}
    </Admin>
  );
}
