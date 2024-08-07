import Proyek from '#models/proyek'
import { Head, Link, router, usePage } from '@inertiajs/react'
import { IconBriefcase, IconEdit, IconHome, IconSearch, IconTrash, IconUserPlus } from '@tabler/icons-react'
import React from 'react'
import Swal from 'sweetalert2'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table'
import Admin from '~/layout/admin'
import DataTable from '~/components/dataTable/dataTable'
import { createColumnHelper } from '@tanstack/react-table'
export default function IndexProyek() {
    //     const { data_proyek } = usePage<{ data_proyek: Proyek[] }>().props
    // console.log(data_proyek);

    //     const handleDelete = async (id: any) => {
    //         const swalInstance = Swal.fire({
    //             title: 'Ingin Hapus Data?',
    //             icon: 'question',
    //             showCancelButton: true,
    //             confirmButtonText: 'Ya!',
    //             cancelButtonText: 'Tidak!',
    //             allowOutsideClick: false,
    //         });
    //         const result = await swalInstance;
    //         if (result.isConfirmed) {
    //             await router.delete('/dasboard/proyek/proyek/' + id);
    //             Swal.fire('Deleted!', 'Data berhasil dihapus.', 'success');
    //         } else {
    //             Swal.fire('Cancelled', 'Data tidak dihapus.', 'error');
    //         }
    //     };
    type Person = {
        firstName: string
        lastName: string
        age: number
        visits: number
        status: string
        progress: number
      }
      
      const defaultData: Person[] = [
        {
          firstName: 'tanner',
          lastName: 'linsley',
          age: 24,
          visits: 100,
          status: 'In Relationship',
          progress: 50,
        },
        {
          firstName: 'tandy',
          lastName: 'miller',
          age: 40,
          visits: 40,
          status: 'Single',
          progress: 80,
        },
        {
          firstName: 'joe',
          lastName: 'dirte',
          age: 45,
          visits: 20,
          status: 'Complicated',
          progress: 10,
        },
      ]
      
      const columnHelper = createColumnHelper<Person>()
      
      const columns = [
        columnHelper.accessor('firstName', {
          cell: info => info.getValue(),
          footer: info => info.column.id,
        }),
        columnHelper.accessor(row => row.lastName, {
          id: 'lastName',
          cell: info => <i>{info.getValue()}</i>,
          header: () => <span>Last Name</span>,
          footer: info => info.column.id,
        }),
        columnHelper.accessor('age', {
          header: () => 'Age',
          cell: info => info.renderValue(),
          footer: info => info.column.id,
        }),
        columnHelper.accessor('visits', {
          header: () => <span>Visits</span>,
          footer: info => info.column.id,
        }),
        columnHelper.accessor('status', {
          header: 'Status',
          footer: info => info.column.id,
        }),
        columnHelper.accessor('progress', {
          header: 'Profile Progress',
          footer: info => info.column.id,
        }),
      ]
    return (

        <Admin>
            <Card className="p-5">
                {/* <div className="border-b border-gray-200 pb-4">
                    <div className='flex justify-between'>
                        <div>
                            <Link href="/">
                                <p className='text-sm flex gap-1'><IconHome size={18} />Home</p>
                            </Link>
                            <h6 className='text-gray-600 text-lg font-bold'>Proyek</h6>
                        </div>
                        <div>
                            <Link href="/dasboard/proyek/create">
                                <Button className="bg-slate-900 text-white btn-small gap-2 hover:bg-slate-800 hover:text-white" variant="outline">
                                    <IconBriefcase size={18} />
                                    Tambah Proyek
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between mt-6'>
                    <div className="relative flex flex-col space-y-1.3">
                        <Input id="name" placeholder="Search..." className="pl-10" />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <IconSearch size={16} />
                        </div>
                    </div>
                    <div>
                        <Link href="/">
                            <Button className="bg-slate-100 text-white gap-2 hover:bg-slate-800 hover:text-white" variant="outline">
                                <IconUserPlus size={18} />
                                Kolom
                            </Button>
                        </Link>
                    </div>
                </div> */}

                <Card className="mt-3">
                    {/* <Table className="container">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">No Proyek</TableHead>
                                <TableHead>Nama Proyek</TableHead>
                                <TableHead>Kode Job Order</TableHead>
                                <TableHead>Pemilik</TableHead>
                                <TableHead>Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data_proyek.map((proyek) => (
                                <TableRow key={proyek.id}>
                                    <TableCell className="font-medium">{proyek.id}</TableCell>
                                    <TableCell>{proyek.namaProyek}</TableCell>
                                    <TableCell>{proyek.kodeJobOrder}</TableCell>
                                    <TableCell>{proyek.pemilik}</TableCell>
                                    <TableCell className="flex gap-3">
                                        <span onClick={() => handleDelete(proyek.id)} className="text-red-900 cursor-pointer">
                                            <IconTrash size={18} />
                                        </span>
                                        <Link href={"/dasboard/proyek/edit/" + proyek.id}>
                                            <IconEdit size={18} />
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table> */}
                    <DataTable data={defaultData} columns={columns}/>
                </Card>
            </Card>
        </Admin>
    )
}
