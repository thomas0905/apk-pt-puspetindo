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
import { FormEventHandler } from 'react'
import Swal from 'sweetalert2'

export default function Create() {


    const statuses = [
        {
            value: "Selesai",
            label: "Selesai",
        },
        {
            value: "Tidak-Selesai",
            label: "Tidak-Selesai",
        }
    ]

    const { data, setData, post } = useForm({
        namaProyek: '',
        kodeJobOrder: '',
        status: '',
        pemilik: ''
    })

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault()
        post('/proyek/create', {
            onSuccess: () => {
                Swal.fire({
                    title: 'Data Berhasil Di Tambah!',
                    icon: 'success',
                    confirmButtonText: 'Okee',
                });
            }
        })

    }

    return (
        <Admin>
            <Head title='add-proyek' />

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
                                    <p className="text-sm">proyek</p>
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
                            <Label htmlFor="nama"> Nama Proyek:</Label>
                            <Input
                                id="nama"
                                placeholder="Masukkan Nama"
                                name='namaProyek'
                                value={data.namaProyek}
                                onChange={(e) => setData('namaProyek', e.target.value)}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="kodeJobOrder">Kode Job Order:</Label>
                                <Input
                                    id="kodeJobOrder"
                                    placeholder="Masukkan Kode"
                                    name='kodeJobOrder'
                                    value={data.kodeJobOrder}
                                    onChange={(e) => setData('kodeJobOrder', e.target.value)}
                                />
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
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="kodeJobOrder">Pemilik:</Label>
                                <Input
                                    id="kodeJobOrder"
                                    placeholder="Masukkan Pemilik"
                                    name='kodeJobOrder'
                                    value={data.pemilik}
                                    onChange={(e) => setData('pemilik', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <Button className='bg-blue-600 hover:bg-blue-500' type="submit">Simpan</Button>
                </form>
            </Card>
        </Admin>
    )
}
