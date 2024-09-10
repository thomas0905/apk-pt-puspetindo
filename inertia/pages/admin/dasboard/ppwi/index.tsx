import { Link } from '@inertiajs/react'
import { IconHome } from '@tabler/icons-react'
import React from 'react'
import { Card } from '~/components/ui/card'
import Admin from '~/layout/admin'

export default function Index() {
  return (
    <Admin>
      <Card className="p-5">
        <div className="border-b border-gray-200 pb-4">
          <div className='flex justify-between'>
            <div>
              <Link href="/karyawan">
                <p className='text-sm flex gap-1'><IconHome size={18} />PPWI</p>
              </Link>
              <h6 className='text-gray-600 text-lg font-bold'>Halaman PPWI</h6>
            </div>
          </div>
        </div>


      </Card>
    </Admin>
  )
}
