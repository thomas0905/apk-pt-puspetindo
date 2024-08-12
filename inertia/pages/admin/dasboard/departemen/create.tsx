import { Link, useForm, usePage } from '@inertiajs/react';
import { IconHome } from '@tabler/icons-react';
import React, { FormEventHandler, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
import { Button } from '~/components/ui/button';
import { Card } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import Admin from '~/layout/admin';

export default function Create() {
    const { data, setData, post, processing } = useForm({
        namaDepartemen: '',
        namaPegawai: ''
    });

    const [errors, setErrors] = useState({});

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        const validationErrors: any = {};
        let isValid = true;

        if (data.namaDepartemen.trim() === '') {
            validationErrors.namaDepartemen = 'Nama departemen harus diisi';
            isValid = false;
        }

        // if (data.namaPegawai.trim() === '') {
        //     validationErrors.namaPegawai = 'Nama pegawai harus diisi';
        //     isValid = false;
        // }

        setErrors(validationErrors);

        if (isValid) {
            post('/dasboard/departemen/create', {
                onSuccess: () => {
                    Swal.fire({
                        title: 'Data Berhasil Ditambahkan!',
                        icon: 'success',
                        confirmButtonText: 'Oke',
                    }).then(() => {
                        // Redirect ke halaman indeks
                        window.location.href = '/dasboard/departemen/index';
                    });
                }
            });
        }
    };

    return (
        <Admin>
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
                                    <p className="text-sm">Departemen</p>
                                </Link>
                            </div>
                            <h6 className='text-gray-600 text-lg font-bold'>Tambah Departemen</h6>
                        </div>
                    </div>
                </div>

                <form className='mt-5' onSubmit={handleSubmit}>
                    <ToastContainer />
                    <div className='my-5'>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="namaDepartemen">Nama Departemen:</Label>
                                <Input
                                    id="namaDepartemen"
                                    placeholder="Masukkan Nama Departemen"
                                    onChange={(e) => setData('namaDepartemen', e.target.value)}
                                    name='namaDepartemen'
                                    value={data.namaDepartemen}
                                />
                                {errors.namaDepartemen && <small className="text-red-600">{errors.namaDepartemen}</small>}
                            </div>

                            {/* <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="namaPegawai">Nama Pegawai:</Label>
                                <Input
                                    id="namaPegawai"
                                    placeholder="Masukkan Nama Pegawai"
                                    onChange={(e) => setData('namaPegawai', e.target.value)}
                                    name='namaPegawai'
                                    value={data.namaPegawai}
                                />
                                {errors.namaPegawai && <small className="text-red-600">{errors.namaPegawai}</small>}
                            </div> */}
                        </div>
                    </div>

                    <Button className='bg-blue-600 hover:bg-blue-500' type="submit" disabled={processing}>Simpan</Button>
                </form>
            </Card>
        </Admin>
    );
}
