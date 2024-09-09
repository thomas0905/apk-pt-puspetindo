import { Head, useForm, usePage } from '@inertiajs/react'
import React, { FormEventHandler } from 'react'
import Admin from '~/layout/admin'
import { Button } from '~/components/ui/button';
import { Card } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import Swal from 'sweetalert2';

export default function Edit() {
  const { man_hours } = usePage().props;
  console.log(man_hours);

  const { data, setData, put, processing } = useForm({
    karyawanId: man_hours.karyawanId,
    proyek_id: man_hours.proyek_id,
    tanggal: man_hours.tanggal,
    jam_kerja: man_hours.jam_kerja
  });

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    await put(`/manhours/edit/${man_hours.id}`, {
      onSuccess: () => {
        Swal.fire({
          title: 'Data Berhasil Diupdate!',
          icon: 'success',
          confirmButtonText: 'Okee',
        });
      }
    });
  };

  return (
    <Admin>
      <Head title="manhours" />
      <h1 className="text-xl font-bold">Edit Man Hours</h1>
      <Card className="p-5 shadow-md">
        <form className='mt-5' onSubmit={handleSubmit}>
          <div className='my-5'>
            <div className="flex flex-col space-y-1.5">
              <Label>Pilih Karyawan:</Label>
              <Select
                onValueChange={(value) => setData('karyawanId', value)}
                // defaultValue={data.karyawan_id.toString()}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih Karyawan" />
                </SelectTrigger>
                <SelectContent>
                  {/* {data_karyawan.map((karyawan) => (
                    <SelectItem key={karyawan.id} value={karyawan.id.toString()}>
                      {karyawan.nama}
                    </SelectItem>
                  ))} */}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
              <div className="flex flex-col space-y-1.5">
                <Label>Pilih Proyek:</Label>
                <Select
                  onValueChange={(value) => setData('proyek_id', value)}
                  defaultValue={data.proyek_id.toString()}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih Proyek" />
                  </SelectTrigger>
                  <SelectContent>
                    {data_proyek.map((proyek) => (
                      <SelectItem key={proyek.id} value={proyek.id.toString()}>
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
