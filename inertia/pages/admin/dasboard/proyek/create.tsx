import { Head, Link } from '@inertiajs/react'
import { IconHome } from '@tabler/icons-react'
import React, { FormEventHandler, useState } from 'react'
import { useForm } from '@inertiajs/react'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { Command, CommandInput, CommandItem } from '~/components/ui/command'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover'
import Admin from '~/layout/admin'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Create() {
 

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
                                <Link href='/dasboard/pengguna/pengguna'>
                                    <p className="text-sm">pengguna</p>
                                </Link>
                            </div>

                            <h6 className='text-gray-600 text-lg font-bold'>Add Pengguna</h6>
                        </div>
                    </div>
                </div>

                <form className='mt-5'>
                    <ToastContainer />
                    <div className='my-5'>
                        <div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="nama">Nama:</Label>
                                <Input
                                    id="nama"
                                    placeholder="Masukkan Nama"
                            
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
                                    />
                                 
                                </div>
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="jabatan">Pilih Jabatan:</Label>
                                <div>
                                    <Select
                                       
                                    >
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Pilih Jabatan" />
                                        </SelectTrigger>
                                        <SelectContent>
                                           <SelectItem>fasdf</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.jabatan && <small className="text-red-600">{errors.jabatan}</small>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <Button type="submit">Simpan</Button>
                </form>
            </Card>
        </Admin>
    )
}
