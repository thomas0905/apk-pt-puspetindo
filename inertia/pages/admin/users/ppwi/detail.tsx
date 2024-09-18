import { IconDownload } from '@tabler/icons-react'
import React from 'react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import Admin from '~/layout/admin'

export default function Detail() {
  return (
    <Admin>
      Judul PPWI
      <div className="flex gap-2">
        <div className="w-8/12">
          <Card className=''>
            <CardContent className='p-3'>
              sdf
            </CardContent>
          </Card>
        </div>
        <div className="w-3/12">
          <Card>
            <CardContent className='p-3'>
              <p className='border-b-2'>Judul</p>
              <Button className='bg-blue-600 mt-2 hover:bg-blue-600 w-full flex items-center gap-2'><IconDownload size={18}/>Download</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Admin>
  )
}
