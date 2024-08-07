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

export default function EditPengguna() {
    const { pengguna } = usePage().props
    const { data, setData, put } = useForm({
        nama: pengguna.nama,
        departemen: pengguna.departemen,
        jabatan: pengguna.jabatan,
        status: pengguna.status,
    })

    const handleSubmit: FormEventHandler =async (e) => {
        e.preventDefault()
        await put('/dasboard/pengguna/edit/' + pengguna.id)
        onSuccess: () => {
            Swal.fire({
                title: 'Data Berhasil Diupdate!',
                icon: 'success',
                confirmButtonText: 'Okee',
            });
        }
    }

    const jabatans = [
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
            value: "aktif",
            label: "Aktif",
        },
        {
            value: "Tidak-aktif",
            label: "Tidak-aktif",
        }
    ]

    return (
        <Admin>
            <Head title='Edit Pengguna' />
            <Card className="p-5">
                <div className="border-b border-gray-200 pb-4">
                    <div className='flex justify-between'>
                        <div>
                            <div className='flex gap-1'>
                                <Link href="/">
                                    <p className='text-sm flex gap-1'><IconHome size={18} />Home</p>
                                </Link>
                                <span>-</span>
                                <Link href='/dasboard/pengguna/pengguna'>
                                    <p className="text-sm">Pengguna</p>
                                </Link>
                            </div>
                            <h6 className='text-gray-600 text-lg font-bold'>Edit Pengguna</h6>
                        </div>
                    </div>
                </div>

                <form className='mt-5' onSubmit={handleSubmit}>
                    <div className='my-5'>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name:</Label>
                            <Input
                                id="name"
                                name='nama'
                                placeholder='Masukkan Nama'
                                value={data.nama}
                                onChange={(e) => setData('nama', e.target.value)}
                            />
                        </div>

                        <div className="grid grid-cols-3 gap-3 mt-3">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="departemen">Departemen:</Label>
                                <Input
                                    id="departemen"
                                    placeholder="Masukkan Nama Departemen"
                                    name='departemen'
                                    value={data.departemen}
                                    onChange={(e) => setData('departemen', e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="jabatan">Pilih Jabatan:</Label>
                                <Select
                                    value={data.jabatan}
                                    onValueChange={(value) => setData('jabatan', value)}
                                >
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Pilih Jabatan" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {jabatans.map((jabatan) => (
                                            <SelectItem key={jabatan.value} value={jabatan.value}>
                                                {jabatan.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="status">Pilih Status:</Label>
                                <div>
                                    <Select
                                    value={data.status}
                                    onValueChange={(value) => setData('status', value)}
                                    >
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Pilih Status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {statuses.map((status) => (
                                                <SelectItem key={status.value} value={status.value}>{status.label}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Button className='bg-blue-600' type="submit">Update</Button>
                </form>
            </Card>
        </Admin>
    )
}
