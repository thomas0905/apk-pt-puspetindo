import { Head, useForm } from '@inertiajs/react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { Fragment, useState } from 'react';
import toast from 'react-hot-toast';


export default function Create({ onSuccess, }: { onSuccess: () => void }) {
    const { data, setData, post, processing } = useForm({
        namaProyek: '',
        kodeJobOrder: '',
        status: '',
        pemilik: ''
    });
    const [errors, setErrors] = useState({});

    const statuses = [
        { value: "Selesai", label: "Selesai" },
        { value: "Tidak-Selesai", label: "Tidak-Selesai" }
    ];
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors: any = {};
        let isValid = true;

        if (!data.namaProyek.trim()) {
            validationErrors.namaProyek = 'Nama harus diisi';
            isValid = false;
        }

        if (!data.kodeJobOrder.trim()) {
            validationErrors.kodeJobOrder = 'Kode harus diisi';
            isValid = false;
        }

        if (!data.status) {
            validationErrors.status = 'Status harus dipilih';
            isValid = false;
        }

        if (!data.pemilik.trim()) {
            validationErrors.pemilik = 'Pemilik harus diisi';
            isValid = false;
        }

        setErrors(validationErrors);

        if (isValid) {
            post('/proyek/create', {
                onSuccess: () => {
                    toast.success('Proyek berhasil di simpan');
                    onSuccess()
                },
                onError: (errorMessages) => {
                    setErrors(errorMessages);
                }
            });
        }
    };

    return (
        <Fragment>
            <Head title='Tambah Proyek' />
            <form onSubmit={handleSubmit}>
                <div className="gap-4 py-4">

                <div className="flex flex-col space-y-1.5 ">
                        <Label htmlFor="kodeJobOrder">Kode Proyek:</Label>
                        <Input
                            className='focus-visible:ring-0 focus:border-blue-600'
                            id="kodeJobOrder"
                            placeholder="Masukkan Kode"
                            value={data.kodeJobOrder}
                            onChange={(e) => setData('kodeJobOrder', e.target.value)}
                        />
                        {errors.kodeJobOrder && <small className="text-red-600">{errors.kodeJobOrder}</small>}
                    </div>

                    <div className="flex flex-col space-y-1.5 mt-3">
                        <Label htmlFor="namaProyek">Nama Proyek:</Label>
                        <Input
                            className='focus-visible:ring-0 focus:border-blue-600'
                            id="namaProyek"
                            placeholder="Masukkan Nama"
                            value={data.namaProyek}
                            onChange={(e) => setData('namaProyek', e.target.value)}
                        />
                        {errors.namaProyek && <small className="text-red-600">{errors.namaProyek}</small>}
                    </div>

               

                    <div className="flex flex-col space-y-1.5 mt-3">
                        <Label htmlFor="status">Status:</Label>
                        <Select
                            onValueChange={(value) => setData('status', value)}>
                            <SelectTrigger className="w-full  focus:ring-0 focus:border-blue-600 focus:outline-none" >
                                <SelectValue placeholder="Pilih Status" />
                            </SelectTrigger>
                            <SelectContent >
                                {statuses.map((status) => (
                                    <SelectItem key={status.value} value={status.value}>{status.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.status && <small className="text-red-600">{errors.status}</small>}
                    </div>

                    <div className="flex flex-col space-y-1.5 mt-3">
                        <Label htmlFor="pemilik">Pemilik:</Label>
                        <Input
                            className='focus-visible:ring-0 focus:border-blue-600'
                            id="pemilik"
                            placeholder="Masukkan Pemilik"
                            value={data.pemilik}
                            onChange={(e) => setData('pemilik', e.target.value)}
                        />
                        {errors.pemilik && <small className="text-red-600">{errors.pemilik}</small>}
                    </div>
                </div>
                <Button className='bg-blue-600 hover:bg-blue-500' type="submit" disabled={processing}>Simpan</Button>
            </form>
        </Fragment>
    );
}
