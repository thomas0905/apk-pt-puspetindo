import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { IconHome, IconSearch } from '@tabler/icons-react';
import React, { FormEventHandler } from 'react';
import { ToastContainer } from 'react-toastify';
import { Button } from '~/components/ui/button';
import { Card } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import Admin from '~/layout/admin';

export default function Create() {
  const { data_karyawan, data_proyek } = usePage().props
  console.log(data_proyek);

  const { data, setData, post, processing } = useForm({
    Karyawan_id: '',
    proyek_id: '',
    tanggal: '',
    jam_kerja: ''
  })

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    post('/manhours/create')
    console.log(data);
  }


  return (
    <Admin>
      <Head title='manhours' />
      <Card className="p-5">
        <div className="border-b border-gray-200 pb-4">
          <div className='flex justify-between'>
            <div>
              <div className='flex gap-1'>
                <Link href="/">
                  <p className='text-sm flex gap-1'><IconHome size={18} />Home</p>
                </Link>
                <span>-</span>
                <Link href='/dasboard/proyek/index'>
                  <p className="text-sm">man-hours</p>
                </Link>
              </div>
              <h6 className='text-gray-600 text-lg font-bold'>Man Hours</h6>
            </div>
          </div>
        </div>

        <form className='mt-5' onSubmit={handleSubmit}>
          <ToastContainer />
          <div className='my-5'>
            <div className="flex flex-col space-y-1.5">
              <Label>Pilih Karyawan:</Label>
              <Select onValueChange={(value) => setData('Karyawan_id', value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih Karyawan" />
                </SelectTrigger>
                <SelectContent>
                  {data_karyawan.map((kar) => (
                    <SelectItem key={kar.id} value={kar.id}>
                      {kar.nama}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
              <div className="flex flex-col space-y-1.5">
                <Label>Pilih Proyek:</Label>
                <Select onValueChange={(value) => setData('proyek_id', value)}>
                  <SelectTrigger className="w-full" >
                    <SelectValue placeholder="Pilih Proyek" />
                  </SelectTrigger>
                  <SelectContent>
                    {data_proyek.map((proyek) => (
                      <SelectItem key={proyek.id} value={proyek.id}>
                        {proyek.namaProyek}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label>Status:</Label>
                <Select onValueChange={(value) => setData('tanggal', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {data_karyawan.map((kar) => (
                      <SelectItem key={kar.id} value={kar.id}>
                        {kar.status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label>Pemilik:</Label>
                <Select onValueChange={(value) => setData('proyek_id', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih Pemilik" />
                  </SelectTrigger>
                  {/* Map pemilik di sini */}
                  <SelectContent>
                    {data_karyawan.map((kar) => (
                      <SelectItem key={kar.id} value={kar.id}>
                        {kar.nama}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Button className='bg-blue-600 hover:bg-blue-500' type="submit">Simpan</Button>
        </form>
      </Card>
    </Admin>
  );
}

