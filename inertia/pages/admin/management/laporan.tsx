import { Head, Link } from '@inertiajs/react'
import { IconHome, IconUserPlus } from '@tabler/icons-react'
import React from 'react'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import Admin from '~/layout/admin'

export default function Laporan() {
  return (
    <Admin>
      <Head title='laporan' />
      <Card className="p-5">
        <div className="border-b border-gray-200 pb-4">
          <div className='flex justify-between'>
            <div>
              <Link href="/">
                <p className='text-sm flex gap-1'><IconHome size={18} />Home</p>
              </Link>
              <h6 className='text-gray-600 text-lg font-bold'>Laporan</h6>
            </div>
          </div>
        </div>
      </Card>
    </Admin>
  )
}
