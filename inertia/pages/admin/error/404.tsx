import React from 'react'
import Admin from '~/layout/admin'
import './404.css'
import img404 from '../../../img/404.png'

export default function No_akses() {
    return (
        <Admin>
            <div className="flex flex-col items-center justify-center  animate__animated animate__fadeIn">
                <div className="text-center atur-text">
                    {/* <p className='text-6xl'>Oops...</p> */}
                    <img src={img404} id='img' alt="404 Not Found" className="object-cover w-full max-w-lg h-auto" />
                    <p className=" text-lg text-gray-500">Akses di tolak</p>
                    <p className=" text-lg text-gray-500">Maaf, Anda tidak memiliki akses ke halaman ini</p>
                </div>
            </div>
        </Admin>
    )
}
