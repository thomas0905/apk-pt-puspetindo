import { Head, Link } from '@inertiajs/react'
import React from 'react'
import Guest from '~/layout/guest'

export default function Index() {
  return (
    <Guest>
      <Guest>
        <Head title="product" />
        <div className="container flex items-center gap-3 justify-center h-screen">
          <Link href='/create' className='hover:text-blue-800'> Create Product</Link>
          <Link href='/edit' className='hover:text-blue-800'> Edit Product</Link>
        </div>
      </Guest>
    </Guest>
  )
}
