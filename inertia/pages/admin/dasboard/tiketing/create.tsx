import { useForm } from '@inertiajs/react'
import React, { FormEventHandler, useState, useEffect } from 'react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Textarea } from '~/components/ui/textarea'
import toast, { Toaster } from 'react-hot-toast';
import Admin from '~/layout/admin'
import { Card } from '~/components/ui/card'
import { IconLoader } from '@tabler/icons-react'

export default function Create() {
    const { data, setData, post, processing } = useForm({
        problem: '',
        keterangan: '',
        tanggal: ''
    });

    // State untuk validasi error
    const [errors, setErrors] = useState({
        problem: '',
        keterangan: '',
    });

    // State untuk animasi loading
    const [isLoading, setIsLoading] = useState(false);

    // Fungsi untuk mendapatkan tanggal dan jam saat ini dalam format YYYY-MM-DDTHH:MM
    const getCurrentDateTime = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    // Set tanggal otomatis saat komponen dimuat pertama kali
    useEffect(() => {
        setData('tanggal', getCurrentDateTime());
    }, []);

    // Validasi input
    const validate = () => {
        let valid = true;
        let newErrors = { problem: '', keterangan: '', tanggal: '' };

        if (!data.problem) {
            newErrors.problem = 'Problem harus diisi';
            valid = false;
        }
        if (!data.keterangan) {
            newErrors.keterangan = 'Keterangan harus diisi';
            valid = false;
        }
        if (!data.tanggal) {
            newErrors.tanggal = 'Tanggal harus diisi';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    }

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        if (validate()) {
            setIsLoading(true);  // Mulai animasi loading
            setTimeout(() => {
                post('/tiketing/create', {
                    onSuccess: () => {
                        toast.success('Laporan berhasil Dikirim');
                        setIsLoading(false);  // Stop animasi loading setelah selesai
                    },
                    onError: () => {
                        setIsLoading(false);  // Stop animasi jika terjadi error
                    }
                });
            }, 2000);  // Menunggu 5 detik sebelum mengirim
        }
    }

    return (
        <div>
            <Toaster position="top-center" reverseOrder={false} />
            
            {/* Tampilkan animasi loading saat isLoading bernilai true */}
            {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50">
          <div className="flex flex-col items-center">
            <IconLoader className="h-12 w-12 animate-spin text-white" />
            <p className="text-white mt-2">Laporan Dikirim...</p>
          </div>
        </div>
      )}
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-2">
                    {/* Input for Problem */}
                    <div className="flex flex-col space-y-1.5 mt-3">
                        <Label>Problem:</Label>
                        <Input
                            type='text'
                            placeholder='Masukkan Problem'
                            name='problem'
                            value={data.problem}
                            onChange={(e) => setData('problem', e.target.value)}
                            className="resize-none border p-3 shadow-none focus-visible:ring-0 focus:border-blue-600"
                        />
                        {errors.problem && <span className="text-red-600 text-sm">{errors.problem}</span>}
                    </div>

                    {/* Input for Tanggal */}
                    <div className="flex flex-col space-y-1.5 mt-3">
                        <Label>Tanggal:</Label>
                        <Input
                            type='datetime-local'
                            name='tanggal'
                            value={data.tanggal}
                            onChange={(e) => setData('tanggal', e.target.value)}
                            className="resize-none border p-3 shadow-none focus-visible:ring-0 focus:border-blue-600"
                        />
                        {errors.tanggal && <span className="text-red-600 text-sm">{errors.tanggal}</span>}
                    </div>
                </div>

                {/* Textarea for Keterangan */}
                <div className='mt-2'>
                    <Label> Keterangan:</Label>
                    <Textarea
                        placeholder="Masukkan keterangan di sini"
                        value={data.keterangan}
                        onChange={(e) => setData('keterangan', e.target.value)}
                        className="min-h-20 resize-none border-2 p-3 shadow-none focus-visible:ring-0 focus:border-blue-600"
                    />
                    {errors.keterangan && <span className="text-red-600 text-sm">{errors.keterangan}</span>}
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    className='mt-2 bg-blue-600 hover:bg-blue-500'
                    disabled={processing || isLoading}
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}
