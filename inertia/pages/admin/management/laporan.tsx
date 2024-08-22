import { Head, useForm, usePage } from '@inertiajs/react'
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
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Textarea } from '~/components/ui/textarea'

export default function Laporan() {
  const { data_manhours } = usePage().props;
  const componentRef = useRef(null);

  const [selectedTanggal, setSelectedTanggal] = useState("");

  const handlePrint = () => {
    Swal.fire({
      title: 'Data Berhasil Di Tambah!',
      icon: 'success',
      confirmButtonText: 'Okee',
    });
  };

  const filteredData = selectedTanggal
    ? data_manhours.filter(manhours => manhours.tanggal === selectedTanggal)
    : data_manhours;

  return (
    <Admin>
      <Head title='Laporan' />
      <div ref={componentRef}>
        <Card className="p-5 shadow-md bg-s">
          <div className="border-b border-gray-200 pb-4">
            <div className='flex justify-center'>
              <img src={logoPuspetindo} alt="Logo Puspetindo" />
            </div>
            <div className="flex items-center justify-between">
              <h6 className="text-gray-700 text-lg font-bold">Laporan</h6>

              <div className="w-48">
                <Select onValueChange={(value) => setSelectedTanggal(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih Tanggal" />
                  </SelectTrigger>
                  <SelectContent>
                    {data_manhours.map((manhours) => (
                      <SelectItem key={manhours.id} value={manhours.tanggal}>
                        {manhours.tanggal}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className='flex justify-between'>
              <div></div>
              <Table className='mt-2 bg-slate-50'>
                <TableHeader className='bg-blue-300'>
                  <TableRow className='border-t'>
                    <TableHead className="w-[100px]">No</TableHead>
                    <TableHead>Karyawan</TableHead>
                    <TableHead>Proyek</TableHead>
                    <TableHead>No_JE</TableHead>
                    <TableHead className="text-right">Total</TableHead>
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
