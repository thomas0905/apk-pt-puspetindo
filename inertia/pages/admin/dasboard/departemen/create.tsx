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

        setErrors(validationErrors);

        if (isValid) {
            post('/departemen/create', {
                onSuccess: () => {
                    Swal.fire({
                        title: 'Data Berhasil Ditambahkan!',
                        icon: 'success',
                        confirmButtonText: 'Oke',
                    }).then(() => {
                        window.location.href = '/departemen';
                    });
                }
            });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-4 py-4">
                    <div className="grid-cols-4 items-center gap-4">
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
                </div>
                <Button className='bg-blue-600 hover:bg-blue-500' type="submit" disabled={processing}>Simpan</Button>
            </form>
        </>
    );
}