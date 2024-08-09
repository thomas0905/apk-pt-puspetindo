import React from 'react'
import { Button } from "@/components/ui/button"
import './login.css'
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
import { IconBrandGmail, IconLock, IconMail, IconSearch, IconUser } from '@tabler/icons-react'
import logoLogin from '../../../img/logo-puspetindo.png'
export default function Login() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <Card className="w-full max-w-md border-0 shadow-md hover-card">
                <div className='justify-center flex mt-3'>
                    <img className='justify-center' src={logoLogin} alt="" />
                </div>
                <CardHeader>
                    <CardTitle className="text-3xl text-blue-500 ">Login</CardTitle>
                    <CardDescription>
                        Hai 👏, Selamat Datang Kembali di PT.Pustpetindo
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Username:</Label>
                        <div className="relative">
                            <IconUser className="absolute icon-login left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Username"
                                className="w-full rounded-lg bg-background pl-8 focus:outline-blue-500"
                            />
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                            <IconMail className="absolute icon-login  left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                            <Input
                                id="email"
                                type="email"
                                placeholder="Email"
                                required
                                className="w-full rounded-lg bg-background pl-8"
                            />
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                            <IconLock className="absolute icon-login left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                            <Input
                                id="password"
                                type="password"
                                placeholder="Password"
                                required
                                className="w-full rounded-lg bg-background pl-8"
                            />
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full bg-blue-500 hover:bg-blue-400">Sign in</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
