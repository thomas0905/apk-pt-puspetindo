import { Head, Link, router, usePage } from '@inertiajs/react'
import { IconBook, IconHome } from '@tabler/icons-react'
import { AlertDialogHeader } from '~/components/ui/alert-dialog'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '~/components/ui/dialog';
import Admin from '~/layout/admin'
import Create from './create'
import Ppwi from '#models/ppwi'
import { createColumnHelper } from '@tanstack/react-table'
import DataTable from '~/components/dataTable/dataTable'
import Swal from 'sweetalert2'

export default function Index() {
  const { data_ppwi } = usePage().props
  console.log(data_ppwi);

  // const [open,setOpen] = useState(false)

  const handleDelete = async (id: any) => {
    const swalInstance = Swal.fire({
      title: 'Ingin Hapus Data?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Ya!',
      cancelButtonText: 'Tidak!',
      allowOutsideClick: false,
    });
    const result = await swalInstance;
    if (result.isConfirmed) {
      await router.delete('/ppwi/delete/' + id);
      Swal.fire('Deleted!', 'Data berhasil dihapus.', 'success');
    } else {
      Swal.fire('Cancelled', 'Data tidak dihapus.', 'error');
    }
  };

  const columnHelper = createColumnHelper<Ppwi>();

  const columns = [
    columnHelper.accessor('id', {
      header: () => 'No',
      cell: info => info.row.index + 1,
      footer: info => info.column.id,
    }),
    columnHelper.accessor('judul', {
      header: () => 'Judul',
      cell: info => info.renderValue(),
      footer: info => info.column.id,
    }),
    columnHelper.accessor('namaFile', {
      header: () => 'Dokumen',
      cell: info => info.renderValue(),
      footer: info => info.column.id,
    }),
    columnHelper.accessor('keterangan', {
      header: () => 'Keterangan',
      cell: info => info.renderValue(),
      footer: info => info.column.id,
    }),
    columnHelper.display({
      id: 'aksi',
      header: () => 'Aksi',
      cell: info => (
        <div className="flex gap-3">
          <Link href='/ppwi/detail'>
            <p className='text-white bg-blue-600 py-1 px-2 rounded-md hover:text-white cursor-pointer'>Preview</p>
          </Link>
        </div>
      ),
      footer: info => info.column.id,
    }),
  ];

  return (
    <Admin>
      <Head>
        <title>PPWI</title>
      </Head>
      <Card className="p-5">
        <div className="border-b border-gray-200 pb-4">
          <div className='flex justify-between'>
            <div>
              <Link href="/">
                <p className='text-sm flex gap-1'><IconHome size={18} />Home</p>
              </Link>
              <h6 className='text-gray-600 text-lg font-bold'>Halaman PPWI</h6>
            </div>

            <div className='flex gap-1'>
              <Link href='/judul'>
                <Button className="bg-blue-600 hover:bg-blue-500 text-white btn-small gap-2 hover:text-white">Data Judul</Button>
              </Link>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="bg-blue-600 hover:bg-blue-500 text-white btn-small gap-2 hover:text-white"
                    variant="outline"
                  >
                    <IconBook size={18} />
                    Tambah PPWI
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <AlertDialogHeader>
                    <DialogTitle>Tambah PPWI</DialogTitle>
                  </AlertDialogHeader>
                  <Create />
                </DialogContent>
              </Dialog>
            </div>
          </div>


        </div>
        <div>
          <DataTable data={data_ppwi} columns={columns} />
        </div>

      </Card>
    </Admin>
  )
}

