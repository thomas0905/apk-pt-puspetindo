import { IconCloudDownload, IconFileTypePdf } from '@tabler/icons-react';
import { Card, CardContent } from '~/components/ui/card';
import Admin from '~/layout/admin';
import { usePage } from '@inertiajs/react';

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
      <div className="flex gap-2">
        <div className="w-3/12">
          <Card className="relative rounded-sm p-5">
            <CardContent className="p-3 flex justify-center relative">
              <div className="text-center">
                <IconFileTypePdf size={54} className="text-green-600" />
                <p>{data_ppwi.namaFile}</p>
                <p>{data_ppwi.keterangan}</p>
              </div>
              
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
