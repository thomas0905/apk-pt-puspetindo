import { IconCloudDownload, IconFileTypePdf, IconHome } from '@tabler/icons-react';
import { Card, CardContent } from '~/components/ui/card';
import Admin from '~/layout/admin';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Detail({ data_ppwi }: any) {
  // const { data_ppwi } = usePage().props;
  console.log(data_ppwi);
  const handleDownload = () => {
    const fileUrl = data_ppwi.file_url || '/default/path/to/tiketing.pdf'; // Mengambil URL file dari data API
    const fileName = data_ppwi.file_name || 'tiketing.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Admin>
      <Head>
        <title>detail</title>
      </Head>
      <div className='flex gap-1'>
        <Link href="/" >
          <p className='text-sm flex gap-1 hover:text-gray-500  hover:border-dashed'><IconHome size={18} />Home</p>
        </Link>
        <small>/</small>
        <Link href='/ppwi'>
          <p className='text-sm hover:text-gray-500 '>ppwi</p>
        </Link>
      </div>
      {/* <div className='bg-emerald-300 rounded-sm text-green-700 -mt-3'>
        <p className='text-sm py-1 mx-2 '>File laporan hanya di tampilkan bisa di download</p>
      </div> */}
      <div className="flex gap-2 -mt-3">
        <div className="w-3/12">
          <Card className="relative rounded-sm p-5 flex items-center justify-center">
            <CardContent className="p-3 flex flex-col items-center justify-center relative">
              <div className="flex flex-col items-center justify-center">
                <IconFileTypePdf size={54} className="text-green-600" />
                <p className="mt-2">{data_ppwi.namaFile}</p>
              </div>

              {/* Tombol download berada di sudut kanan bawah */}
              <div className="absolute -bottom-6 -right-4 p-4">
                <IconCloudDownload
                  size={24}
                  className="text-blue-600 hover:bg-gray-100 duration-300 border rounded-sm w-8 border-slate-200 hover:text-blue-800 cursor-pointer"
                  onClick={handleDownload}
                />
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </Admin>
  );
}
