import { Link } from '@inertiajs/react'
import React, { Fragment } from 'react'
import { IconBuildingBank, IconBuildingStore, IconDashboard, IconDeviceLaptop, IconReportAnalytics, IconReportMoney, IconSettings, IconShoppingBag, IconUsers } from '@tabler/icons-react';


export default function sidebar() {
    return (
        <Fragment>
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <span className="flex text-xm flex-col items-start gap-1 rounded-lg px-2 py-3 text-muted-foreground transition-all">
                    Dashboard
                    <Link href=''
                        className="pl-2 hover:text-white text-black rounded-sm hover:bg-black p-1 w-full mt-2 gap-2 text-md flex "
                    >
                        <IconDashboard size={21} />
                        Beranda
                    </Link>

                    <Link href=''
                        className="pl-2 hover:text-white rounded-sm hover:bg-black p-1 w-full text-black gap-2 text-1sm flex "
                    >
                        <IconReportAnalytics size={21} />
                        Analist
                    </Link>

                    <Link
                        href=''
                        className="pl-2 hover:text-white rounded-sm hover:bg-black p-1 w-full text-black gap-2 text-1sm flex "
                    >
                        <IconReportMoney size={21} />
                        Laporan
                    </Link>
                </span>


                <span className="flex text-xm flex-col items-start gap-1 rounded-lg px-2 py-2 text-muted-foreground transition-all">
                    Keuangan
                    <Link
                        href="/"
                        className="pl-2 hover:text-white text-black rounded-sm hover:bg-black p-1 w-full mt-2 gap-2 text-md flex "
                    >
                        <IconBuildingStore size={21} />
                        Pembelian
                    </Link>

                    <Link
                        href="/"
                        className="pl-2 hover:text-white rounded-sm hover:bg-black p-1 w-full text-black gap-2 text-1sm flex"
                    >
                        <IconShoppingBag size={21} />
                        Penjualan
                    </Link>

                    <Link
                        href="/"
                        className="pl-2 hover:text-white rounded-sm hover:bg-black p-1 w-full text-black gap-2 text-1sm flex"
                    >
                        <IconBuildingBank size={21} />
                        Pengeluaran
                    </Link>

                </span>

                <span className="flex text-xm flex-col items-start gap-1 rounded-lg px-2 py-3 text-muted-foreground transition-all">
                    Sistem
                    <Link href=''
                        className="pl-2 hover:text-white text-black rounded-sm hover:bg-black p-1 w-full mt-2 gap-2 text-md flex "
                    >
                        <IconSettings size={21} />
                        Pengaturan
                    </Link>

                    <Link href=''
                        className="pl-2 hover:text-white rounded-sm hover:bg-black p-1 w-full text-black gap-2 text-1sm flex "
                    >
                        <IconUsers size={21} />
                        Pengguna
                    </Link>

                    <Link
                        href=''
                        className="pl-2 hover:text-white rounded-sm hover:bg-black p-1 w-full text-black gap-2 text-1sm flex "
                    >
                        <IconDeviceLaptop size={21} />
                        Sistem
                    </Link>
                </span>

            </nav>
        </Fragment >
    )
}
