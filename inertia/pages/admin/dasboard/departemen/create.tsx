import { useForm } from '@inertiajs/react';
import React, { FormEventHandler, Fragment, useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';

export default function Create({ onSuccess, }: { onSuccess: () => void }) {
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
                    toast.success('Proyek berhasil di simpan');
                    onSuccess()
                }
            });
        }
    };

    return (
        <Fragment>
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
                            className='focus-visible:ring-0 focus:border-blue-600' 
                        />
                        {errors.namaDepartemen && <small className="text-red-600">{errors.namaDepartemen}</small>}
                    </div>
                </div>
                <Button className='bg-blue-600 hover:bg-blue-500' type="submit" disabled={processing}>Simpan</Button>
            </form>
        </Fragment>
    );
}