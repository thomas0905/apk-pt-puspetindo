import React from 'react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

export default function CreateJudul() {
  return (
    <div>
          <div className="">
        <div>
          <Label>Judul</Label>
          <Input
            type="text"
            placeholder="Masukkan Judul"
            className='focus-visible:ring-0 focus:border-blue-600' />
        </div>

        <div className="mt-2">
          <Button className="bg-blue-600 hover:bg-blue-500">Simpan</Button>
        </div>
      </div>
    </div>
  )
}
