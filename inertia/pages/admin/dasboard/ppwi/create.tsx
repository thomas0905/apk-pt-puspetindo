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
        <div>
          <Label>Judul</Label>
          <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih judul" />
                </SelectTrigger>
                <SelectContent>
                  {/* {data_karyawan.map((data) => (
                    <SelectItem key={data.id} value={data.id.toString()}>
                      {data.nama}
                    </SelectItem>
                  ))} */}

                  {data_judul.map((data) => (
                    <SelectItem key={data.id} value={data.id}>
{data.judul}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
        </div>

        {/* <div className="flex items-center justify-center w-full mt-3">
          <label
            htmlFor="dropzone-file"
            className={`flex flex-col items-center justify-center w-full ${image ? 'max-h-56' : 'h-56'} border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}
          >
            <div className="flex flex-col items-center justify-center">
              {image ? (
                // Jika ada gambar, tampilkan preview dan sesuaikan border dengan ukuran gambar
                <img src={image} alt="Preview" className="w-full h-auto max-h-64 rounded-lg" />
              ) : (
                <>
                  <svg
                    className="w-8 max-h-56 mb- text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
             
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                  DOC,PDF
                  </p>
                </>
              )}
            </div>
            <input id="dropzone-file" type="file" className="hidden" onChange={handleImage} />
          </label>
        </div> */}

        <div className='mt-2'>
          <Label>Pilih File</Label>
          <Input
            type="file"
            id="file-upload"
            accept=".doc,.docx,.pdf"
            name="file"
            // value={data.dokumen}
            // onChange={(e) => setData('dokumen', e.target.files?.[0] || null)}
            className="border rounded-lg p-2 cursor-pointer hover:bg-slate-50"
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
