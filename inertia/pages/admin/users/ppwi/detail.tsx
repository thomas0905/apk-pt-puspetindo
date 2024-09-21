import { IconCloudDownload, IconFileTypePdf, IconHome } from '@tabler/icons-react';
import { Card, CardContent } from '~/components/ui/card';
import Admin from '~/layout/admin';
import { Head, Link } from '@inertiajs/react';
import { Input } from '~/components/ui/input';
import React, { useState } from 'react';

export default function Detail({ data_ppwi }: any) {
  const [searchQuery, setSearchQuery] = useState(''); // State untuk pencarian

  const handleDownload = (fileUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        <div className='flex gap-1'>
          <Link href="/">
            <p className='text-sm flex gap-1 hover:text-gray-500 hover:border-dashed'>
              <IconHome size={18} />Home
            </p>
          </Link>
          <small>/</small>
          <Link href='/ppwi'>
            <p className='text-sm hover:text-gray-500'>ppwi</p>
          </Link>
        </div>
        <div>
          <Input
            placeholder="Cari nama file..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-[323px]'
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 -mt-4">
        {filteredPpwi.length > 0 ? (
          filteredPpwi.map((data: any) => (
            <Card key={data.id} className="relative rounded-sm p-5 flex items-center justify-center">
              <CardContent className="p-3 flex flex-col items-center justify-center relative">
                <div className="flex flex-col items-center justify-center">
                  <IconFileTypePdf size={54} className="text-green-600" />
                  <p className="mt-2">{data.namaFile}</p>
                </div>
              </CardContent>
              <div className="absolute -bottom-2 -right-1 p-5">
                <IconCloudDownload
                  size={24}
                  className="text-blue-600 hover:bg-gray-100 duration-300 border rounded-sm w-8 border-slate-200 hover:text-blue-800 cursor-pointer"
                  onClick={() => handleDownload(data.file_url || '/default/path/to/tiketing.pdf', data.namaFile || 'tiketing.pdf')}
                />
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
