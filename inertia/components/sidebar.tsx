import { Link } from '@inertiajs/react';
import React, { Fragment, useState } from 'react';
import './sidebar.css';
import {
    IconBuildingBank,
    IconBuildingStore,
    IconDashboard,
    IconDeviceLaptop,
    IconReportAnalytics,
    IconReportMoney,
    IconSettings,
    IconShoppingBag,
    IconUsers,
    IconArrowBadgeLeft,
} from '@tabler/icons-react';
import MyImageComponent from '../img/logo-puspetindo.png';
import { Button } from "@/components/ui/button";

export default function Sidebar() {
    const [isSidebarHidden, setSidebarHidden] = useState(true);

    const toggleSidebar = () => {
        setSidebarHidden(!isSidebarHidden);
        console.log('berfungsi');
    };

    return (
        <Fragment>
            <div className={`hidden border-r bg-muted/40 md:block ${isSidebarHidden ? 'w-220' : 'w-20'}`}>
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <Link href="/" className="flex items-center gap-2 font-semibold">
                            <img src={MyImageComponent} alt="Logo" width={150} />
                        </Link>
                        <Button variant="outline" size="icon" className="ml-3 h-8 w-8" onClick={toggleSidebar}>
                            <IconArrowBadgeLeft className={`h-4 w-4 transition-transform ${isSidebarHidden ? '' : 'rotate-180 '}`} />
                            <div className="sr-only">Toggle sidebar</div>
                        </Button>
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start fixed px-2 text-sm font-medium lg:px-4">
                            {/* Dashboard Section */}
                            <span className="flex text-xm flex-col items-start gap-1 rounded-lg px-2 py-3 text-muted-foreground transition-all">
                                <span className={`${isSidebarHidden ? '' : 'judul-sidebar'}`}> Dashboard</span>
                                <Link href="/" className="flex pl-2 hover:text-white text-black rounded-sm hover:bg-black p-1 w-full mt-2 gap-2 text-md">
                                    <IconDashboard size={21} />
                                    <span className={`${isSidebarHidden ? '' : 'hidden'}`}>Beranda</span>
                                </Link>

                                <Link href='/dasboard/analist' className="flex pl-2 hover:text-white text-black rounded-sm hover:bg-black p-1 w-full gap-2 text-md">
                                    <IconReportAnalytics size={21} />
                                    <span className={`${isSidebarHidden ? '' : 'hidden'}`}>Analist</span>
                                </Link>

                                <Link href='/dasboard/laporan' className="flex pl-2 hover:text-white text-black rounded-sm hover:bg-black p-1 w-full gap-2 text-md">
                                    <IconReportMoney size={21} />
                                    <span className={`${isSidebarHidden ? '' : 'hidden'}`}>Laporan</span>
                                </Link>
                            </span>

                            {/* Keuangan Section */}
                            <span className="flex text-xm flex-col items-start gap-1 rounded-lg px-2 py-3 text-muted-foreground transition-all">
                            <span className={`${isSidebarHidden ? '' : 'judul-sidebar'}`}> Keuangan</span>
                                <Link href="/keuangan/pembelian" className="flex pl-2 hover:text-white text-black rounded-sm hover:bg-black p-1 w-full mt-2 gap-2 text-md">
                                    <IconBuildingStore size={21} />
                                    <span className={`${isSidebarHidden ? '' : 'hidden'}`}>Pembelian</span>
                                </Link>

                                <Link href="/keuangan/penjualan" className="flex pl-2 hover:text-white text-black rounded-sm hover:bg-black p-1 w-full gap-2 text-md">
                                    <IconShoppingBag size={21} />
                                    <span className={`${isSidebarHidden ? '' : 'hidden'}`}>Penjualan</span>
                                </Link>

                                <Link href="/keuangan/pengeluaran" className="flex pl-2 hover:text-white text-black rounded-sm hover:bg-black p-1 w-full gap-2 text-md">
                                    <IconBuildingBank size={21} />
                                    <span className={`${isSidebarHidden ? '' : 'hidden'}`}>Pengeluaran</span>
                                </Link>
                            </span>

                            {/* Sistem Section */}
                            <span className="flex text-xm flex-col items-start gap-1 rounded-lg px-2 py-3 text-muted-foreground transition-all">
                                Sistem
                                <Link href='/sistem/pengaturan' className="flex pl-2 hover:text-white text-black rounded-sm hover:bg-black p-1 w-full mt-2 gap-2 text-md">
                                    <IconSettings size={21} />
                                    <span className={`${isSidebarHidden ? '' : 'hidden'}`}>Pengaturan</span>
                                </Link>

                                <Link href='/sistem/pengguna/pengguna' className="flex pl-2 hover:text-white text-black rounded-sm hover:bg-black p-1 w-full gap-2 text-md">
                                    <IconUsers size={21} />
                                    <span className={`${isSidebarHidden ? '' : 'hidden'}`}>Pengguna</span>
                                </Link>

                                <Link href='' className="flex pl-2 hover:text-white text-black rounded-sm hover:bg-black p-1 w-full gap-2 text-md">
                                    <IconDeviceLaptop size={21} />
                                    <span className={`${isSidebarHidden ? '' : 'hidden'}`}>Sistem</span>
                                </Link>
                            </span>
                        </nav>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
