import { useForm, usePage } from '@inertiajs/react';
import { SelectItem } from '@radix-ui/react-select';
import { IconFileTypeDoc, IconPdf } from '@tabler/icons-react';
import React, { FormEventHandler, Fragment, useState } from 'react';
import { toast } from 'react-toastify';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Select, SelectContent, SelectTrigger, SelectValue } from '~/components/ui/select';
import { Textarea } from '~/components/ui/textarea';

export default function Create() {
  const {data_judul} = usePage().props
  console.log(data_judul);

const {data,setData,post,processing} = useForm({
  judul_ppwi: '',
  dokumen: null,
  keterangan: ''
})
console.log(data);

const handleSubmit: FormEventHandler = (e) => {
  e.preventDefault();
  post('/ppwi/create', {
    onSuccess: () => {
      toast.success('Data Berhasil Ditambahkan!');
    },
  })
}

  return (
    <Fragment>
      <form action="" onClick={handleSubmit}>
      <div className="">
        <div  className="flex flex-col space-y-1.5">
          <Label>Judul</Label>
          <Select value={data.judul_ppwi} onValueChange={(value) => setData('judul_ppwi', value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih judul" />
            </SelectTrigger>
            <SelectContent>
                  {data_judul.map((data) => (
                    <SelectItem key={data.id} value={data.id.toString()}>
                      {data.judul}
                    </SelectItem>
                  ))}
                </SelectContent>
          </Select>
        </div>

        <div className="mt-2">
          <Label>Pilih File</Label>
          <Input
            type="file"
            id="file-upload"
            accept=".doc,.docx,.pdf"
            name="file"
            className="border rounded-lg p-2 cursor-pointer hover:bg-slate-50"
            onChange={(e) => setData('dokumen', e.target.files?.[0] || null)}
          />
        </div>

        <div className="mt-2">
          <Label>Keterangan</Label>
          <Textarea
            id="message"
            placeholder="Type your description here..."
            className="min-h-20 resize-none border-2 p-3 shadow-none focus-visible:ring-0 focus:border-blue-600"
            name='keterangan'
            value={data.keterangan}
            onChange={(e) => setData('keterangan', e.target.value)}
          
          />
        </div>

        <div className="mt-2">
          <Button className="bg-blue-600 hover:bg-blue-500">Simpan</Button>
        </div>
      </div>
      </form>
    </Fragment>
  );
}

