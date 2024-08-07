import { Link } from '@inertiajs/react';
import React, { Fragment, useState } from 'react';
import './sidebar.css';
import {
    IconDashboard,
    IconUsers,
    IconArrowBadgeLeft,
    IconBriefcase,
    IconBook2,
    IconSettings,
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
                                <Link href='/' className="flex pl-2 mt-2 hover:text-white text-black rounded-sm hover:bg-black p-1 w-full gap-2 text-md">
                                    <IconDashboard size={21} />
                                    <span className={`${isSidebarHidden ? '' : 'hidden'}`}>Beranda</span>
                                </Link>

                                <Link href='/dasboard/pengguna/pengguna' className="flex pl-2  hover:text-white text-black rounded-sm hover:bg-black p-1 w-full gap-2 text-md">
                                    <IconUsers size={21} />
                                    <span className={`${isSidebarHidden ? '' : 'hidden'}`}>Pengguna</span>
                                </Link>

                                <Link href='/dasboard/proyek/index' className="flex pl-2 hover:text-white text-black rounded-sm hover:bg-black p-1 w-full gap-2 text-md">
                                    <IconBriefcase size={21} />
                                    <span className={`${isSidebarHidden ? '' : 'hidden'}`}>Proyek</span>
                                </Link>
                            </span>

                            <span className="flex text-xm flex-col items-start gap-1 rounded-lg px-2 text-muted-foreground transition-all">
                                <span className={`${isSidebarHidden ? '' : 'judul-sidebar'}`}> Users</span>
                                <Link href='c/menuProfil' className="flex pl-2 mt-2 hover:text-white text-black rounded-sm hover:bg-black p-1 w-full gap-2 text-md">
                                    <IconUsers size={21} />
                                    <span className={`${isSidebarHidden ? '' : 'hidden'}`}>Menu Profil</span>
                                </Link>

                                <Link href='/dasboard/users/minhours' className="flex pl-2 hover:text-white text-black rounded-sm hover:bg-black p-1 w-full gap-2 text-md">
                                    <IconBriefcase size={21} />
                                    <span className={`${isSidebarHidden ? '' : 'hidden'}`}>Man Hours</span>
                                </Link>
                            </span>

                            <span className="flex text-xm flex-col items-start gap-1 mt-3 rounded-lg px-2 text-muted-foreground transition-all">
                                <span className={`${isSidebarHidden ? '' : 'judul-sidebar'}`}> Management</span>
                                <Link href='/management/laporan' className="flex pl-2 mt-2 hover:text-white text-black rounded-sm hover:bg-black p-1 w-full gap-2 text-md">
                                    <IconBook2 size={21} />
                                    <span className={`${isSidebarHidden ? '' : 'hidden'}`}>Laporan</span>
                                </Link>

                                <Link href='/sistem/pengguna/pengguna' className="flex pl-2  hover:text-white text-black rounded-sm hover:bg-black p-1 w-full gap-2 text-md">
                                    <IconSettings size={21} />
                                    <span className={`${isSidebarHidden ? '' : 'hidden'}`}>Pengturan</span>
                                </Link>
                            </span>

                        </nav>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
