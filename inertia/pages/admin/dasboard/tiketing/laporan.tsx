import { Head, usePage } from '@inertiajs/react'
import React from 'react'
import { Card, CardContent, CardTitle } from '~/components/ui/card';
import Admin from '~/layout/admin'

export default function Laporan() {
  const { data_tiketing } = usePage().props
  console.log(data_tiketing);

  // Sort the data by id in ascending order
  const sortedData = data_tiketing.sort((a, b) => a.id - b.id)

  return (
    <Admin>
      <Head><title>Laporan Tiketing</title></Head>
      <Card className='p-5'>
        <p className='font-semibold text-md'>Laporan Tiketing</p>
        <div className="grid grid-cols-3 gap-3">
          {sortedData.map((data) => (
            <Card key={data.id} className='rounded-sm my-1'>
              <CardContent className='mt-6'>
                <CardTitle>{data.id}</CardTitle>
                <p>{data.problem}</p>
                <p>{data.keterangan}</p>
                <p>{new Intl.DateTimeFormat('id-ID', { dateStyle: 'long' }).format(new Date(data.tanggal))}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Card>
    </Admin>
  )
}
