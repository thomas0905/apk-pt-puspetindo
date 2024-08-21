import { Head, usePage } from '@inertiajs/react'
import { IconPrinter } from '@tabler/icons-react'
import React, { useRef } from 'react'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import Admin from '~/layout/admin'
import logoPuspetindo from '../../../img/logo-puspetindo.png'
import ReactToPrint from 'react-to-print';
import Swal from 'sweetalert2'

export default function Laporan() {
  const {data_manhours} = usePage().props
  console.log(data_manhours);
  
  const componentRef = useRef(null);

  const handlePrint = () => {
    Swal.fire({
      title: 'Data Berhasil Di Tambah!',
      icon: 'success',
      confirmButtonText: 'Okee',
  });
  }
  return (
    <Admin>

      <Head title='Laporan' />
      {/* Pastikan Card atau elemen DOM lainnya yang menerima ref */}
      <div ref={componentRef}>
        <Card className="p-5">
          <div className="border-b border-gray-200 pb-4">
            <div className='flex justify-center'>
              <img src={logoPuspetindo} alt="Logo Puspetindo" />
            </div>
            <div className='flex justify-between'>
              <div>
                <h6 className='text-gray-600 text-lg font-bold'>Laporan</h6>
              </div>
            </div>
          </div>
          <div className='mt-2 flex justify-end'>
            <ReactToPrint
              trigger={() => {
                return <Button onClick={handlePrint} className='bg-blue-500 flex gap-1 hover:bg-blue-400'><IconPrinter /> Print</Button>
              }}
              content={() => componentRef.current}
              documentTitle='Laporan Puspetindo'
              pageStyle="print"
            />
          </div>
        </Card>
      </div>
    </Admin>
  )
}
