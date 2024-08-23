import { Head, Link, useForm } from '@inertiajs/react'
import { IconHome } from '@tabler/icons-react'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import Admin from '~/layout/admin'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormEventHandler, useState } from 'react'
import Swal from 'sweetalert2'

export default function Create() {
    const statuses = [
        { value: "Selesai", label: "Selesai" },
        { value: "Tidak-Selesai", label: "Tidak-Selesai" }
    ]

    const { data, setData, post } = useForm({
        namaProyek: '',
        kodeJobOrder: '',
        status: '',
        pemilik: ''
    })

    const [errors, setErrors] = useState({});

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        const validationErrors: any = {};
        let isValid = true;

        if (!data.namaProyek.trim()) {
            validationErrors.namaProyek = 'Nama harus diisi';
            isValid = false;
        }

        if (!data.kodeJobOrder.trim()) {
            validationErrors.kodeJobOrder = 'Kode harus diisi';
            isValid = false;
        }

        if (!data.status) {
            validationErrors.status = 'Status harus dipilih';
            isValid = false;
        }

        if (!data.pemilik.trim()) {
            validationErrors.pemilik = 'Pemilik harus diisi';
            isValid = false;
        }

        
        setErrors(validationErrors);
        if (isValid) {
            post('/proyek/create', {
                onSuccess: () => {
                    Swal.fire({
                        title: 'Data Berhasil Ditambah!',
                        icon: 'success',
                        confirmButtonText: 'Oke',
                    });
                },
                onError: (errorMessages) => {
                    setErrors(errorMessages);
                }
            })
        }
    }

    return (
        <Admin>
            <Head title='Tambah Proyek' />
            <Card className="p-5 shadow-md">
                <div className="border-b border-gray-200 pb-4">
                    <div className='flex justify-between'>
                        <div>
                            <div className='flex gap-1'>
                                <Link href="/">
                                    <p className='text-sm flex gap-1'><IconHome size={18} />Home</p>
                                </Link>
                                <span>-</span>
                                <Link href='/proyek'>
                                    <p className="text-sm">Proyek</p>
                                </Link>
                            </div>
                            <h6 className='text-gray-600 text-lg font-bold'>Tambah Proyek</h6>
                        </div>
                    </div>
                </div>

                <form className='mt-5' onSubmit={handleSubmit}>
                    <ToastContainer />
                    <div className='my-5'>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="namaProyek">Nama Proyek:</Label>
                            <Input
                                id="namaProyek"
                                placeholder="Masukkan Nama"
                                value={data.namaProyek}
                                onChange={(e) => setData('namaProyek', e.target.value)}
                            />
                            {errors.namaProyek && <small className="text-red-600">{errors.namaProyek}</small>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="kodeJobOrder">Kode Job Order:</Label>
                                <Input
                                    id="kodeJobOrder"
                                    placeholder="Masukkan Kode"
                                    value={data.kodeJobOrder}
                                    onChange={(e) => setData('kodeJobOrder', e.target.value)}
                                />
                                {errors.kodeJobOrder && <small className="text-red-600">{errors.kodeJobOrder}</small>}
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="status">Status:</Label>
                                <Select onValueChange={(value) => setData('status', value)}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Pilih Status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {statuses.map((status) => (
                                            <SelectItem key={status.value} value={status.value}>{status.label}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.status && <small className="text-red-600">{errors.status}</small>}
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="pemilik">Pemilik:</Label>
                                <Input
                                    id="pemilik"
                                    placeholder="Masukkan Pemilik"
                                    value={data.pemilik}
                                    onChange={(e) => setData('pemilik', e.target.value)}
                                />
                                {errors.pemilik && <small className="text-red-600">{errors.pemilik}</small>}
                            </div>
                        </div>
                    </div>

                    <Button className='bg-blue-600 hover:bg-blue-500' type="submit">Simpan</Button>
                </form>
            </Card>
        </Admin>
    )
}
