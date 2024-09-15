import { useForm } from '@inertiajs/react'
import React, { FormEventHandler, useState } from 'react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import toast, { Toaster } from 'react-hot-toast';

export default function CreateJudul() {
  const { data, setData, post, processing } = useForm({
    judul: ''
  })
  console.log(data);
  const [errors, setErrors] = useState({});
  

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()

    const validationErrors: any = {};
    let isValid = true;

    if (data.judul.trim() === '') {
        validationErrors.judul = 'Nama departemen harus diisi';
        isValid = false;
    }

    setErrors(validationErrors);

if(isValid){
  post('/judul/create',{
    onSuccess: () => {
      toast.success('Proyek berhasil di simpan')
  },
  onError: (errorMessages) => {
      setErrors(errorMessages);
  }
  })
}
   
  }
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleSubmit} className="">
        <div>
          <Label>Judul</Label>
          <Input
            type="text"
            placeholder="Masukkan Judul"
            name='judul'
            value={data.judul}
            onChange={(e) => setData('judul', e.target.value)}
            className='focus-visible:ring-0 focus:border-blue-600' />
            {errors.judul && <small className="text-red-500">{errors.judul}</small>}
        </div>

        <div className="mt-2">
          <Button type='submit' className="bg-blue-600 hover:bg-blue-500" disabled={processing}>Simpan</Button>
        </div>
      </form>
    </div>
  )
}
