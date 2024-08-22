import { Head, Link, useForm, usePage } from '@inertiajs/react'
import { IconHome } from '@tabler/icons-react'
import React, { FormEventHandler } from 'react'
import Swal from 'sweetalert2'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'
import Admin from '~/layout/admin'

export default function Edit() {
    const { proyek } = usePage().props
    const { data, setData, put } = useForm({
        namaProyek: proyek.namaProyek,
        kodeJobOrder: proyek.kodeJobOrder,
        status: proyek.status,
        pemilik: proyek.pemilik
    })

    const handleSubmit: FormEventHandler = async (e) => {
        e.preventDefault()
        await put('/proyek/edit/' + proyek.id, {
            onSuccess: () => {
                Swal.fire({
                    title: 'Data Berhasil Diupdate!',
                    icon: 'success',
                    confirmButtonText: 'Okee',
                });
            }
        });
    }

    const pemiliks = [
        {
            value: "manager",
            label: "Manager",
        },
        {
            value: "staff",
            label: "Staff",
        }
    ]

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

    return (
        <Admin>
            <Head title='edit Proyek' />
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
                            <h6 className='text-gray-600 text-lg font-bold'>Edit Proyek</h6>
                        </div>
                    </div>
                </div>

                <form className='mt-5' onSubmit={handleSubmit}>
                    <div className='my-5'>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="namaProyek">Nama Proyek:</Label>
                            <Input
                                id="namaProyek"
                                placeholder='Edit Nama Proyek'
                                name='namaProyek'
                                value={data.namaProyek}
                                onChange={(e) => setData('namaProyek', e.target.value)}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="kodeJobOrder">Kode Proyek:</Label>
                                <Input
                                    id="kodeJobOrder"
                                    placeholder="Edit Kode Proyek"
                                    name='kodeJobOrder'
                                    value={data.kodeJobOrder}
                                    onChange={(e) => setData('kodeJobOrder', e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="status">Pilih Status:</Label>
                                <Select
                                    value={data.status}
                                    onValueChange={(value) => setData('status', value)}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Pilih Status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {statuses.map((status) => (
                                            <SelectItem key={status.value} value={status.value}>
                                                {status.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="kodeJobOrder">Kode Proyek:</Label>
                                <Input
                                    id="pemilik"
                                    placeholder="Edit Kode Proyek"
                                    name='pemilik'
                                    value={data.pemilik}
                                    onChange={(e) => setData('pemilik', e.target.value)}
                                />
                            </div>

                        </div>
                    </div>

                    <Button className='bg-blue-600 hover:bg-blue-500' type="submit">Update</Button>
                </form>
            </Card>
        </Admin>
    )
}
