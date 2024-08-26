import { Head, router, usePage } from '@inertiajs/react'
import { IconPlus, IconMinus, IconPrinter } from '@tabler/icons-react'
import React, { useRef, useState } from 'react'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import Admin from '~/layout/admin'
import logoPuspetindo from '../../../img/logo-puspetindo.png'
import ReactToPrint from 'react-to-print'
import Swal from 'sweetalert2'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from '~/components/ui/input'

export default function Laporan() {
  const { data_manhours } = usePage().props
  console.log(data_manhours);

  const componentRef = useRef(null)

  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [filteredData, setFilteredData] = useState(data_manhours)
  const [expandedRows, setExpandedRows] = useState([]) // Track expanded rows

  const handlePrint = () => {
    Swal.fire({
      title: 'Data Berhasil Di Tambah!',
      icon: 'success',
      confirmButtonText: 'Okee',
    })
  }

  const formatDate = (date) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' }
    return new Date(date).toLocaleDateString('id-ID', options)
  }

  const handleFilter = () => {
    const filterQuery = router.get('/management/laporan', {
      start_date: startDate,
      end_date: endDate
    })

    console.log(filterQuery);

  }

  const toggleRow = (rowId) => {
    setExpandedRows(prev =>
      prev.includes(rowId) ? prev.filter(id => id !== rowId) : [...prev, rowId]
    )
  }

  return (
    <Admin>
      <Head title='Laporan' />
      <div ref={componentRef}>
        <Card className="p-5 shadow-md bg-s">
          <div className="border-b border-gray-200 pb-4">
            <div className='flex justify-center'>
              <img src={logoPuspetindo} alt="Logo Puspetindo" />
            </div>
            <div className="flex items-center mt-2">
              <h6 className="text-gray-700 text-md font-semibold">Laporan</h6>
              <div className="flex items-center mx-1 space-x-2">
                <Input
                  size={'sm'}
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="border rounded-sm p-0.5 text-sm"
                />
                <span className="text-xs">sampai</span>
                <Input
                  size={'sm'}
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="border rounded-sm p-0.5 text-sm"
                />
              </div>
              <Button className='bg-blue-600 text-white hover:bg-blue-500 text-xs py-1.5 rounded-sm px-3' onClick={handleFilter}>Pilih</Button>
            </div>
            <Table className='mt-2 bg-slate-50'>
              <TableHeader className='bg-blue-300'>
                <TableRow className='border-t'>
                  <TableHead className="w-[50px]">No</TableHead>
                  <TableHead>Karyawan</TableHead>
                  <TableHead>Tanggal</TableHead>
                  <TableHead>No_JE</TableHead>
                  <TableHead>Proyek</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Detail</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.length > 0 ? (
                  filteredData.map((manhours, index) => (
                    <React.Fragment key={manhours.id}>
                      <TableRow>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{manhours.karyawan?.nama}</TableCell>
                        <TableCell>{formatDate(manhours.tanggal)}</TableCell>
                        <TableCell>{manhours.proyek?.kodeJobOrder}</TableCell>
                        <TableCell>{manhours.proyek?.namaProyek}</TableCell>
                        <TableCell>{manhours.jamKerja}</TableCell>
                        <TableCell>
                          <Button
                            className="flex items-center bg-transparent hover:bg-transparent"
                            onClick={() => toggleRow(manhours.id)}
                          >
                            {expandedRows.includes(manhours.id) ? <IconMinus className='bg-blue-500 rounded-sm' size={20} /> : <IconPlus className='bg-blue-500 rounded-sm' size={20} />}
                          </Button>
                        </TableCell>
                      </TableRow>
                      {/* Detail Row */}
                      {expandedRows.includes(manhours.id) && (
                        <TableRow>
                          <TableCell colSpan={6}>
                            <div className="p-4 bg-gray-100 border-t">
                              <Table className="bg-white">
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>No</TableHead>
                                    <TableHead>Karyawan</TableHead>
                                    <TableHead>Tanggal</TableHead>
                                    <TableHead>No JE</TableHead>
                                    <TableHead>Jam Kerja</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  <TableRow>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{manhours.karyawan?.nama}</TableCell>
                                    <TableCell>{formatDate(manhours.tanggal)}</TableCell>
                                    <TableCell>{manhours.proyek?.kodeJobOrder}</TableCell>
                                    <TableCell>{manhours.jamKerja}</TableCell>
                                  </TableRow>
                                  {/* You can add more detail rows here */}
                                </TableBody>
                              </Table>
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </React.Fragment>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan="6" className="text-center">Data tidak ditemukan</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className='mt-2 flex justify-end'>
            <ReactToPrint
              trigger={() => (
                <Button onClick={handlePrint} className='bg-blue-500 flex gap-1 hover:bg-blue-400'>
                  <IconPrinter /> Print
                </Button>
              )}
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
