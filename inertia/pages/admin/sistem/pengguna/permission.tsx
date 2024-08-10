import { Head, Link } from '@inertiajs/react'
import { IconHome } from '@tabler/icons-react'
import React from 'react'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import Admin from '~/layout/admin'

export default function Permission() {
  return (
    <Admin>
      <Head title='permission' />
      <Card className="p-5">
        <div className="border-b border-gray-200 pb-4">
          <div className='flex justify-between'>
            <div>
              <Link href="/">
                <p className='text-sm flex gap-1'><IconHome size={18} />Home</p>
              </Link>
              <h6 className='text-gray-600 text-lg font-bold'>Atur Permission</h6>
            </div>


            <div >
              <Link href='#' className='flex gap-2'>
                <Button className=" hover:bg-gray-50 border text-black btn-small gap-2 " variant="outline">
                  Cancel
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-500 text-white btn-small gap-2 hover:text-white" variant="outline">
                  Save Changes
                </Button>

              </Link>
            </div>
          </div>
        </div>
      </Card>
    </Admin>
  )
}
