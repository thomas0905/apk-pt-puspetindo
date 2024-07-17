import React, { Fragment } from 'react'
import {
    Bell,
    Package2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from '@inertiajs/react'
import Navbar from '~/components/navbar'
import Sidebar from '~/components/sidebar'
export default function Authentication({ children }) {
    return (
        <Fragment>
            <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                <div className="hidden border-r bg-muted/40 md:block">
                    <div className="flex h-full max-h-screen flex-col gap-2">
                        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                            <Link href="/" className="flex items-center gap-2 font-semibold">
                                <Package2 className="h-6 w-6" />
                                <span className="">Acme Inc</span>
                            </Link>
                            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                                <Bell className="h-4 w-4" />
                                <span className="sr-only">Toggle notifications</span>
                            </Button>
                        </div>
                        <div className="flex-1">
                            <Sidebar />
                        </div>

                    </div>
                </div>
                <div className="flex flex-col">
                    <Navbar />
                    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                        <div className="flex items-center">
                            <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
                        </div>
                        <div
                            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
                        >
                            <div className="flex flex-col items-center gap-1 text-center">
                                <h3 className="text-2xl font-bold tracking-tight">
                                    You have no products
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    You can start selling as soon as you add a product.
                                </p>
                                <Button className="mt-4">Add Product</Button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </Fragment>
    )
}
