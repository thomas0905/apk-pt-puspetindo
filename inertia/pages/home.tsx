import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Head, Link, usePage } from "@inertiajs/react";
import { IconBook2, IconHome, IconReceipt } from '@tabler/icons-react';
import Admin from '~/layout/admin';
import 'animate.css';

export default function Index() {
  const { data_karyawan } = usePage().props;

  const aktivitasList = [
    "Apa yang ingin kamu capai hari ini?",
    "Apakah ada tugas penting yang perlu diselesaikan?",
    "Aktivitas apa yang paling menarik untuk dikerjakan hari ini?",
    "Bagaimana rencana kamu untuk meningkatkan produktivitas?",
    "Sudahkah kamu mengatur prioritas pekerjaan hari ini?"
  ];

  const randomAktivitas = aktivitasList[Math.floor(Math.random() * aktivitasList.length)];

  return (
    <Admin>
      <Head title="beranda" />
      <Card className="p-5 animate__animated animate__fadeIn">
        <div className="">
          <div className='border-b border-gray-200 pb-4'>
            <div>
              <p className='text-sm flex items-center gap-1'>
                <IconHome size={18} />Home
              </p>
              <h6 className='font-bold text-lg text-gray-600'>Dashboard</h6>
            </div>
          </div>

          <div className='mt-5'>
            <h1 className='text-2xl font-bold'>Halo 👏 {data_karyawan.nama} </h1>
            <p className='text-gray-600 text-sm'>{randomAktivitas}</p>
          </div>
        </div>
      </Card>
    </Admin>
  );
}
