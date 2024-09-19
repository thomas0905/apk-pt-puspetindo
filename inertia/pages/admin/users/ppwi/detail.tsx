import { IconCloudDownload, IconFileTypePdf } from '@tabler/icons-react'
import { Card, CardContent } from '~/components/ui/card'
import Admin from '~/layout/admin'

export default function Detail({detail_ppwi}) {
  console.log(detail_ppwi);
  
  // Fungsi download file
  const handleDownload = () => {
    const fileUrl = '/path/to/tiketing.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'tiketing.pdf');
    document.body.appendChild(link);
  }

  return (
    <Admin>
      <div className="flex gap-2">
        <div className="w-3/12">
          <Card className="relative rounded-sm p-5">
            <CardContent className='p-3 flex justify-center relative'>
              <div className='text-center'>
                <IconFileTypePdf size={54} className='text-green-600' />
                <p>tiketing.pdf</p>
                <p>{detail_ppwi.keterangan}</p>
              </div>

              <div className='absolute -bottom-6 -right-4 p-4 '>
                <IconCloudDownload 
                  size={24} 
                  className='text-blue-600 hover:bg-gray-100 duration-300 border rounded-sm w-8 border-slate-200 hover:text-blue-800 cursor-pointer' 
                  onClick={handleDownload}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Admin>
  )
}
