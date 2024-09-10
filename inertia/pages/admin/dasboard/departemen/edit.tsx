import { Link, useForm, usePage } from '@inertiajs/react'
import { IconHome } from '@tabler/icons-react'
import React, { FormEventHandler, Fragment } from 'react'
import { ToastContainer } from 'react-toastify'
import Swal from 'sweetalert2'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import Admin from '~/layout/admin'

export default function Edit({ departemen }) {
  const { data, setData, put, processing } = useForm({
    namaDepartemen: departemen.namaDepartemen
  })

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    put('/departemen/edit/' + departemen.id, {
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
    <Fragment>

      <form className='mt-5' onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="namaDepartemen">Nama Departemen:</Label>
          <Input
            id="namaDepartemen"
            placeholder="Masukkan Nama Departemen"
            onChange={(e) => setData('namaDepartemen', e.target.value)}
            name='namaDepartemen'
            value={data.namaDepartemen}
            className='focus-visible:ring-0 focus:border-blue-600' 
          />
          {/* {errors.namaDepartemen && <small className="text-red-600">{errors.namaDepartemen}</small>} */}
        </div>
        <Button className='bg-blue-600 hover:bg-blue-500 mt-2' type="submit" disabled={processing}>Update</Button>
      </form>
    </Fragment>
  )
}
