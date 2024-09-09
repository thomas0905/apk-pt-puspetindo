import { Head, useForm, usePage } from '@inertiajs/react';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';

export default function Create({data_proyek,onSuccess}) {
  const {  data_proyek,data_karyawan } = usePage().props;
  console.log(data_proyek);


  // const filterNamaProyek = [...new Set(data_manhours.map(proyek => proyek.namaProyek))];

  const { data, setData, post, processing } = useForm({
    karyawan_id: '',
    proyek_id: '',
    tanggal: '',
    jam_kerja: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!data.karyawan_id.trim()) {
      newErrors.karyawan_id = 'Karyawan harus dipilih';
    }
    if (!data.proyek_id.trim()) {
      newErrors.proyek_id = 'Proyek harus dipilih';
    }
    if (!data.tanggal.trim()) {
      newErrors.tanggal = 'Tanggal harus diisi';
    }
    if (!data.jam_kerja.trim()) {
      newErrors.jam_kerja = 'Jam Kerja harus diisi';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    if (!validate()) {
      return;
    }

    post('/manhours/create', {
      onSuccess: () => {
        Swal.fire({
          title: 'Data Berhasil Ditambah!',
          icon: 'success',
          confirmButtonText: 'Oke',
        });
      }
    });
  };

  return (
    <>
      <Head title='Manhours' />
      <form className='mt-5' onSubmit={handleSubmit}>
        <div>
          <div className="flex flex-col space-y-1.5 ">
            <Label>Pilih Karyawan:</Label>
            <Select
              onValueChange={(value) => setData('karyawan_id', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih karyawan" />
              </SelectTrigger>
              <SelectContent>
                {data_karyawan.map((kar) => (
                  <SelectItem key={kar.id} value={kar.id.toString()}>
                    {kar.nama}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.karyawan_id && <small className="text-red-600">{errors.karyawan_id}</small>}
          </div>

          <div className="flex flex-col space-y-1.5 mt-2">
            <Label>Pilih Proyek:</Label>
            <Select
              onValueChange={(value) => setData('proyek_id', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih Proyek" />
              </SelectTrigger>
              <SelectContent>
                {data_proyek.map((data) => (
                  <SelectItem key={data.id} value={data.id.toString()}>
                    {data.namaProyek}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.proyek_id && <small className="text-red-600">{errors.proyek_id}</small>}
          </div>

          <div className="flex flex-col space-y-1.5 mt-2">
            <Label>Tanggal:</Label>
            <Input
              type="date"
              name='tanggal'
              value={data.tanggal}
              onChange={(e) => setData('tanggal', e.target.value)}
              className="w-full"
            />
            {errors.tanggal && <small className="text-red-600">{errors.tanggal}</small>}
          </div>

          <div className="flex flex-col space-y-1.5 mt-2">
            <Label>Jam Kerja:</Label>
            <Input
              type="text"
              placeholder="Jam Kerja"
              name='jam_kerja'
              value={data.jam_kerja}
              onChange={(e) => setData('jam_kerja', e.target.value)}
              className="w-full"
            />
            {errors.jam_kerja && <small className="text-red-600">{errors.jam_kerja}</small>}
          </div>

          <Button className='bg-blue-600 mt-2 hover:bg-blue-500' type="submit" disabled={processing}>
            Simpan
          </Button>
        </div>
      </form>
    </>
  );
}
