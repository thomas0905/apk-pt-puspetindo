import { Head, usePage } from '@inertiajs/react'
import { IconPrinter } from '@tabler/icons-react'
import React, { useRef, useState } from 'react'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import Admin from '~/layout/admin'
import logoPuspetindo from '../../../img/logo-puspetindo.png'
import ReactToPrint from 'react-to-print';
import Swal from 'sweetalert2'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Laporan() {
  const { data_manhours } = usePage().props;
  const componentRef = useRef(null);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handlePrint = () => {
    Swal.fire({
      title: 'Data Berhasil Di Tambah!',
      icon: 'success',
      confirmButtonText: 'Okee',
    });
  };

  const formatDate = (date) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(date).toLocaleDateString('id-ID', options);
  };

  const filterDataByDate = () => {
    if (startDate && endDate) {
      return data_manhours.filter((manhours) => {
        const manhoursDate = new Date(manhours.tanggal);
        const start = new Date(startDate);
        const end = new Date(endDate);
        return manhoursDate >= start && manhoursDate <= end;
      });
    }
    return data_manhours;
  };

  const filteredData = filterDataByDate();

  return (
    <Admin>
      <Head title='Laporan' />
      <div ref={componentRef}>
        <Card className="p-5 shadow-md bg-s">
          <div className="border-b border-gray-200 pb-4">
            <div className='flex justify-center'>
              <img src={logoPuspetindo} alt="Logo Puspetindo" />
            </div>
            <div className="flex items-center mt-4">
              <h6 className="text-gray-700 text-lg font-bold">Laporan</h6>
              <div className="flex items-center mx-2 space-x-4">
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="border rounded-sm p-1"
                />
                <span>sampai</span>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="border rounded-sm p-1"
                />
              </div>
              <Button className='bg-blue-600 btn-lg'>Pilih</Button>
            </div>

            <div className='flex justify-between mt-1'>
              <div></div>
              <Table className='mt-2 bg-slate-50'>
                <TableHeader className='bg-blue-300'>
                  <TableRow className='border-t'>
                    <TableHead className="w-[100px]">No</TableHead>
                    <TableHead>Karyawan</TableHead>
                    <TableHead>Proyek</TableHead>
                    <TableHead>No_JE</TableHead>
                    <TableHead>Tanggal</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {filteredData.length > 0 ? (
                    filteredData.map((manhours, index) => (
                      <TableRow key={manhours.id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{manhours.karyawan?.nama}</TableCell>
                        <TableCell>{manhours.proyek?.namaProyek}</TableCell>
                        <TableCell>{manhours.proyek?.kodeJobOrder}</TableCell>
                        <TableCell>{formatDate(manhours.tanggal)}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan="5" className="text-center">Data tidak ditemukan</TableCell>
                    </TableRow>
                  )}
                </TableBody>
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
  );
}
