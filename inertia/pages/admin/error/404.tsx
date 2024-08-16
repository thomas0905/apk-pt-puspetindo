import React from 'react'
import Admin from '~/layout/admin'
import './404.css'
export default function No_akses() {
    return (
        <Admin>
            <div className="flex flex-col atur-text justify-center items-center mt-10">
                <h1 className="text-6xl font-bold text-red-600">404</h1>
                <h2 className="text-2xl mt-4 font-semibold">Akses Ditolak</h2>
                <p className="text-lg mt-2">Maaf, Anda tidak memiliki akses ke halaman ini.</p>
            </div>
        </Admin>
    )
}
