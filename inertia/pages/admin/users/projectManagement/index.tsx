import { Head, Link, usePage } from '@inertiajs/react'
import React from 'react'
import Admin from '~/layout/admin'
import DataTable from '~/components/dataTable/dataTable'
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

        <Card className='mt-3 rounded-sm'>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader className="bg-slate-100">
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </Admin>
  )
}
