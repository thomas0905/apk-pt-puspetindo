import { Head, useForm } from '@inertiajs/react'
import React, { FormEventHandler, Fragment } from 'react'
import Swal from 'sweetalert2'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'

export default function Edit({proyek}) {
    console.log(proyek)
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
        <Fragment>
            <Head title='edit Proyek' />
            <form className='mt-5' onSubmit={handleSubmit}>
                    <div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="namaProyek">Nama Proyek:</Label>
                            <Input
                                id="namaProyek"
                                placeholder='Edit Nama Proyek'
                                name='namaProyek'
                                value={data.namaProyek}
                                onChange={(e) => setData('namaProyek', e.target.value)}
                                 className='focus-visible:ring-0 focus:border-blue-600'
                            />
                        </div>

                        <div className=" md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="kodeJobOrder">Kode Proyek:</Label>
                                <Input
                                    id="kodeJobOrder"
                                    placeholder="Edit Kode Proyek"
                                    name='kodeJobOrder'
                                    value={data.kodeJobOrder}
                                    onChange={(e) => setData('kodeJobOrder', e.target.value)}
                                     className='focus-visible:ring-0 focus:border-blue-600'
                                />
                            </div>

                            <div className="flex flex-col space-y-1.5 mt-2">
                                <Label htmlFor="status">Pilih Status:</Label>
                                <Select
                                    value={data.status}
                                    onValueChange={(value) => setData('status', value)}
                                >
                                    <SelectTrigger className="w-full  focus:ring-0 focus:border-blue-600 focus:outline-none">
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

                            <div className="flex flex-col space-y-1.5 mt-2">
                                <Label htmlFor="kodeJobOrder">Kode Proyek:</Label>
                                <Input
                                    id="pemilik"
                                    placeholder="Edit Kode Proyek"
                                    name='pemilik'
                                    value={data.pemilik}
                                    onChange={(e) => setData('pemilik', e.target.value)}
                                     className='focus-visible:ring-0 focus:border-blue-600'
                                />
                            </div>

                        </div>
                    </div>

                    <Button className='bg-blue-600 hover:bg-blue-500 mt-2' type="submit">Update</Button>
                </form>
        </Fragment>
    )
}
