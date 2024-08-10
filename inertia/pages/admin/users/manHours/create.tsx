import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { IconHome } from '@tabler/icons-react';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Button } from '~/components/ui/button';
import { Card } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import Admin from '~/layout/admin';

export default function Create() {
  const { data_karyawan, data_proyek } = usePage().props;

  const { data, setData, post, processing } = useForm({
    karyawan_id: '',
    proyek_id: '',
    tanggal: '',
    jam_kerja: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/manhours/create');
  };

  return (
    <Admin>
      <Head title='Man Hours' />
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
                  <p className="text-sm">Man Hours</p>
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
              <Select onValueChange={(value) => setData('karyawanId', value)}>
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
                  <SelectTrigger className="w-full">
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
                  type="number"
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
  );
}
