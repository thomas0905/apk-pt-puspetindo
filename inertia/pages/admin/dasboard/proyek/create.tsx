import { Head, Link, useForm } from '@inertiajs/react'
import { IconHome } from '@tabler/icons-react'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import Admin from '~/layout/admin'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormEventHandler } from 'react'


export default function Create() {

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

    const { data, setData, post } = useForm({
        namaProyek: '',
        kodeJobOrder: '',
        pemilik: ''
    })

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault()
        post('/dasboard/proyek/create')
        console.log(data);
        
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
                                <Link href='/dasboard/proyek/index'>
                                    <p className="text-sm">proyek</p>
                                </Link>
                            </div>

                            <h6 className='text-gray-600 text-lg font-bold'>Tambah Proyek</h6>
                        </div>
                    </div>
                </div>

                <form className='mt-5' onSubmit={handleSubmit}>
                    <ToastContainer />
                    <div className='my-5'>
                        <div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="nama"> Nama Proyek:</Label>
                                <Input
                                    id="nama"
                                    placeholder="Masukkan Nama"
                                    name='namaProyek'
                                    value={data.namaProyek}
                                    onChange={(e) => setData('namaProyek',e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3 mt-3">
                            <div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="departemen">Kode Job order:</Label>
                                    <Input
                                        id="departemen"
                                        placeholder="Masukkan Kode"
                                        name='kodeJobOrder'
                                        value={data.kodeJobOrder}
                                        onChange={(e) => setData('kodeJobOrder',e.target.value)}
                                    />

                                </div>
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="jabatan">Pemilik:</Label>
                                <div>
                                    <Select onValueChange={(value) => setData('pemilik',value)}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Pilih Pemilik" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {pemiliks.map((pemilik) => (
                                                <SelectItem key={pemilik.value} value={pemilik.value}>{pemilik.label}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Button className='bg-blue-600 hover:bg-blue-500' type="submit">Simpan</Button>
                </form>
            </Card>
        </Admin>
    )
}
