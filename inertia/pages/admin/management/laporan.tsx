import { Head, usePage } from '@inertiajs/react'
import { IconPrinter } from '@tabler/icons-react'
import React, { useRef } from 'react'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import Admin from '~/layout/admin'
import logoPuspetindo from '../../../img/logo-puspetindo.png'
import ReactToPrint from 'react-to-print';
import Swal from 'sweetalert2'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"



export default function Laporan() {
  const { data_manhours } = usePage().props
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
            <h6 className='text-gray-600 mx-3 text-lg font-bold'>Laporan</h6>
            <div className='flex justify-between'>
              <div>
              </div>
              <Table className='mt-2'>
                <TableHeader className='bg-blue-300'>
                  <TableRow className='border-t'>
                    <TableHead className="w-[100px]">No</TableHead>
                    <TableHead>Karyawan</TableHead>
                    <TableHead>Proyek</TableHead>
                    <TableHead>No_JE</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data_manhours.map((manhours) => (
                    <TableRow key={manhours.id}>
                      <TableCell className="font-medium">{manhours.jam_kerja}</TableCell>
                      {/* <TableCell>{invoice.paymentStatus}</TableCell>
                      <TableCell>{invoice.paymentMethod}</TableCell>
                      <TableCell className="text-right">{invoice.totalAmount}</TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
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
