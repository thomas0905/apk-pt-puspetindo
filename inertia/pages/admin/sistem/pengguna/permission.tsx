import { Head, Link } from '@inertiajs/react'
import { IconHome } from '@tabler/icons-react'
import React from 'react'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import Admin from '~/layout/admin'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Label } from '~/components/ui/label'
import { Input } from '~/components/ui/input'

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
          </div>
        </div>

        <Card className='mt-3 rounded-none'>
          <div className="border-b border-gray-200 p-2">
            <div className='flex justify-between'>
              <div>
                <h6 className='text-gray-600 text-lg font-bold'>Karyawan</h6>
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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Username</TableHead>
                <TableHead>Create</TableHead>
                <TableHead>Update</TableHead>
                <TableHead>Delete</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  <p className='text-lg'>Muhammad Rois</p>
                </TableCell>
                <TableCell className="font-medium text-center">
                  <Label className="flex mx-2 justify-center items-center bg-gray-100 w-6 h-6">
                    <Input type="checkbox" className='rounded-lg' id=""></Input>
                  </Label>
                </TableCell>
                <TableCell className="text-center">
                  <Label className="flex mx-2 justify-center items-center bg-gray-100 w-6 h-6">
                    <Input type="checkbox" id=""></Input>
                  </Label>
                </TableCell>
                <TableCell className="text-center">
                  <Label className="flex mx-2 justify-center items-center bg-gray-100 w-6 h-6">
                    <Input type="checkbox" id=""></Input>
                  </Label>
                </TableCell>
                <TableCell className="text-center">
                  <Label className="flex  mx-2 justify-center items-center bg-gray-100 w-6 h-6">
                    <Input type="checkbox" id=""></Input>
                  </Label>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </Card>
      </Card>
    </Admin>
  )
}
