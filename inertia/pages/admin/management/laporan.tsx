import { Head, Link } from '@inertiajs/react'
import { IconHome, IconPrinter } from '@tabler/icons-react'
import React from 'react'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import Admin from '~/layout/admin'
import logoPuspetindo from '../../../img/logo-puspetindo.png'

export default function Laporan() {
  return (
    <Admin>
      <Head title='laporan' />
      <Card className="p-5">
        <div className="border-b border-gray-200 pb-4">
          <div className='flex justify-center'>
            <img src={logoPuspetindo} alt="" />
          </div>
          <div className='flex justify-between'>
            <div>
              {/* <Link href="/">
                <p className='text-sm flex gap-1'><IconHome size={18} />Home</p>
              </Link> */}
              <h6 className='text-gray-600 text-lg font-bold'>Laporan</h6>
            </div>
          </div>

        </div>
        <div className='flex justify-end mt-3'>
          <Button className='bg-blue-500 flex gap-1 hover:bg-blue-400'>
            <IconPrinter />
            Print
          </Button>
        </div>
      </Card>
    </Admin>
  )
}
