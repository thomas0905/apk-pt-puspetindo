import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
// import './login.css';
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
import { Head, useForm } from '@inertiajs/react';
import favIcon from '../../../img/logo-kecil.png'
export default function Login() {
    const { data, setData, post, processing } = useForm({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {};
        let isValid = true;

        // Validasi email
        if (data.email.trim() === '') {
            validationErrors.email = 'Email harus di lengkapi';
            isValid = false;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
            validationErrors.email = 'Format email tidak valid';
            isValid = false;
        }

        // Validasi password
        if (data.password.trim() === '') {
            validationErrors.password = 'Password harus di lengkapi';
            isValid = false;
        }

        setErrors(validationErrors);

        if (isValid) {
            post('/auth/login');
        }
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='flex justify-center items-center h-screen p-3 sm:p-0'>
            <Head>
                <title>login</title>
                <link rel="icon" href={favIcon} type="image/x-icon" />
            </Head>
            <Card className="w-full max-w-md border-0 shadow-lg hover-card sm:p-1 animate__animated animate__fadeIn">
                <div className='justify-center flex mt-3'>
                    <img className='justify-center' src={logoLogin} alt="Logo" />
                </div>
                <CardHeader>
                    <CardTitle className="text-3xl text-blue-500">Login</CardTitle>
                    <CardDescription>
                        Hai 👏, Selamat Datang Kembali di PT.Puspetindo
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <div className="relative">
                                <IconMail className="absolute icon-login left-2.5 top-2.5 h-4 mt-0.5 w-4 text-muted-foreground" />
                                <Input
                                    type="text"
                                    placeholder="Email"
                                    name='email'
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="w-full rounded-lg bg-background pl-8 focus:outline-blue-500"
                                />
                                
                                {errors.email && <small className="text-red-600">{errors.email}</small>}
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <IconLock className="absolute icon-login left-2.5 mt-0.5 top-2.5 h-4 w-4 text-muted-foreground" />
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
                                {errors.password && <small className="text-red-600">{errors.password}</small>}
                            </div>

                            {/* <a href=""><small className='text-blue-600 outline='>Forget to Password??</small></a> */}
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
