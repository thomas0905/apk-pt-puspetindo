import { Head, Link, router } from '@inertiajs/react'
import { IconHome } from '@tabler/icons-react'
import React, { FormEventHandler, useState } from 'react'
import { useForm } from '@inertiajs/react'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { Command, CommandEmpty, CommandInput, CommandItem } from '~/components/ui/command'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover'
import Admin from '~/layout/admin'

const statuses = [
    {
        value: "aktif",
        label: "Aktif",
    },
    {
        value: "non-aktif",
        label: "Non-Aktif",
    }
]

export default function Create() {
    const [open, setOpen] = useState(false)
    const { data, setData, post, processing } = useForm({
        nama: '',
        departemen: '',
        jabatan: '',
        status: '',
    })

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault()
        post('/sistem/pengguna/create')
    }

    return (
        <Admin>
            <Head title='add-pengguna' />
            <Card className="p-5">
                <div className="border-b border-gray-200 pb-4">
                    <div className='flex justify-between'>
                        <div>
                            <div className='flex gap-1'>
                                <Link href="/">
                                    <p className='text-sm flex gap-1'><IconHome size={18} />Home</p>
                                </Link>
                                <span>-</span>
                                <Link href='/sistem/pengguna/pengguna'>
                                    <p className="text-sm">pengguna</p>
                                </Link>
                            </div>

                            <h6 className='text-gray-600 text-lg font-bold'>Add Pengguna</h6>
                        </div>
                    </div>
                </div>

                <form className='mt-5' onSubmit={handleSubmit}>
                    <div className='my-5'>
                        <div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Name:</Label>
                                <Input
                                    id="name"
                                    placeholder="Masukkan Nama"
                                    onChange={(e) => setData('nama', e.target.value)}
                                    name='name'
                                    value={data.nama}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3 mt-3">
                            <div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="departemen">Departemen:</Label>
                                    <Input
                                        id="departemen"
                                        placeholder="Masukkan Nama Departemen"
                                        name='departemen'
                                        value={data.departemen}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="jabatan">Pilih Jabatan:</Label>
                                    <Popover open={open} onOpenChange={setOpen}>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                aria-expanded={open}
                                                className="w-full justify-between"
                                            >
                                                {data.jabatan || "Pilih Jabatan"}
                                                <p className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-full p-0">
                                            <Command>
                                                <CommandInput placeholder="Cari jabatan..." />
                                                <CommandEmpty>Jabatan tidak ditemukan.</CommandEmpty>
                                                <CommandItem
                                                    value={'Pelajar'}
                                                    onSelect={(value) => setData('jabatan', value)}
                                                >
                                                    Pelajar
                                                </CommandItem>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="status">Pilih Status:</Label>
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={open}
                                            className="w-full justify-between"
                                        >
                                            {statuses.find(status => status.value === data.status)?.label || "Pilih Status"}
                                            <p className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-full p-0">
                                        <Command>
                                            <CommandInput placeholder="Cari status..." />
                                            <CommandEmpty>Status tidak ditemukan.</CommandEmpty>
                                            {statuses.map((status) => (
                                                <CommandItem
                                                    key={status.value}
                                                    value={status.value}
                                                    onSelect={(value) => setData('status', value)}
                                                >
                                                    {status.label}
                                                </CommandItem>
                                            ))}
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                    </div>

                    <Button type="submit" disabled={processing}>Simpan</Button>
                </form>
            </Card>
        </Admin>
    )
}
