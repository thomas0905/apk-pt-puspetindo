import { Head, usePage } from '@inertiajs/react'
import React, { useState, useEffect } from 'react'
import { Card } from '~/components/ui/card'
import Admin from '~/layout/admin'
import Create from './create'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '~/components/ui/table'

export default function Index() {
  const { data_karyawan } = usePage().props
  console.log(data_karyawan)

  const problems = [
    'Jaringan Wi-Fi lambat, mungkin ada kendala di router.',
    'Website mengalami downtime, kemungkinan ada masalah dengan server.',
    'Tidak bisa login ke sistem, sepertinya ada masalah dengan kredensial pengguna.',
    'Printer tidak terdeteksi, mungkin masalah pada koneksi atau driver.',
    'Email tidak terkirim, periksa pengaturan SMTP atau koneksi internet.',
    'Komputer sering mengalami crash, mungkin ada masalah pada perangkat keras.',
    'Software yang digunakan error, coba perbarui ke versi terbaru.',
    'File yang dicari hilang, mungkin ada di recycle bin atau backup terakhir.',
  ]

  const getRandomProblem = () => {
    const randomIndex = Math.floor(Math.random() * problems.length)
    return problems[randomIndex]
  }

  const [randomProblem, setRandomProblem] = useState('')

  useEffect(() => {
    setRandomProblem(getRandomProblem())
  }, [])

  return (
    <Admin>
      <Head>
        <title>tiketing</title>
      </Head>
      <Card className="p-5 animate__animated animate__fadeIn shadow-md">
        <div>
          <div className='mt-5'>
            <h1 className='text-2xl font-bold'>Ada Problem apa hari ini ?
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              </span>
            </h1>
          </div>


          <div>
            <p className='mt-5'>Coba Tulis laporan di bawah ini </p>
            <Create />
          </div>

          <div className='mt-5'>
            <p className='font-semibold'>Histori laporan</p>
            <Card className="mt-3">
              <Table className="container">
                <TableHeader className="bg-slate-50">
                  <TableRow>
                    <TableHead className="w-[100px]">No</TableHead>
                    <TableHead>Problem</TableHead>
                    <TableHead>Tanggal</TableHead>
                    <TableHead>Keterangan</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>

                </TableBody>
              </Table>
            </Card>
          </div>
        </div>
      </Card>
    </Admin>
  )
}
