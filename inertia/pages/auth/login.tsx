import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IconBrandGmail, IconLock, IconUser } from '@tabler/icons-react'

export default function Login() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <Card className="w-full max-w-md border-0 shadow-md">
                <CardHeader>
                    <CardTitle className="text-3xl">Login</CardTitle>
                    <CardDescription>
                        Hai 👏, Selamat Datang Kembali di PT.Pustpetindo
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Username</Label>
                        <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
                            <span className="flex items-center px-3">
                                <IconUser size={20} className="text-gray-500" />
                            </span>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Email"
                                required
                                className="flex-1 border-0 p-2 outline-none focus:outline-none focus:ring-0"
                            />
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
                            <span className="flex items-center px-3">
                                <IconBrandGmail size={20} className="text-gray-500" />
                            </span>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Email"
                                required
                                className="flex-1 "
                            />
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="email">Password</Label>
                        <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
                            <span className="flex items-center px-3">
                                <IconLock size={20} className="text-gray-500" />
                            </span>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Email"
                                required
                                className="flex-1 border-0 p-2 outline-none focus:outline-none focus:ring-0"
                            />
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full bg-blue-500">Sign in</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
