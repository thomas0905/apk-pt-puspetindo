import { Head, Link, usePage } from '@inertiajs/react'
import React from 'react'
import Admin from '~/layout/admin'

import { createColumnHelper } from '@tanstack/react-table'
import Proyek from '#models/proyek'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card } from '~/components/ui/card'
import { Label } from '~/components/ui/label'
import { Input } from '~/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'
import { Button } from '~/components/ui/button'
export default function Index() {
  const { data_proyek } = usePage<{ data_proyek: Proyek[] }>().props
  console.log(data_proyek)



  const columnHelper = createColumnHelper<Proyek>();
  const columns = [
    columnHelper.accessor('id', {
      header: () => 'No',
      cell: info => info.row.index + 1,
      footer: info => info.column.id,
    }),
    columnHelper.accessor('namaProyek', {
      header: () => 'Nama Proyek',
      cell: info => info.renderValue(),
      footer: info => info.column.id,
    }),
    columnHelper.accessor('kodeJobOrder', {
      header: () => 'Kode Job Order',
      cell: info => info.renderValue(),
      footer: info => info.column.id,
    }),
    columnHelper.display({
      id: 'aksi',
      header: () => 'Aksi',
      cell: info => (
        <div className="flex gap-3">

        </div>
      ),
      footer: info => info.column.id,
    }),
  ];
  return (
    <Admin>
      <Head>
        <title>Project Management</title>
      </Head>
      <div>
        <h6 className='text-gray-600 text-center text-3xl font-bold'>Project Management (PM)</h6>

        <div className='mt-3'>
        <div className="flex items-center mt-2 gap-2">
              <h6 className="text-gray-700 text-md font-semibold">Tanggal</h6>
              <div className="flex items-center mx-1 space-x-2">
                <Input
                  type="date"
                  // value={startDate}
                  // onChange={(e) => setStartDate(e.target.value)}
                  className="border rounded-sm p-0.5 text-sm"
                />
                <span className="text-xs">sampai</span>
                <Input
                  type="date"
                  // value={endDate}
                  // onChange={(e) => setEndDate(e.target.value)}
                  className="border rounded-sm p-0.5 text-sm"
                />
              </div>
              <div className="w-[450px]">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih Proyek-JE" />
                  </SelectTrigger>
                  <SelectContent>
                    {data_proyek.map((data,index) => (
                      <SelectItem key={index} value={data.id}>
                        {data.namaProyek} - {data.kodeJobOrder}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button className='bg-blue-600 text-white hover:bg-blue-500 text-xs py-1.5 rounded-sm px-3'>Pilih</Button>
            </div>

          <Card className='mt-3 rounded-sm'>
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader className="bg-slate-100">
                <TableRow>
                  <TableHead className="w-[100px]">No</TableHead>
                  <TableHead>Nama</TableHead>
                  <TableHead>No JE</TableHead>
                  <TableHead>Tanggal</TableHead>
                  <TableHead className="text-right">Verifikasi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>
    </Admin>
  )
}
