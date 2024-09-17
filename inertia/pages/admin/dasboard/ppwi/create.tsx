import React, { useState, FormEventHandler } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { toast } from 'react-toastify';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from '~/components/ui/select';
import { Textarea } from '~/components/ui/textarea';

export default function CreatePpwi() {
  const { data_judul } = usePage().props; // Data judul dari backend
  const [fileName, setFileName] = useState<string | null>(null); // State untuk menyimpan nama file yang dipilih

  // Inisialisasi form menggunakan Inertia.js
  const { data, setData, post, processing } = useForm({
    judulPpwi: '',
    dokumen: null as File | null, // File upload disimpan di sini
    keterangan: '',
  });

  console.log(data);

  // Fungsi untuk menangani submit form
  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    post('/ppwi/create', {
      onSuccess: () => {
        toast.success('Data Berhasil Ditambahkan!'); // Menampilkan notifikasi berhasil
      },
      onError: () => {
        toast.error('Terjadi Kesalahan, Coba Lagi!'); // Notifikasi error
      },
    });
  };

  // Fungsi untuk menangani perubahan file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setData('dokumen', file);
    setFileName(file ? file.name : null);
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="space-y-4">
        {/* Select untuk memilih judul */}
        <div className="flex flex-col space-y-1.5">
          <Label>Pilih Judul:</Label>
          <Select onValueChange={(value) => setData('judulPpwi', value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih Judul" />
            </SelectTrigger>
            <SelectContent>
              {data_judul.map((data: any) => (
                <SelectItem key={data.id} value={data.id.toString()}>
                  {data.judul}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Input untuk mengunggah file */}
        <div>
          <Label>Unggah Dokumen (PDF/DOC/DOCX)</Label>
          <Input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="border rounded-lg p-2 cursor-pointer hover:bg-slate-50"
          />
          {fileName && <p className="mt-1 text-sm text-gray-600">File: {fileName}</p>}
        </div>

        {/* Input untuk keterangan */}
        <div>
          <Label>Keterangan</Label>
          <Textarea
            placeholder="Masukkan keterangan di sini"
            value={data.keterangan}
            onChange={(e) => setData('keterangan', e.target.value)}
            className="min-h-20 resize-none border-2 p-3 shadow-none focus-visible:ring-0 focus:border-blue-600"
          />
        </div>

        {/* Button untuk submit */}
        <Button type="submit" className="bg-blue-600 hover:bg-blue-500" disabled={processing}>
          Simpan
        </Button>
      </div>
    </form>
  );
}
