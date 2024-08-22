import { Head, Link, useForm, usePage } from '@inertiajs/react'
import React, { FormEventHandler } from 'react'
import Admin from '~/layout/admin'
import { Button } from '~/components/ui/button';
import { Card } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { IconHome } from '@tabler/icons-react';
import Swal from 'sweetalert2';

export default function Edit() {
  const { man_hours } = usePage().props
  console.log(man_hours);

  const { data, setData, put, processing } = useForm({
    karyawan_id: man_hours.karyawan_id,
    proyek_id: man_hours.proyek_id,
    tanggal: man_hours.tanggal,
    jam_kerja: man_hours.jam_kerja
  });

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault()
    await put('/manhours/edit/' + man_hours.id, {
      onSuccess: () => {
        Swal.fire({
          title: 'Data Berhasil Diupdate!',
          icon: 'success',
          confirmButtonText: 'Okee',
        });
      }
    })

  }

  return (
    <Admin>
      <Head title="manhours" />
      Halaman Man Hours Edit
      <Card className="p-5  shadow-md">
        <div className="border-b border-gray-200 pb-4">
          <div className='flex justify-between'>
            <div>
              <div className='flex gap-1'>
                <Link href="/">
                  <p className='text-sm flex gap-1'><IconHome size={18} />Home</p>
                </Link>
                <span>-</span>
                <Link href='/proyek'>
                  <p className="text-sm">Man Hours</p>
                </Link>
              </div>
              <h6 className='text-gray-600 text-lg font-bold'>Man Hours</h6>
            </div>
          </div>
        </div>

        <form className='mt-5' onSubmit={handleSubmit}>
          {/* <ToastContainer /> */}
          <div className='my-5'>
            <div className="flex flex-col space-y-1.5">
              <Label>Pilih Karyawan:</Label>
              <Select
                onValueChange={(value) => setData('karyawan_id', value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih karyawan" />
                </SelectTrigger>
                <SelectContent>
                  {man_hours.map((man) => (
                    <SelectItem key={man.id} value={man.id.toString()}> {/* Ubah value menjadi id departemen */}
                      {man.karyawan_id}karyawan_id
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {/* {errors.departemen_Id && <small className="text-red-600">{errors.departemen_Id}</small>} */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
              <div className="flex flex-col space-y-1.5">
                <Label>Pilih Proyek:</Label>
                <Select
                  onValueChange={(value) => setData('proyek_id', value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih Proyek" />
                  </SelectTrigger>
                  <SelectContent>
                    {data_proyek.map((pro) => (
                      <SelectItem key={pro.id} value={pro.id.toString()}> {/* Ubah value menjadi id departemen */}
                        {pro.namaProyek}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {/* {errors.departemen_Id && <small className="text-red-600">{errors.departemen_Id}</small>} */}
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label>Tanggal:</Label>
                <Input
                  type="date"
                  name='tanggal'
                  value={data.tanggal}
                  onChange={(e) => setData('tanggal', e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label>Jam Kerja:</Label>
                <Input
                  type="text"
                  placeholder="Jam Kerja"
                  name='jam_kerja'
                  value={data.jam_kerja}
                  onChange={(e) => setData('jam_kerja', e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <Button className='bg-blue-600 hover:bg-blue-500' type="submit" disabled={processing}>
            Simpan
          </Button>
        </form>
      </Card>
    </Admin>
  )
}
