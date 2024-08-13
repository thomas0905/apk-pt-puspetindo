import { Head, Link, usePage } from '@inertiajs/react'
import { IconEye, IconEyeOff, IconHome } from '@tabler/icons-react'
import React, { FormEventHandler, useState } from 'react'
import { useForm } from '@inertiajs/react'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import Admin from '~/layout/admin'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'

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

const jabatans = [
    {
        value: "manager",
        label: "Manager",
    },
    {
        value: "staff",
        label: "Staff",
    },
    {
        value: "IT Software",
        label: "IT Software",
    },
    {
        value: "HR IT",
        label: "HR IT",
    }
]

export default function Create() {
    const { data_departemen } = usePage().props
    console.log(data_departemen);

    const { data, setData, post, processing } = useForm({
        nama: '',
        departemen_id: '',
        jabatan: '',
        status: '',
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({});

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault()

        const validationErrors: any = {};
        let isValid = true;

        if (data.nama.trim() === '') {
            validationErrors.nama = 'Nama harus diisi';
            isValid = false;
        }

        if (data.departemen_id === '') { 
            validationErrors.departemen_id = 'Departemen harus dipilih';
            isValid = false;
        }

        if (data.status.trim() === '') {
            validationErrors.status = 'Status harus dipilih';
            isValid = false;
        }

        if (data.jabatan.trim() === '') {
            validationErrors.jabatan = 'Jabatan harus dipilih';
            isValid = false;
        }

        if (data.email.trim() === '') {
            validationErrors.email = 'Email harus di lengkapi';
            isValid = false;
        }

        if (data.password.trim() === '') {
            validationErrors.password = 'password harus di lengkapi';
            isValid = false;
        }


        setErrors(validationErrors);

        if (isValid) {
            post('/dasboard/karyawan/create', {
                onSuccess: () => {
                    Swal.fire({
                        title: 'Data Berhasil Di Tambah!',
                        icon: 'success',
                        confirmButtonText: 'Okee',
                    });
                }
            });
        }
    }
    const [showPassword, setShowPassword] = useState(false); // State untuk mengatur visibilitas password

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Admin>
            <Head title='add-karyawan' />

            <Card className="p-5">
                <div className="border-b border-gray-200 pb-4">
                    <div className='flex justify-between'>
                        <div>
                            <div className='flex gap-1'>
                                <Link href="/">
                                    <p className='text-sm flex gap-1'><IconHome size={18} />Home</p>
                                </Link>
                                <span>-</span>
                                <Link href='/dasboard/karyawan/index'>
                                    <p className="text-sm">karyawan</p>
                                </Link>
                            </div>

                            <h6 className='text-gray-600 text-lg font-bold'>Add karyawan</h6>
                        </div>
                    </div>
                </div>

                <form className='mt-5' onSubmit={handleSubmit}>
                    <ToastContainer />
                    <div className='my-5'>

                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="nama">Nama:</Label>
                            <Input
                                id="nama"
                                placeholder="Masukkan Nama"
                                onChange={(e) => setData('nama', e.target.value)}
                                name='nama'
                                value={data.nama}
                            />
                            {errors.nama && <small className="text-red-600">{errors.nama}</small>}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
                            <div className="flex flex-col space-y-1.5">
                                <Label>Pilih Departemen:</Label>
                                <Select
                                    // value={data.departemen_id}
                                    onValueChange={(value) => setData('departemen_id', value)}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Pilih Departemen" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {data_departemen.map((dep) => (
                                            <SelectItem key={dep.id} value={dep.id.toString()}> {/* Ubah value menjadi id departemen */}
                                                {dep.namaDepartemen}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.departemen_id && <small className="text-red-600">{errors.departemen_id}</small>}
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="jabatan">Pilih Jabatan:</Label>
                                <Select onValueChange={(value) => setData('jabatan', value)}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Pilih Jabatan" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {jabatans.map((jabatan) => (
                                            <SelectItem key={jabatan.value} value={jabatan.value}>{jabatan.label}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.jabatan && <small className="text-red-600">{errors.jabatan}</small>}
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="status">Pilih Status:</Label>
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


                            <div className='mt-2'>
                                <h6 className='text-gray-600 text-md font-bold'>Data Pengguna</h6>
                                <div className="flex flex-col space-y-1.5 mt-3">
                                    <Label htmlFor="jabatan">Email:</Label>
                                    <Input
                                        type='email'
                                        placeholder='Masukkan Alamat Email'
                                        onChange={(e) => setData('email', e.target.value)}
                                        name='email'
                                        value={data.email}
                                    >
                                    </Input>
                                    {errors.email && <small className="text-red-600">{errors.email}</small>}
                                </div>
                                <div className="flex flex-col space-y-1.5 mt-3">
                                    <Label htmlFor="password">Password:</Label>
                                    <div className="relative">
                                        <Input
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder='Masukkan Password'
                                            onChange={(e) => setData('password', e.target.value)}
                                            name='password'
                                            value={data.password}
                                            className="w-full pr-10"
                                        />
                                        <button
                                            type="button"
                                            onClick={handleTogglePassword}
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                        >
                                            {showPassword ? <IconEyeOff className="h-5 w-5 text-gray-500" /> : <IconEye className="h-5 w-5 text-gray-500" />}
                                        </button>
                                    </div>
                                    {errors.password && <small className="text-red-600">{errors.password}</small>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <Button className='bg-blue-600 hover:bg-blue-500' type="submit" disabled={processing}>Simpan</Button>
                </form>
            </Card>
        </Admin>
    )
}
