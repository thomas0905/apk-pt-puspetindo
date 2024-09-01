

import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { IconEye, IconEyeOff, IconHome } from '@tabler/icons-react';
import React, { FormEventHandler, useState } from 'react';
import Swal from 'sweetalert2';
import { Button } from '~/components/ui/button';
import { Card } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import Admin from '~/layout/admin';

export default function EditPengguna() {
    const { data_karyawan } = usePage().props;
    console.log(data_karyawan);

    const { data, setData, put } = useForm({
        nama: data_karyawan.nama,
        departemen_Id: data_karyawan.departemen_Id,
        jabatan: data_karyawan.jabatan,
        status: data_karyawan.status,
        tempat_lahir: data_karyawan.tempat_lahir,
        tanggal_lahir: data_karyawan.tanggal_lahir,
        usia: data_karyawan.usia,
        jenis_kelamin: data_karyawan.jenis_kelamin,
        pendidikan: data_karyawan.pendidikan,
        jurusan: data_karyawan.jurusan,
        bpjs_kk: data_karyawan.bpjs_kk,
        bpjs_kesehatan: data_karyawan.bpjs_kesehatan,
        no_rekening: data_karyawan.no_rekening,
        nama_bank: data_karyawan.nama_bank,
    });

    const handleSubmit: FormEventHandler = async (e) => {
        e.preventDefault();
        await put('/karyawan/edit/' + data_karyawan.id, {
            onSuccess: () => {
                Swal.fire({
                    title: 'Data Berhasil Diupdate!',
                    icon: 'success',
                    confirmButtonText: 'Okee',
                });
            },
        });
    };

    const jabatans = [
        { value: 'manager', label: 'Manager' },
        { value: 'staff', label: 'Staff' },
        { value: 'IT Software', label: 'IT Software' },
        { value: 'HR IT', label: 'HR IT' },
    ];

    const statuses = [
        { value: 'aktif', label: 'Aktif' },
        { value: 'Tidak-aktif', label: 'Tidak-aktif' },
    ];

    const jenisKelamin = [
        {
            value: 'Laki-laki',
            label: 'Laki-laki'
        },
        {
            value: 'Perempuan',
            label: 'Perempuan'
        }
    ]


    // const [showPassword, setShowPassword] = useState(false);

    // const handleTogglePassword = () => {
    //     setShowPassword(!showPassword);
    // };

    return (
        <Admin>
            <Head title="Edit Pengguna" />
            <Card className="p-5 shadow-md">
                <div className="border-b border-gray-200 pb-4">
                    <div className="flex justify-between">
                        <div>
                            <div className="flex gap-1">
                                <Link href="/">
                                    <p className="text-sm flex gap-1">
                                        <IconHome size={18} />
                                        Home
                                    </p>
                                </Link>
                                <span>-</span>
                                <Link href="/karyawan">
                                    <p className="text-sm">karyawan</p>
                                </Link>
                            </div>
                            <h6 className="text-gray-600 text-lg font-bold">Edit Karyawan</h6>
                        </div>
                    </div>
                </div>

                <form className="mt-5" onSubmit={handleSubmit}>
                    <div className="my-5">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name:</Label>
                            <Input
                                id="name"
                                name="nama"
                                placeholder="Masukkan Nama"
                                value={data.nama}
                                onChange={(e) => setData('nama', e.target.value)}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="departemen_Id">Departemen:</Label>
                                <Input
                                    id="departemen"
                                    placeholder="Masukkan Nama Departemen"
                                    name="departemen_Id"
                                    value={data.departemen_Id}
                                    onChange={(e) => setData('departemen_Id', e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="jabatan">Pilih Jabatan:</Label>
                                <Select
                                    onValueChange={(value) => setData('jabatan', value)}
                                    value={data.jabatan}
                                >
                                    <SelectTrigger className="w-full">
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
                                <Select
                                    onValueChange={(value) => setData('status', value)}
                                    value={data.status}
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

                            <div className="fex flex-col space-y-1.5">
                                <Label>Tempat Lahir</Label>
                                <Input
                                    type='text'
                                    placeholder='Masukkan Tempat Lahir Anda'
                                    name="tempat_lahir"
                                    value={data.tempat_lahir}
                                    onChange={(e) => setData('tempat_lahir', e.target.value)}
                                />
                            </div>
                            <div className="fex flex-col space-y-1.5">
                                <Label>Tanggal Lahir</Label>
                                <Input
                                    type='text'
                                    placeholder='Masukkan Tanggal Lahir Anda'
                                    name="tanggal_lahir"
                                    value={data.tanggal_lahir}
                                    onChange={(e) => setData('tanggal_lahir', e.target.value)}
                                />
                            </div>

                            <div className="fex flex-col space-y-1.5">
                                <Label>Usia</Label>
                                <Input
                                    type='text'
                                    placeholder='Masukkan Usia Anda'
                                    name="usia"
                                    value={data.usia}
                                    onChange={(e) => setData('usia', e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="status">Pilih Jenis Kelamin:</Label>
                                <Select onValueChange={(value) => setData('jenis_kelamin', value)}
                                    value={data.jenis_kelamin}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Pilih Jenis Kelamin" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {jenisKelamin.map((jenisKelamin) => (
                                            <SelectItem key={jenisKelamin.value} value={jenisKelamin.value}>{jenisKelamin.label}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="fex flex-col space-y-1.5">
                                <Label>Pendidikan</Label>
                                <Input
                                    type='text'
                                    placeholder='Masukkan Pendidikan Anda'
                                    name='pendidikan'
                                    value={data.pendidikan}
                                    onChange={(e) => setData('pendidikan', e.target.value)}
                                />
                            </div>

                            <div className="fex flex-col space-y-1.5">
                                <Label>Jurusan</Label>
                                <Input
                                    type='text'
                                    placeholder='Jurusan Anda'
                                    name='jurusan'
                                    value={data.jurusan}
                                    onChange={(e) => setData('jurusan', e.target.value)}
                                />
                            </div>

                            <div className="fex flex-col space-y-1.5">
                                <Label>BPJS Ketenaga kerjaan</Label>
                                <Input
                                    type='text'
                                    placeholder='Masukkan BPJS Ketenaga Kerja Anda'
                                    name='bpjs_kk'
                                    value={data.bpjs_kk}
                                    onChange={(e) => setData('bpjs_kk', e.target.value)}
                                />
                            </div>

                            <div className="fex flex-col space-y-1.5">
                                <Label>BPJS Kesehatan</Label>
                                <Input
                                    type='text'
                                    placeholder='Masukkan BPJ Kesehatan Anda' 
                                    name='bpjs_kesehatan'
                                    value={data.bpjs_kesehatan}
                                    onChange={(e) => setData('bpjs_kesehatan', e.target.value)}
                                    />
                            </div>

                            <div className="fex flex-col space-y-1.5">
                                <Label>No.Rekening</Label>
                                <Input
                                    type='text'
                                    placeholder='Masukkan No Rekening Anda' 
                                    name='no_rekening'
                                    value={data.no_rekening}
                                    onChange={(e) => setData('no_rekening', e.target.value)}
                                    />
                            </div>

                            <div className="fex flex-col space-y-1.5">
                                <Label>Nama Bank</Label>
                                <Input
                                    type='text'
                                    placeholder='Masukkan Nama Anda' 
                                    name='nama_bank'
                                    value={data.nama_bank}
                                    onChange={(e) => setData('nama_bank', e.target.value)}
                                    />
                            </div>

                        </div>
                    </div>

                    <Button className="bg-blue-600 hover:bg-blue-500" type="submit">
                        Update
                    </Button>
                </form>
            </Card>
        </Admin>
    );
}