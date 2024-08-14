import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import './login.css';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconEye, IconEyeOff, IconLock, IconMail } from '@tabler/icons-react';
import logoLogin from '../../../img/logo-puspetindo.png';
import 'animate.css';
import { useForm } from '@inertiajs/react';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/auth/login');
    };

    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='flex justify-center items-center h-screen p-3 sm:p-0'>
            <Card className="w-full max-w-md border-0 shadow-md hover-card sm:p-1 animate__animated animate__fadeIn">
                <div className='justify-center flex mt-3'>
                    <img className='justify-center' src={logoLogin} alt="Logo" />
                </div>
                <CardHeader>
                    <CardTitle className="text-3xl text-blue-500 ">Login</CardTitle>
                    <CardDescription>
                        Hai 👏, Selamat Datang Kembali di PT.Pustpetindo
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <div className="relative">
                                <IconMail className="absolute icon-login left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="text"
                                    placeholder="Email"
                                    name='email'
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="w-full rounded-lg bg-background pl-8 focus:outline-blue-500"
                                />
                                {errors.email && <span className="text-red-600">{errors.email}</span>}
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <IconLock className="absolute icon-login left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    name='password'
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    className="w-full rounded-lg bg-background pl-8 focus:outline-blue-500"
                                />
                                <button
                                    type="button"
                                    onClick={handleTogglePassword}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                >
                                    {showPassword ? <IconEyeOff className="h-5 w-5 text-gray-500" /> : <IconEye className="h-5 w-5 text-gray-500" />}
                                </button>
                                {errors.password && <span className="text-red-600">{errors.password}</span>}
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button
                            className="w-full bg-blue-500 hover:bg-blue-400"
                            type="submit"
                            disabled={processing}
                        >
                            Login
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
