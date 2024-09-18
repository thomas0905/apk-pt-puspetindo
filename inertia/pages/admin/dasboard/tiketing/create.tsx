import { useForm } from '@inertiajs/react'
import React, { FormEventHandler } from 'react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Textarea } from '~/components/ui/textarea'
import Swal from 'sweetalert2'

export default function Create() {

    const { data, setData, post, processing, reset } = useForm({
        problem: '',
        keterangan: '',
        tanggal: ''
    })

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/tiketing/create', {
            onSuccess: () => {
                Swal.fire({
                    title: 'Data Berhasil Ditambahkan!',
                    icon: 'success',
                    confirmButtonText: 'Oke',
                }).then(() => {
                    window.location.href = '/tiketing';
                });
            }
        });
    }

    return (
        <div>
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
                    </div>

                    {/* Input for Tanggal */}
                    <div className="flex flex-col space-y-1.5 mt-3">
                        <Label>Tanggal:</Label>
                        <Input
                            type='date'
                            name='tanggal'
                            value={data.tanggal}
                            onChange={(e) => setData('tanggal', e.target.value)}
                            className="resize-none border p-3 shadow-none focus-visible:ring-0 focus:border-blue-600"
                        />
                    </div>
                </div>

                {/* Textarea for Keterangan */}
                <div className='mt-2'>
                    <Label>Laporan Keterangan:</Label>
                    <Textarea
                        placeholder="Masukkan keterangan di sini"
                        value={data.keterangan}
                        onChange={(e) => setData('keterangan', e.target.value)}
                        className="min-h-20 resize-none border-2 p-3 shadow-none focus-visible:ring-0 focus:border-blue-600"
                    />
                </div>

                {/* Submit Button */}
                <Button 
                    type="submit" 
                    className='mt-4 bg-blue-600 hover:bg-blue-500' 
                    disabled={processing}
                >
                    {processing ? 'Submitting...' : 'Submit'}
                </Button>
            </form>
        </div>
    )
}
