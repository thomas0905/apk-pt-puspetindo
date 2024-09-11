import { useForm } from '@inertiajs/react'
import React, { FormEventHandler } from 'react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

export default function CreateJudul() {
  const { data, setData, post, processing } = useForm({
    judul: ''
  })
  console.log(data);
  

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    post('/ppwi/create')
  }
  return (
    <div>
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
        </div>

        <div className="mt-2">
          <Button type='submit' className="bg-blue-600 hover:bg-blue-500" disabled={processing}>Simpan</Button>
        </div>
      </form>
    </div>
  )
}
