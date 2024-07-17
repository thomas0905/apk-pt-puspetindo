import { Route } from '@adonisjs/core/http'
import { Head, Link } from '@inertiajs/react'
import Authentication from '~/layout/authentication'
export default function Home(props: { version: number }) {
  return (
    <Authentication>
      <Head title="Homepage" />

      <div className="container flex items-center gap-3 justify-center h-screen">
       <a href='/' className='hover:text-blue-800'> Home</a>
       <a href='' className='hover:text-blue-800'> Contact</a>
       <Link href='/about' className='hover:text-blue-800'> About</Link>
       <Link href='/product' className='hover:text-blue-800'> Product</Link>
      </div>
    </Authentication>
  )
}