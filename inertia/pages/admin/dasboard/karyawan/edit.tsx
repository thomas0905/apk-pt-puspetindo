import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { IconHome } from '@tabler/icons-react';
import React, { FormEventHandler } from 'react';
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
    


    const formatTanggalLahir = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString().substring(0, 10);  // Format YYYY-MM-DD
    };

    const { data, setData, put } = useForm({
        nama: data_karyawan.nama,
        departemen: data_karyawan.departemen.namaDepartemen,
        jabatan: data_karyawan.jabatan,
        status: data_karyawan.status,
        tempatLahir: data_karyawan.tempatLahir,
        tanggalLahir: formatTanggalLahir(data_karyawan.tanggalLahir),
        usia: data_karyawan.usia,
        jenisKelamin: data_karyawan.jenisKelamin,
        pendidikan: data_karyawan.pendidikan,
        jurusan: data_karyawan.jurusan,
        bpjsKk: data_karyawan.bpjsKk,
        bpjsKesehatan: data_karyawan.bpjsKesehatan,
        noRekening: data_karyawan.noRekening,
        namaBank: data_karyawan.namaBank,
    });

    const handleSubmit: FormEventHandler = async (e) => {
        e.preventDefault();
        console.log('Submitting Data:', data);
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
        { value: 'Laki-laki', label: 'Laki-laki' },
        { value: 'Perempuan', label: 'Perempuan' },
    ];

    return (
        <Admin>
            <Head title="Edit Pengguna" />
            <div>
                <div className="border-b border-gray-200 pb-4">
                    <div className="flex justify-between">
                        <div>
                            <div className="flex gap-1">
                                <Link href="/">
                                    <p className="text-sm flex gap-1 hover:text-gray-500 ">
                                        <IconHome size={18} />
                                        Home
                                    </p>
                                </Link>
                                <small>/</small>

                                <Link href="/karyawan">
                                    <p className="text-sm hover:text-gray-500 ">karyawan</p>
                                </Link>
                            </div>
                            <h6 className="text-gray-600 text-lg font-bold">Edit Karyawan</h6>
                        </div>
                    </div>
                </div>
                <form className="mt-5" onSubmit={handleSubmit}>
                    <div className="my-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-3">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Name:</Label>
                                <Input
                                    id="name"
                                    name="nama"
                                    placeholder="Masukkan Nama"
                                    value={data.nama}
                                    onChange={(e) => setData('nama', e.target.value)}
                                    className='focus-visible:ring-0 focus:border-blue-600'
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="departemen_Id">Departemen:</Label>
                                <Input
                                    id="departemen"
                                    placeholder="Masukkan Nama Departemen"
                                    name="departemen"
                                    value={data.departemen}
                                    onChange={(e) => setData('departemen', e.target.value)}
                                    className='focus-visible:ring-0 focus:border-blue-600'
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
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

                            <div className="flex flex-col space-y-1.5">
                                <Label>Tempat Lahir</Label>
                                <Input
                                    type='text'
                                    placeholder='Masukkan Tempat Lahir Anda'
                                    name="tempatLahir"
                                    value={data.tempatLahir}
                                    onChange={(e) => setData('tempatLahir', e.target.value)}
                                    className='focus-visible:ring-0 focus:border-blue-600'
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label>Tanggal Lahir</Label>
                                <Input
                                    type='date'
                                    placeholder='Masukkan Tanggal Lahir Anda'
                                    name="tanggalLahir"
                                    value={data.tanggalLahir}
                                    onChange={(e) => setData('tanggalLahir', e.target.value)}
                                    className='focus-visible:ring-0 focus:border-blue-600'
                                />
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label>Usia</Label>
                                <Input
                                    type='text'
                                    placeholder='Masukkan Usia Anda'
                                    name="usia"
                                    value={data.usia}
                                    onChange={(e) => setData('usia', e.target.value)}
                                    className='focus-visible:ring-0 focus:border-blue-600'
                                />
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="status">Pilih Jenis Kelamin:</Label>
                                <Select onValueChange={(value) => setData('jenisKelamin', value)}
                                    value={data.jenisKelamin}>
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

                            <div className="flex flex-col space-y-1.5">
                                <Label>Pendidikan</Label>
                                <Input
                                    type='text'
                                    placeholder='Masukkan Pendidikan Anda'
                                    name='pendidikan'
                                    value={data.pendidikan}
                                    onChange={(e) => setData('pendidikan', e.target.value)}
                                    className='focus-visible:ring-0 focus:border-blue-600'
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label>Jurusan</Label>
                                <Input
                                    type='text'
                                    placeholder='Masukkan Jurusan Anda'
                                    name='jurusan'
                                    value={data.jurusan}
                                    onChange={(e) => setData('jurusan', e.target.value)}
                                    className='focus-visible:ring-0 focus:border-blue-600'
                                />
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label>BPJS Ketenaga Kerjaan</Label>
                                <Input
                                    type='text'
                                    placeholder='Masukkan Jurusan Anda'
                                    name='bpjsKk'
                                    value={data.bpjsKk}
                                    onChange={(e) => setData('bpjsKk', e.target.value)}
                                    className='focus-visible:ring-0 focus:border-blue-600'
                                />
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label>BPJS Kesehatan</Label>
                                <Input
                                    type='text'
                                    placeholder='Masukkan Jurusan Anda'
                                    name='bpjsKesehatan'
                                    value={data.bpjsKesehatan}
                                    onChange={(e) => setData('bpjsKesehatan', e.target.value)}
                                    className='focus-visible:ring-0 focus:border-blue-600'
                                />
                            </div>


                            <div className="flex flex-col space-y-1.5">
                                <Label>No Rekening</Label>
                                <Input
                                    type='text'
                                    placeholder='Masukkan Jurusan Anda'
                                    name='noRekening'
                                    value={data.noRekening}
                                    onChange={(e) => setData('noRekening', e.target.value)}
                                    className='focus-visible:ring-0 focus:border-blue-600'
                                />
                            </div>


                            <div className="flex flex-col space-y-1.5">
                                <Label>Nama Bank</Label>
                                <Input
                                    type='text'
                                    placeholder='Masukkan Jurusan Anda'
                                    name='namaBank'
                                    value={data.namaBank}
                                    onChange={(e) => setData('namaBank', e.target.value)}
                                    className='focus-visible:ring-0 focus:border-blue-600'
                                />
                            </div>
                        </div>
                    </div>

                    <Button type="submit" className='bg-blue-600 hover:bg-blue-500'>Update</Button>
                </form>
            </div>
        </Admin>
    );
}
